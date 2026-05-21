import { GoogleGenerativeAI } from '@google/generative-ai';
import { VAIBHAV_KNOWLEDGE } from '../data/knowledgeBase';
import { projectsData } from '../data/projects';
import { skills } from '../data/skills';
import { retrievePortfolioContext } from './portfolioRetrieval';

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
    'His academic credentials: MCA (9.30 CGPA) from R.C. Patel and BSc (9.08 CGPA) from Nutan Maratha College.',
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

const summarizeProjects = () => {
  return projectsData.slice(0, 6).map((project) => {
    const stack = Array.isArray(project.stack) && project.stack.length > 0 ? ` Stack: ${project.stack.join(', ')}.` : '';
    return `${project.title} - ${project.summary}${stack}`;
  }).join(' ');
};

const summarizeSkills = () => {
  return skills.map((category) => {
    const items = category.items.map((item) => item.name).join(', ');
    return `${category.title}: ${items}`;
  }).join(' ');
};

const buildLocalPortfolioAnswer = (userMessage, retrievedContext = '') => {
  const normalizedQuery = (userMessage || '').toLowerCase();
  const contextSnippet = retrievedContext
    ? retrievedContext.split('\n').map((line) => line.trim()).filter(Boolean).slice(0, 3).join(' ')
    : '';

  if (/(project|projects|built|work|portfolio|case study)/i.test(normalizedQuery)) {
    return `Vaibhav has built projects such as ${summarizeProjects()}`;
  }

  if (/(skill|skills|technology|technologies|stack|tech|tools)/i.test(normalizedQuery)) {
    return `Vaibhav's core stack includes ${VAIBHAV_KNOWLEDGE.technicalSkills.technologies.join(', ')}. Broader skill areas: ${summarizeSkills()}`;
  }

  if (/(education|academic|college|degree|marks|cgpa|study|school)/i.test(normalizedQuery)) {
    return [
      `Vaibhav's academic profile includes an M.C.A. with a current CGPA of ${VAIBHAV_KNOWLEDGE.academics.postGraduation.currentCGPA} from ${VAIBHAV_KNOWLEDGE.academics.postGraduation.institute}.`,
      `He also completed a B.Sc. in Computer Science with a final CGPA of ${VAIBHAV_KNOWLEDGE.academics.graduation.finalCGPA} from ${VAIBHAV_KNOWLEDGE.academics.graduation.college}.`,
      `His SSC percentage is ${VAIBHAV_KNOWLEDGE.academics.ssc_10th.percentage} and his HSC percentage is ${VAIBHAV_KNOWLEDGE.academics.hsc_12th.percentage}.`,
    ].join(' ');
  }

  if (contextSnippet) {
    return `Based on the retrieved portfolio context, ${contextSnippet}`;
  }

  return PROFESSIONAL_FALLBACK;
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
    model: 'gemini-2.0-flash',
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
    let retrievedContext = '';

    try {
      retrievedContext = await retrievePortfolioContext(userMessage);
    } catch (retrievalError) {
      console.error('Portfolio retrieval error:', retrievalError);
    }

    const contextualPrompt = retrievedContext
      ? `Use the following retrieved portfolio context when it is relevant and accurate:\n\n${retrievedContext}\n\nUser question:\n${userMessage}`
      : userMessage;

    const chat = getChatSession();
    const result = await chat.sendMessage(contextualPrompt);
    const text = result?.response?.text?.()?.trim();

    if (!text) {
      return buildLocalPortfolioAnswer(userMessage, retrievedContext);
    }

    return text;
  } catch (error) {
    console.error('Gemini chat error:', error);
    chatSession = null;
    return buildLocalPortfolioAnswer(userMessage);
  }
};

export const resetVaibhavAgentSession = () => {
  chatSession = null;
};
