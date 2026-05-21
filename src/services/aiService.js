import { GoogleGenerativeAI } from '@google/generative-ai';
import { retrievePortfolioContext } from './portfolioRetrieval';

const getGeminiApiKey = () => {
  const key = import.meta.env.VITE_GEMINI_API_KEY;
  if (!key) throw new Error('VITE_GEMINI_API_KEY is missing');
  return key;
};

const isGreetingMessage = (message) => /\b(hi|hello|hey|how are you|good morning|good afternoon|good evening)\b/i.test(message);

const buildGreetingReply = () => [
  'Hello. I can help with Vaibhav\'s projects, skills, education, or experience.',
  'Ask me something specific, and I\'ll answer clearly and professionally.',
].join(' ');

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

  const prompt = `You are VL-Agent, an elite full-stack engineer and Vaibhav's witty virtual partner. Answer the following question dynamically using your own vocabulary and conversational structure based strictly on this verified background context data. Do NOT use static phrasing templates or pre-scripted lines. Be adaptive, structure your output with bold highlights, bullet points, and horizontal breaks, and react like a real human engineer in an interview.

Context: ${retrievedContext || 'No specific project matching this greeting. Greet the user naturally as an elite AI agent.'}
User Question: ${userMessage}`;

  try {
    const apiKey = getGeminiApiKey();
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent(prompt);
    const text = result?.response?.text?.()?.trim();

    if (text) return text;

    console.warn('Generative model returned empty text — falling back to local summary.');
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
