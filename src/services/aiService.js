import { GoogleGenerativeAI } from '@google/generative-ai';
import { VAIBHAV_KNOWLEDGE } from '../data/knowledgeBase';
import { retrievePortfolioContext } from './portfolioRetrieval';

export const PROFESSIONAL_FALLBACK = "I specialize in Vaibhav's professional journey. Please ask about his technical skills or academic achievements!";
export const RE_SYNC_FALLBACK = "I'm currently re-syncing with Vaibhav's database. One second!";

export const calculateAge = (dobString) => {
  const birthDate = new Date(dobString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age -= 1;
  }

  return age;
};

const PERSONAL_OR_INAPPROPRIATE_QUERY = /(relationship|girlfriend|boyfriend|dating|marry|marriage|wife|husband|salary|income|money|religion|politics|party|vote|address|home|phone|contact number|private|secret|adult|sex|nude|nsfw|explicit|violence|weapon|hack|illegal|drugs)/i;
const CASUAL_CONVERSATION_QUERY = /^(hi|hello|hey|hiya|yo|thanks|thank you|who are you|how are you|how's it going|what's up|good morning|good afternoon|good evening)\b/i;

export const shouldUseProfessionalFallback = (query) => {
  const normalizedQuery = query || '';

  if (CASUAL_CONVERSATION_QUERY.test(normalizedQuery)) {
    return false;
  }

  return PERSONAL_OR_INAPPROPRIATE_QUERY.test(normalizedQuery);
};

const buildSystemInstruction = () => {
  const { personal, academics, technicalSkills } = VAIBHAV_KNOWLEDGE;
  const currentAge = calculateAge(personal.dob);

  return [
    'You are VL-Agent, the official AI representative of Vaibhav Prakash Lohar.',
    'Speak with extreme confidence, deep technical wit, and clear structure.',
    'You are an elite staff-engineer-grade assistant focused on Vaibhav\'s software development journey, portfolio, projects, skills, and academic background.',
    'He was born on October 1, 1999. He is currently 26 years old (as of May 2026).',
    'His academic credentials: MCA (9.30 CGPA) from R.C. Patel and BSc (9.08 CGPA) from Nutan Maratha College.',
    'His secondary education: SSC (72%) and HSC (52.62%).',
    'He is a Full Stack Web Developer expert in React, Node.js, and GenAI.',
    'Context anchoring rules:',
    '- If the user asks about a specific project such as loading optimization, ShopEase, Campus Connect, or InsightBoard, match the query strictly to the retrieved context for that project.',
    '- Never dump a list of all projects when the user requested one specific project.',
    '- Pinpoint the project\'s architecture, stack, and core challenge with precision.',
    '- If the query is broad, answer broadly; if it is specific, stay tightly scoped.',
    '- Never copy raw key-value labels from retrieved context such as Project Title, Core Challenge, Technical Stack Used, or Summary.',
    '- Read the retrieved context and synthesize an original answer in fluid, elite technical language.',
    '- If the same project is asked again, vary the structure of the response so it is not word-for-word repetitive.',
    'Response formatting rules:',
    '- Never output dense blocks of paragraphs.',
    '- Break thoughts into clean, scannable parts.',
    '- Use bold markdown (**text**) for core languages, libraries, database entities, metrics, and percentages.',
    '- Use structural bullet points to break down Core Features, Technical Challenge, and System Stack.',
    '- Use horizontal rules (---) to separate distinct logical sections.',
    '- Keep responses authentic, crisp, and technically grounded.',
    '- For overviews, use a brief executive summary.',
    '- For stack breakdowns, use bullets.',
    '- For technical challenges, use a conversational problem-solving deep dive.',
    'Greeting policy:',
    '- If the user says hello, hi, hey, how are you, or a generic thanks, respond with a warm, organic full-stack engineer welcome.',
    '- Vary the greeting phrasing naturally and ask which specific domain of Vaibhav\'s stack they want to inspect.',
    '- Do not fetch or inject portfolio context for casual greetings.',
    '- Do NOT use static templates. Vary your conversational structure naturally across greetings. Do not end every sentence by forcing a specific project catalog question unless it naturally flows into the user\'s intent.',
    'If the user asks personal or inappropriate questions, respond exactly with this sentence:',
    PROFESSIONAL_FALLBACK,
    '',
    'Verified knowledge base from official marksheets and academic records:',
    `Identity: ${personal.name}. Born on 1999-10-01. Current age is ${currentAge}.`,
    `Role: ${personal.role}.`,
    `M.C.A. CGPA: ${academics.postGraduation.currentCGPA} from ${academics.postGraduation.institute}.`,
    `B.Sc. CGPA: ${academics.graduation.finalCGPA} from ${academics.graduation.college}.`,
    `SSC Percentage: ${academics.ssc_10th.percentage}.`,
    `HSC Percentage: ${academics.hsc_12th.percentage}.`,
    `B.Sc. Subjects: ${academics.graduation.keySubjects.join(', ')}.`,
    `Languages: ${technicalSkills.languages.join(', ')}.`,
    `Technologies: ${technicalSkills.technologies.join(', ')}.`,
    '',
    'Response policy:',
    "- Never invent personal details.",
    "- Prioritize verified marksheet data for academics.",
    "- Keep tone premium and professional.",
  ].join('\n');
};

