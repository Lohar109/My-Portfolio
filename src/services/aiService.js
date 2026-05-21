import { GoogleGenerativeAI } from '@google/generative-ai';
import { retrievePortfolioContext } from './portfolioRetrieval';
import { skills as skillBuckets } from '../data/skills.js';

const getGeminiApiKey = () => {
  const key = import.meta.env.VITE_GEMINI_API_KEY;
  if (!key) throw new Error('VITE_GEMINI_API_KEY is missing');
  return key;
};

const isGreetingMessage = (message) => /\b(hi|hello|hey|how are you|good morning|good afternoon|good evening)\b/i.test(message);

const buildGreetingReply = () => [
  'Hello. I\'m here to help with Vaibhav\'s projects, skills, education, and professional background.',
  'If you want, ask me about a specific project, technology, or achievement and I\'ll keep the answer clear and well-structured.',
].join(' ');

const detectIntent = (message) => {
  const normalized = message.toLowerCase();

  if (/project|portfolio|case study|work|build|app|system|case-study/i.test(normalized)) {
    return 'project';
  }

  if (/education|degree|college|school|cgpa|marks|academic|study/i.test(normalized)) {
    return 'education';
  }

  if (/skill|skills|technology|technologies|stack|stacks|react|node|javascript|genai|ai|framework|tools?/i.test(normalized)) {
    return 'skills';
  }

  return 'general';
};

const looksTooGeneric = (text) => {
  if (!text) {
    return true;
  }

  const normalized = text.toLowerCase();
  return (
    text.length < 60 ||
    normalized.includes('i’m having a quick issue right now') ||
    normalized.includes('i am having a quick issue right now') ||
    normalized.includes('please try again') ||
    normalized.includes('ask me to') ||
    normalized.includes('what would you like to ask')
  );
};

export async function sendMessageToVaibhavAgent(userMessage) {
  if (!userMessage || typeof userMessage !== 'string') {
    return 'Please provide a short question about Vaibhav — projects, skills, or education.';
  }

  if (isGreetingMessage(userMessage)) {
    return buildGreetingReply();
  }

  // Retrieve RAG context (may be empty string)
  const retrievedContext = await retrievePortfolioContext(userMessage).catch((err) => {
    console.error('retrievePortfolioContext error:', err);
    return '';
  });

  const intent = detectIntent(userMessage);
  const intentInstruction = {
    project: 'The user is asking about a project. Prioritize concrete outcomes, technical stack, and problem-solving details.',
    education: 'The user is asking about education. Prioritize verified academic facts, institutions, and achievements.',
    skills: 'The user is asking about skills or technologies. Focus on listing technologies, tools, libraries, and practical experience. If the retrieved context contains project descriptions, extract and list the technologies used in those projects rather than summarizing the project narrative. Provide versions or experience level if available.',
    general: 'The user is asking a general question. Keep the answer concise, natural, and helpful.',
  }[intent];

  // If the user asked specifically about skills, try a strict extraction step
  // 1) Ask the model to extract technology names only (comma-separated)
  // 2) If that fails or looks generic, fall back to a local keyword extractor
  const tryExtractTechnologies = async (context) => {
    if (!context || context.length < 10) return null;

    try {
      const apiKey = getGeminiApiKey();
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const extractionPrompt = `Extract technology names, libraries, platforms, and tools from the following CONTEXT.\nOutput ONLY a comma-separated list of names with no extra commentary or narration.\nCONTEXT:\n${context}`;

      const extractionResult = await model.generateContent(extractionPrompt);
      const extractedText = extractionResult?.response?.text?.()?.trim() ?? '';

      if (extractedText && !looksTooGeneric(extractedText)) {
        // Normalize into array
        const parts = extractedText
          .split(/[\n,;]+/) // split on newlines, commas, semicolons
          .map((p) => p.replace(/^[\-\s•]+/, '').trim())
          .filter((p) => p.length > 1);

        if (parts.length > 0) return parts;
      }
    } catch (err) {
      console.warn('Technology extraction with model failed:', err?.message || err);
    }

    // Local fallback: scan the context for known skill names from data/skills.js
    try {
      const known = new Map();
      skillBuckets.forEach((bucket) => {
        (bucket.items || []).forEach((it) => known.set(it.name.toLowerCase(), it.name));
      });

      const found = [];
      const lowered = context.toLowerCase();
      // sort by first occurrence in the context so order feels natural
      Array.from(known.keys()).forEach((key) => {
        const idx = lowered.indexOf(key);
        if (idx !== -1) found.push({ key, idx, name: known.get(key) });
      });

      found.sort((a, b) => a.idx - b.idx);
      const unique = [...new Set(found.map((f) => f.name))];
      if (unique.length > 0) return unique;
    } catch (err) {
      console.warn('Local tech extraction failed:', err?.message || err);
    }

    return null;
  };

  // If intent is skills, attempt extraction-first flow for a precise answer
  if (intent === 'skills') {
    const techList = await tryExtractTechnologies(retrievedContext);
    if (techList && techList.length > 0) {
      const formatted = techList.map((t) => `- ${t}`).join('\n');
      return `Technologies & Tools:\n\n${formatted}`;
    }
    // If extraction failed, continue to the normal generation path below
  }

  const prompt = `You are VL-Agent, an elite full-stack engineer and Vaibhav's witty virtual partner. Answer the following question dynamically using your own vocabulary and conversational structure based strictly on this verified background context data. Do NOT use static phrasing templates or pre-scripted lines. Be adaptive, structure your output with bold highlights, bullet points, and horizontal breaks, and react like a real human engineer in an interview.

Intent: ${intent}
${intentInstruction}

Context: ${retrievedContext || 'No specific project matching this greeting. Greet the user naturally as an elite AI agent.'}
User Question: ${userMessage}`;

  try {
    const apiKey = getGeminiApiKey();
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent(prompt);
    const text = result?.response?.text?.()?.trim();

    if (text && !looksTooGeneric(text)) return text;

    console.warn('Generative model returned weak or empty text — falling back to local summary.');
  } catch (err) {
    console.error('Generative model error:', err);
  }

  // Local synthesized fallback (non-throwing): summarize retrievedContext when model fails
  if (retrievedContext && retrievedContext.length > 50) {
    const snippet = retrievedContext.length > 800 ? `${retrievedContext.slice(0, 800)}...` : retrievedContext;
    return `Summary (from portfolio data):\n\n---\n${snippet}\n\nIf you want more detail, ask me to "tell me more about" a specific project or skill.`;
  }

  return "I don't have the portfolio context right now, but I can answer general questions about Vaibhav's skills and projects — what would you like to ask?";
}
