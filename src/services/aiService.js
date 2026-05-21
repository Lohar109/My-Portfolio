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

const buildGreetingAnswer = (userMessage) => {
  const greetingVariants = [
    'Hey, I\'m VL-Agent. I can unpack Vaibhav\'s **projects**, **stack**, or **academic profile** with precision.',
    'Absolutely, I\'m here. Ask me about Vaibhav\'s **full-stack work**, **AI integrations**, or any project detail you want dissected.',
    'Good to see you. If you want the sharp version of Vaibhav\'s engineering story, point me at a project, skill, or metric.',
    'Hello. I can walk you through Vaibhav\'s **React**, **Node.js**, **Supabase**, or **GenAI** work in a clean, technical format.',
  ];

  const index = Math.abs((userMessage || '').length) % greetingVariants.length;
  return `${greetingVariants[index]} Which part of his full-stack toolkit should we inspect first?`;
};

const isCasualGreeting = (query) => CASUAL_CONVERSATION_QUERY.test(query || '');

const PROJECT_FOCUSED_QUERY = /(project|projects|built|portfolio|case study|loading optimization|loading optimisation|shopease|campus connect|insightboard|supportflow|mediaops|marketpulse)/i;

const shouldUseFreshContextSession = (query, retrievedContext) => Boolean(retrievedContext) && PROJECT_FOCUSED_QUERY.test(query || '');

const buildContextualMessage = (userMessage, retrievedContext) => [
  'Ignore prior chat history and any conflicting project details from earlier turns.',
  'Use only the freshly retrieved portfolio context below when answering this question.',
  'If the retrieved context conflicts with past conversation memory, the retrieved context wins.',
  'Do not quote the retrieved context verbatim. Synthesize it into a natural, original answer.',
  '',
  `Retrieved context:\n${retrievedContext}`,
  '',
  `User question:\n${userMessage}`,
].join('\n');

const parseProjectContext = (retrievedContext) => {
  const blocks = (retrievedContext || '')
    .split(/\n\n---\n\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const firstBlock = blocks[0] || '';
  const titleMatch = firstBlock.match(/Project Title:\s*(.+?)(?:\.|$)/i);
  const roleMatch = firstBlock.match(/Role:\s*(.+?)(?:\.|$)/i);
  const summaryMatch = firstBlock.match(/Summary:\s*(.+?)(?:\.|$)/i);
  const challengeMatch = firstBlock.match(/Core Challenge:\s*(.+?)(?:\.|$)/i);
  const stackMatch = firstBlock.match(/Technical Stack Used:\s*(.+?)(?:\.|$)/i);

  if (!titleMatch && !summaryMatch && !challengeMatch && !stackMatch) {
    return '';
  }

  const sections = [];

  if (titleMatch || roleMatch) {
    sections.push(`**Project Focus:** ${[titleMatch?.[1], roleMatch ? `(${roleMatch[1]})` : ''].filter(Boolean).join(' ')}`.trim());
  }

  if (summaryMatch) {
    sections.push(`**Executive Summary:** ${summaryMatch[1]}`);
  }

  if (challengeMatch) {
    sections.push(`**Technical Challenge:** ${challengeMatch[1]}`);
  }

  if (stackMatch) {
    sections.push(`**System Stack:** ${stackMatch[1]}`);
  }

  return sections.join('\n');
};

const buildLocalPortfolioAnswer = (userMessage, retrievedContext = '') => {
  const normalizedQuery = (userMessage || '').toLowerCase();
  const contextSnippet = retrievedContext
    ? retrievedContext.split('\n').map((line) => line.trim()).filter(Boolean).slice(0, 3).join(' ')
    : '';

  const hasRetrievedProjectContext = Boolean(retrievedContext) && PROJECT_FOCUSED_QUERY.test(normalizedQuery);

  if (hasRetrievedProjectContext) {
    const synthesizedContext = parseProjectContext(retrievedContext);

    return [
      'Here is the most relevant project synthesis:',
      '---',
      synthesizedContext || retrievedContext,
    ].join('\n');
  }

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
  if (isCasualGreeting(userMessage)) {
    return buildGreetingAnswer(userMessage);
  }

  if (shouldUseProfessionalFallback(userMessage)) {
    return PROFESSIONAL_FALLBACK;
  }

  let retrievedContext = '';

  try {
    try {
      retrievedContext = await retrievePortfolioContext(userMessage);
    } catch (retrievalError) {
      console.error('Portfolio retrieval error:', retrievalError);
    }

    const contextualMessage = retrievedContext
      ? buildContextualMessage(userMessage, retrievedContext)
      : userMessage;

    console.log('Retrieved Database Context:', retrievedContext);

    const chat = shouldUseFreshContextSession(userMessage, retrievedContext)
      ? (() => {
          const genAI = new GoogleGenerativeAI(getGeminiApiKey());
          const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash',
            systemInstruction: buildSystemInstruction(),
          });

          return model.startChat({ history: [] });
        })()
      : getChatSession();

    const result = await chat.sendMessage(contextualMessage);
    const text = result?.response?.text?.()?.trim();

    if (!text) {
      return buildLocalPortfolioAnswer(userMessage, retrievedContext);
    }

    return text;
  } catch (error) {
    console.error('Gemini chat error:', error);
    chatSession = null;
    return buildLocalPortfolioAnswer(userMessage, retrievedContext);
  }
};

export const resetVaibhavAgentSession = () => {
  chatSession = null;
};
