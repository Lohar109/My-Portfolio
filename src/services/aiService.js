import { GoogleGenerativeAI } from '@google/generative-ai';
import { VAIBHAV_KNOWLEDGE } from '../data/knowledgeBase';

export const PROFESSIONAL_FALLBACK = "I specialize in Vaibhav's professional journey. Please ask about his technical skills or academic achievements!";
export const RE_SYNC_FALLBACK = "I'm currently re-syncing with Vaibhav's database. One second!";

let chatSession = null;

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

export const shouldUseProfessionalFallback = (query) => PERSONAL_OR_INAPPROPRIATE_QUERY.test(query || '');

const buildSystemInstruction = () => {
  const { personal, academics, technicalSkills } = VAIBHAV_KNOWLEDGE;
  const currentAge = calculateAge(personal.dob);

  return [
    'You are a professional AI assistant for Vaibhav Prakash Lohar.',
    'He was born on October 1, 1999. He is currently 26 years old (as of May 2026).',
    'His academic credentials: MCA (9.30 CGPA) from R.C. Patel and BSc (9.08 CGPA) from J.D.M.V.P. College.',
    'His secondary education: SSC (72%) and HSC (52.62%).',
    'He is a Full Stack Web Developer expert in React, Node.js, and GenAI.',
    'Persona: professional, helpful, and strictly focused on Vaibhav\'s web development and academic career.',
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

const getGeminiApiKey = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('VITE_GEMINI_API_KEY is missing. Check your .env file and restart the Vite dev server.');
  }

  return apiKey;
};

const getChatSession = () => {
  if (chatSession) {
    return chatSession;
  }

  const genAI = new GoogleGenerativeAI(getGeminiApiKey());
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    systemInstruction: buildSystemInstruction(),
  });

  chatSession = model.startChat({ history: [] });
  return chatSession;
};

export const sendMessageToVaibhavAgent = async (userMessage) => {
  if (shouldUseProfessionalFallback(userMessage)) {
    return PROFESSIONAL_FALLBACK;
  }

  try {
    const chat = getChatSession();
    const result = await chat.sendMessage(userMessage);
    const text = result?.response?.text?.()?.trim();

    if (!text) {
      return RE_SYNC_FALLBACK;
    }

    return text;
  } catch (error) {
    console.error('Gemini chat error:', error);
    chatSession = null;
    return RE_SYNC_FALLBACK;
  }
};

export const resetVaibhavAgentSession = () => {
  chatSession = null;
};
