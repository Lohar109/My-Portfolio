import { supabase } from '../config/supabaseClient.js'

/**
 * Retrieve context for a portfolio query using vector search.
 * - Generates an embedding via Google's embedding endpoint
 * - Calls the Supabase RPC `match_portfolio_embeddings`
 * - Returns a single combined string containing the matched text rows
 */
export async function retrievePortfolioContext(query) {
  if (!query) return ''

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY
  if (!apiKey) throw new Error('VITE_GEMINI_API_KEY is not set')

  const url = `https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent?key=${apiKey}`
  const body = {
    content: { parts: [{ text: query }] },
    outputDimensionality: 1536,
  }

  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!resp.ok) {
    const txt = await resp.text()
    throw new Error(`Embedding request failed: ${resp.status} ${txt}`)
  }

  const json = await resp.json()

  // Try common response shapes to extract the embedding vector
  let vector = null
  if (Array.isArray(json?.data) && Array.isArray(json.data[0]?.embedding)) {
    vector = json.data[0].embedding
  } else if (Array.isArray(json?.outputs) && Array.isArray(json.outputs[0]?.embedding)) {
    vector = json.outputs[0].embedding
  } else if (Array.isArray(json?.outputs) && Array.isArray(json.outputs[0]?.content) && Array.isArray(json.outputs[0].content[0]?.embedding)) {
    vector = json.outputs[0].content[0].embedding
  } else if (Array.isArray(json?.embedding)) {
    vector = json.embedding
  }

  if (!vector) {
    throw new Error('Unable to extract embedding from Gemini response')
  }

  // Call Supabase RPC to perform vector similarity search
  const { data, error } = await supabase.rpc('match_portfolio_embeddings', {
    query_embedding: vector,
    match_threshold: 0.35,
    match_count: 3,
  })

  if (error) {
    console.error('Supabase RPC error', error)
    throw error
  }

  if (!data || data.length === 0) return ''

  // Extract a text-like field from each row and join into a single context string
  const pieces = data.map((row) => {
    if (!row) return ''
    if (typeof row === 'string') return row
    // common keys to try
    return row.content ?? row.text ?? row.document ?? row.payload ?? row.metadata ?? Object.values(row).find(v => typeof v === 'string') ?? JSON.stringify(row)
  }).filter(Boolean)

  return pieces.join('\n\n---\n\n')
}

export default retrievePortfolioContext
