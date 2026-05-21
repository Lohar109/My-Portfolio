import { supabase } from '../config/supabaseClient.js'

const GEMINI_API_VERSION = 'v1beta'
const GEMINI_EMBEDDING_MODEL = 'gemini-embedding-2'
const GEMINI_EMBEDDING_DIMENSIONS = 1536

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

  const url = `https://generativelanguage.googleapis.com/${GEMINI_API_VERSION}/models/${GEMINI_EMBEDDING_MODEL}:embedContent?key=${apiKey}`
  const body = {
    content: { parts: [{ text: query }] },
    outputDimensionality: GEMINI_EMBEDDING_DIMENSIONS,
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
  console.log('Vector API Response:', json)

  const vectorArray = json?.embedding?.values

  if (!vectorArray) {
    console.error('Unable to extract embedding vector from Gemini response. Expected result.embedding.values but received:', json)
    throw new Error(`Unable to extract embedding from Gemini response: ${JSON.stringify(json)}`)
  }

  // Call Supabase RPC to perform vector similarity search
  const { data, error } = await supabase.rpc('match_portfolio_embeddings', {
    query_embedding: vectorArray,
    match_threshold: 0.35,
    match_count: 3,
  })

  if (error) {
    console.error('Supabase RPC error', error)
    throw error
  }

  if (!data || data.length === 0) return ''

  const queryTerms = query
    .toLowerCase()
    .split(/[^a-z0-9+.#-]+/i)
    .map((term) => term.trim())
    .filter((term) => term.length > 2)

  const extractText = (row) => {
    if (!row) return ''
    if (typeof row === 'string') return row

    const candidate = row.content ?? row.text ?? row.document ?? row.payload ?? row.metadata
    if (typeof candidate === 'string') return candidate
    if (candidate && typeof candidate === 'object') {
      const candidateText = Object.values(candidate).find((value) => typeof value === 'string')
      if (candidateText) return candidateText
    }

    return Object.values(row).find((value) => typeof value === 'string') ?? JSON.stringify(row)
  }

  const extractSimilarity = (row) => {
    if (!row || typeof row !== 'object') return 0

    const similarity = row.similarity ?? row.score ?? row.match_score
    if (typeof similarity === 'number' && Number.isFinite(similarity)) {
      return similarity
    }

    const distance = row.distance ?? row.match_distance
    if (typeof distance === 'number' && Number.isFinite(distance)) {
      return 1 - distance
    }

    return 0
  }

  const scoreTextRelevance = (text) => {
    const normalizedText = (text || '').toLowerCase()
    if (!normalizedText) return 0

    return queryTerms.reduce((score, term) => score + (normalizedText.includes(term) ? 1 : 0), 0)
  }

  const rankedPieces = data
    .map((row, index) => ({
      row,
      text: extractText(row),
      baseRank: data.length - index,
      similarityRank: extractSimilarity(row),
      textRank: scoreTextRelevance(extractText(row)),
    }))
    .filter(({ text }) => Boolean(text))
    .sort((left, right) => {
      if (right.textRank !== left.textRank) return right.textRank - left.textRank
      if (right.similarityRank !== left.similarityRank) return right.similarityRank - left.similarityRank
      return right.baseRank - left.baseRank
    })

  const pieces = rankedPieces.map(({ text }) => text)

  const uniquePieces = [...new Set(pieces)]

  if (uniquePieces.length === 0) return ''

  return uniquePieces.join('\n\n---\n\n')
}

export default retrievePortfolioContext