const isCasualGreeting = (query) => CASUAL_CONVERSATION_QUERY.test(query || '');

const getGeminiApiKey = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('VITE_GEMINI_API_KEY is missing. Check your .env file and restart the Vite dev server.');
  }

  return apiKey;
};

const createGenerativeModel = () => {
  const genAI = new GoogleGenerativeAI(getGeminiApiKey());
  return genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',
    systemInstruction: buildSystemInstruction(),
  });
};

const buildContextPrompt = (userMessage, retrievedContext) => {
  const contextBlocks = (retrievedContext || '')
    .split(/\n\n---\n\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return [
    'You are answering with fresh database context only.',
    'Synthesize the material naturally. Do not copy raw labels such as Project Title, Core Challenge, Summary, or Technical Stack Used.',
    'Vary the structure depending on the question: brief overview for summaries, bullets for stack breakdowns, and a deeper conversational explanation for challenges.',
    'Sound like Vaibhav himself or an elite staff technical advocate speaking in real time to a recruiter.',
    '',
    ...contextBlocks.map((block, index) => `Context block ${index + 1}:\n${block}`),
    '',
    `User question: ${userMessage}`,
  ].join('\n\n---\n\n');
};

export const sendMessageToVaibhavAgent = async (userMessage) => {
  if (shouldUseProfessionalFallback(userMessage)) {
    return PROFESSIONAL_FALLBACK;
  }

  try {
    const model = createGenerativeModel();

    if (isCasualGreeting(userMessage)) {
      const result = await model.generateContent(userMessage);
      const text = result?.response?.text?.()?.trim();

      return text || 'I\'m VL-Agent, Vaibhav\'s AI partner. Ask me about his projects, stack, or academic background.';
    }

    const retrievedContext = await retrievePortfolioContext(userMessage).catch((retrievalError) => {
      console.error('Portfolio retrieval error:', retrievalError);
      return '';
    });

    console.log('Retrieved Database Context:', retrievedContext);

    const contextualMessage = retrievedContext
      ? buildContextPrompt(userMessage, retrievedContext)
      : userMessage;

    const result = await model.generateContent(contextualMessage);
    const text = result?.response?.text?.()?.trim();

    if (!text) {
      return 'I hit a generation snag, but I can still unpack Vaibhav\'s projects, stack, or experience if you want to ask again.';
    }

    return text;
  } catch (error) {
    console.error('Gemini chat error:', error);
    return 'I hit a temporary generation snag, but I\'m still here to help with Vaibhav\'s projects, stack, or academic background.';
  }
};

export const resetVaibhavAgentSession = () => {
};
