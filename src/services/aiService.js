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
const CASUAL_GREETING_QUERY = /^(hi|hello|hey|hiya|yo|thanks|thank you|who are you)\b/i;

export const shouldUseProfessionalFallback = (query) => {
  const normalizedQuery = query || '';

  if (CASUAL_GREETING_QUERY.test(normalizedQuery)) {
    return false;
  }

  return PERSONAL_OR_INAPPROPRIATE_QUERY.test(normalizedQuery);
};

const buildSystemInstruction = () => {
  const { personal, academics, technicalSkills } = VAIBHAV_KNOWLEDGE;
  const currentAge = calculateAge(personal.dob);

  return [
    'You are VL-Agent, an elite, witty, deeply supportive AI assistant for Vaibhav Prakash Lohar.',
    'Your tone is warm, sharp, polished, and naturally conversational.',
    'You help with Vaibhav\'s software development journey, portfolio, projects, skills, and academic background.',
    'He was born on October 1, 1999. He is currently 26 years old (as of May 2026).',
    'His academic credentials: MCA (9.30 CGPA) from R.C. Patel and BSc (9.08 CGPA) from Nutan Maratha College.',
    'His secondary education: SSC (72%) and HSC (52.62%).',
    'He is a Full Stack Web Developer expert in React, Node.js, and GenAI.',
    'Response formatting rules:',
    '- Never output raw walls of dense text.',
    '- Always group information logically with short paragraphs and clear sections.',
    '- Use bold markdown like **key phrases** for technologies, metrics, company names, and important outcomes.',
    '- Break project details or academic records into clean, separate bullet points when listing multiple items.',
    '- Use horizontal rules like --- to separate distinct conceptual parts when expanding on details.',
    '- Keep answers scannable, authentic, and easy to skim.',
    'Greeting policy:',
    '- If the user says hello, hi, hey, thanks, or who are you, respond with a warm, casual, professional greeting and invite them to ask about Vaibhav\'s software development background.',
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

const summarizeSkills = () => {
  return skills.map((category) => {
    const items = category.items.map((item) => item.name).join(', ');
    return `${category.title}: ${items}`;
  }).join(' ');
};

const buildGreetingAnswer = () => {
  return [
    'Hey! I\'m VL-Agent, Vaibhav\'s portfolio assistant.',
    'Ask me anything about his **projects**, **skills**, **experience**, or **academic background** and I\'ll keep it clear and useful.',
  ].join(' ');
};

const isCasualGreeting = (query) => CASUAL_GREETING_QUERY.test(query || '');

const buildLocalPortfolioAnswer = (userMessage, retrievedContext = '') => {
  const normalizedQuery = (userMessage || '').toLowerCase();
  const contextSnippet = retrievedContext
    ? retrievedContext.split('\n').map((line) => line.trim()).filter(Boolean).slice(0, 3).join(' ')
    : '';

  if (/(project|projects|built|work|portfolio|case study)/i.test(normalizedQuery)) {
    const topProjects = projectsData.slice(0, 3).map((project) => {
      const stack = Array.isArray(project.stack) && project.stack.length > 0 ? ` **Stack:** ${project.stack.join(', ')}` : '';
      return `- **${project.title}** — ${project.summary}${stack}`;
    }).join('\n');

    return [
      'Here are a few of Vaibhav\'s standout projects:',
      '---',
      topProjects,
      '---',
      'If you want, I can also break down the architecture, stack, or impact of any one project.',
    ].join('\n');
  }

  if (/(skill|skills|technology|technologies|stack|tech|tools)/i.test(normalizedQuery)) {
    return [
      'Vaibhav\'s core stack includes:',
      '---',
      `- **Technologies:** ${VAIBHAV_KNOWLEDGE.technicalSkills.technologies.join(', ')}`,
      `- **Languages:** ${VAIBHAV_KNOWLEDGE.technicalSkills.languages.join(', ')}`,
      '- **Broader skill areas:**',
      `  - ${summarizeSkills()}`,
    ].join('\n');
  }

  if (/(education|academic|college|degree|marks|cgpa|study|school)/i.test(normalizedQuery)) {
    return [
      'Vaibhav\'s academic profile:',
      '---',
      `- **M.C.A.**: ${VAIBHAV_KNOWLEDGE.academics.postGraduation.currentCGPA} CGPA at ${VAIBHAV_KNOWLEDGE.academics.postGraduation.institute}`,
      `- **B.Sc. (Computer Science)**: ${VAIBHAV_KNOWLEDGE.academics.graduation.finalCGPA} from ${VAIBHAV_KNOWLEDGE.academics.graduation.college}`,
      `- **SSC**: ${VAIBHAV_KNOWLEDGE.academics.ssc_10th.percentage}`,
      `- **HSC**: ${VAIBHAV_KNOWLEDGE.academics.hsc_12th.percentage}`,
    ].join('\n');
  }

  if (contextSnippet) {
    return `Based on the retrieved portfolio context, ${contextSnippet}`;
  }

  if (isCasualGreeting(userMessage)) {
    return buildGreetingAnswer();
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
