import { GoogleGenerativeAI } from '@google/generative-ai';
import { retrievePortfolioContext } from './portfolioRetrieval';
import { skills as skillBuckets } from '../data/skills.js';
import { VAIBHAV_KNOWLEDGE } from '../data/knowledgeBase.js';

const getGeminiApiKey = () => {
  const key = import.meta.env.VITE_GEMINI_API_KEY;
  if (!key) throw new Error('VITE_GEMINI_API_KEY is missing');
  return key;
};

const isGreetingMessage = (message) => /\b(hi|hello|hey|how are you|good morning|good afternoon|good evening)\b/i.test(message);

const buildGreetingReply = () => [
  'Hey there! I\'m Vaibhav\'s AI partner. I am here to help you explore his technical journey, full-stack projects, skillset, and academic achievements.',
  'What specific area or project are you interested in today? Feel free to ask anything!'
].join(' ');

const detectIntent = (message) => {
  const normalized = message.toLowerCase();

  if (/achievement|achievements|milestone|milestones|award|awards|score|scores|rank|ranks/i.test(normalized)) {
    return 'achievements';
  }

  if (/hire|employ|recruit|why hire|pitch|recommendation|value/i.test(normalized)) {
    return 'whyHire';
  }

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
    text.length < 30 ||
    normalized.includes('i’m having a quick issue right now') ||
    normalized.includes('i am having a quick issue right now') ||
    normalized.includes('please try again') ||
    normalized.includes('ask me to') ||
    normalized.includes('what would you like to ask') ||
    normalized.includes('project title:') ||
    normalized.includes('core challenge:') ||
    normalized.includes('technical stack used:')
  );
};

function generateLocalSmartResponse(userMessage, retrievedContext) {
  const query = userMessage.toLowerCase();

  // 1. Database & Storage intent
  if (/\b(database|databases|db|sql|postgresql|postgres|mongodb|mongo|redis|supabase|prisma)\b/i.test(query)) {
    return [
      "Yes, Vaibhav has strong **Database & Storage** experience! He is proficient in both relational and non-relational database management systems.",
      "His core database skill set includes:",
      "- **PostgreSQL & SQL**: Writing complex relational queries and managing database schemas.",
      "- **Supabase**: Leveraged for auth, real-time database syncing, and hosting database instances.",
      "- **MongoDB**: Managing document-based NoSQL storage for flexible data structures.",
      "- **Redis**: Implementing high-performance in-memory caching and session management.",
      "- **Prisma ORM**: Building type-safe database queries and migration workflows.",
      "\nHe has actively applied these technologies in his top projects. For instance, in **ShopEase Intelligent Commerce Suite**, he built a robust database model in **PostgreSQL** to handle multi-variant inventory data, and in this **GenAI Portfolio**, he utilizes a **Vector Database** to manage semantic embeddings for RAG retrieval."
    ].join('\n');
  }

  // 2. AI / Machine Learning intent
  if (/\b(ai|genai|generative|ml|machine learning|embeddings|vector|rag|langchain|openai|gemini|pinecone)\b/i.test(query)) {
    return [
      "Yes! Vaibhav is deeply skilled in **Generative AI & Intelligent Systems Design**.",
      "His expertise in AI/ML includes:",
      "- **RAG (Retrieval-Augmented Generation)**: Grounding LLM responses using semantic search.",
      "- **LangChain**: Building LLM chains, agent routing, and prompt engineering pipelines.",
      "- **Vector Databases (Pinecone, Supabase pgvector)**: Storing and matching high-dimensional embeddings.",
      "- **Google Gemini & OpenAI APIs**: Developing multimodal vision and audio categorization systems.",
      "\nHis portfolio itself is a testament to this expertise. It features a custom-built GenAI agent that implements a specialized RAG pipeline to search, retrieve, and ground answers about his technical journey in real-time. He also built **ShopEase**, which utilizes vision and audio APIs to automate inventory onboarding."
    ].join('\n');
  }

  // 3. Backend / APIs intent
  if (/\b(backend|node|nodejs|express|api|apis|rest|restful|graphql|auth|jwt)\b/i.test(query)) {
    return [
      "Vaibhav has extensive experience in **Backend Development**, specializing in building scalable APIs and secure backend architectures.",
      "His core backend capabilities include:",
      "- **Node.js & Express.js**: Crafting robust server-side applications and high-throughput microservices.",
      "- **API Design**: Building and maintaining clean **RESTful APIs** and **GraphQL** endpoints.",
      "- **Security**: Implementing secure JWT authentication, session management, and middleware layers.",
      "- **Prisma ORM**: Integrating type-safe database queries for streamlined operations.",
      "\nHis backend engineering is prominent in projects like **ShopEase**, where he structured an enterprise-ready server architecture to process automated inventory pipelines, and this **AI Assistant**'s backend routing."
    ].join('\n');
  }

  // 4. Frontend / React / UI intent
  if (/\b(frontend|react|next|nextjs|typescript|ts|javascript|js|tailwind|css|vue|html)\b/i.test(query)) {
    return [
      "Vaibhav is an expert in **Frontend Development**, with a strong passion for building responsive, premium, and interactive user interfaces.",
      "His frontend stack features:",
      "- **React.js & Next.js**: Architecting dynamic single-page and server-rendered web applications.",
      "- **TypeScript**: Writing clean, type-safe, and maintainable component-driven code.",
      "- **Tailwind CSS & Vanilla CSS**: Implementing responsive grid/flexbox layouts and fluid animations.",
      "- **Vite**: Optimizing rapid frontend builds and hot-module replacement setups.",
      "\nHis eye for UI design is fully showcased in this portfolio, designed to feel calm, fluid, and highly interactive with dark mode support, modern glassmorphism, and smooth Framer Motion transitions."
    ].join('\n');
  }

  // 5. Projects intent
  if (/\b(project|projects|work|featured|app|apps|build|code|casestudy|case study)\b/i.test(query)) {
    return [
      "Vaibhav has engineered several high-impact, full-stack projects. Here are his top featured builds:",
      "\n1. **ShopEase Intelligent Commerce Suite (SaaS Product)**",
      "   - *Focus*: Enterprise commerce operations with automated inventory pipelines.",
      "   - *Tech*: Node.js, React, PostgreSQL, Multimodal GenAI (Vision & Audio), Supabase.",
      "   - *Outcome*: Automates e-commerce catalog onboarding by instantly extracting structured product details from images and voice notes.",
      "\n2. **GenAI-Powered Portfolio & Agent (Developer Platform)**",
      "   - *Focus*: Self-aware portfolio showcasing profile intelligence.",
      "   - *Tech*: React, Node.js, Supabase, LangChain, Google Gemini, RAG Architecture, Vector DB.",
      "   - *Outcome*: A live, self-describing portfolio that answers targeted technical questions about his journey with grounded responses.",
      "\nWould you like me to tell you more about the architecture or challenges of any specific project?"
    ].join('\n');
  }

  // 6. Education / Academics intent
  if (/\b(education|academics|college|degree|mca|bsc|school|university|cgpa|marks|study|studies)\b/i.test(query)) {
    const academics = VAIBHAV_KNOWLEDGE.academics;
    return [
      "Vaibhav has an outstanding academic track record in Computer Science and Applications:",
      `- **Post-Graduation**: **Master of Computer Applications (M.C.A.)** at ${academics.postGraduation.institute}.`,
      `  - *Academic Excellence*: Currently holding a stellar **${academics.postGraduation.currentCGPA} CGPA** (Sem 3: 9.30 SGPA, Sem 2: 8.46 SGPA, Sem 1: 8.08 SGPA).`,
      `- **Graduation**: **Bachelor of Science (Computer Science)** at ${academics.graduation.college}.`,
      `  - *Result*: Graduated with a high **${academics.graduation.finalCGPA}** (Grade: **${academics.graduation.grade}**).`,
      `  - *Key Focus Area*: RDBMS, Data Structures, Operating Systems, Computer Networks, and C++ Programming.`
    ].join('\n');
  }

  // 7. Why Hire / Professional Pitch intent
  if (/\b(hire|why hire|employ|recruit|pitch|proposition)\b/i.test(query)) {
    const pitch = VAIBHAV_KNOWLEDGE.whyHirePitch;
    return [
      `### ${pitch.headline}`,
      "Vaibhav is an exceptional candidate with a high technical aptitude and a structured approach to building systems. Here is why you should consider hiring him for your team:\n",
      pitch.points.map(point => `- ${point}`).join('\n'),
      "\nIf you want to connect with him directly for an interview or review his resume, please click the **Get in Touch / Contact** tab or reach out to him at [LinkedIn](https://www.linkedin.com/in/vaibhavlohar109/)!"
    ].join('\n');
  }

  // 8. Achievements / Milestones intent
  if (/\b(achievement|achievements|milestone|milestones|award|awards|score|scores|cgpa|rank|ranks)\b/i.test(query)) {
    const achievements = VAIBHAV_KNOWLEDGE.achievements;
    return [
      "### Vaibhav's Key Milestones & Achievements\n",
      "Vaibhav has built a highly successful academic and technical record:",
      achievements.map(a => `- **${a.title}**: ${a.description}`).join('\n'),
      "\nThese accomplishments reflect his strong commitment to engineering excellence, visual precision, and outstanding academic performance."
    ].join('\n');
  }

  // 9. Contact / Socials intent
  if (/\b(contact|email|phone|linkedin|github|social|socials|resume)\b/i.test(query)) {
    return [
      "I would love to help you connect with Vaibhav! Here is how you can reach out:",
      "- **Location**: Jalgaon/Pune, India",
      "- **Socials & Profiles**:",
      "  - [LinkedIn Profile](https://www.linkedin.com/in/vaibhavlohar109/) (Professional updates & networking)",
      "  - [GitHub Profile](https://github.com/Lohar109) (Source code & open-source contributions)",
      "\nYou can also click the **Get in Touch / Contact** option on the sidebar to send a direct message to his email!"
    ].join('\n');
  }

  // 10. General fallback when we have retrieved context
  if (retrievedContext && retrievedContext.length > 50) {
    let formatted = retrievedContext
      .replace(/Project Title:/g, '\n**Project:**')
      .replace(/Role:/g, '\n- **Role:**')
      .replace(/Summary:/g, '\n- **Summary:**')
      .replace(/Core Challenge:/g, '\n- **Core Challenge:**')
      .replace(/Technical Stack Used:/g, '\n- **Tech Stack:**');
      
    return [
      "I've searched Vaibhav's portfolio data and found this relevant information:",
      formatted,
      "\nFeel free to ask a follow-up question or explore more specific details about his projects, skills, or academics!"
    ].join('\n');
  }

  return [
    "I'm here to act as Vaibhav's AI partner! I can provide smart, detailed information on his:",
    "- **Full-Stack Development Skills** (React, Next.js, Node.js, Express, TypeScript)",
    "- **Database Expertise** (PostgreSQL, MongoDB, Supabase, Redis, SQL)",
    "- **AI System Design** (RAG architecture, LangChain, vector embeddings, Gemini/OpenAI)",
    "- **Featured Projects** (ShopEase SaaS, GenAI Portfolio, and custom-built systems)",
    "- **Academic Record** (MCA with a stellar 9.30 CGPA)",
    "\nWhat specific aspect of his work or background would you like to explore?"
  ].join('\n');
}

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
    achievements: 'The user is asking about academic, technical, or project achievements. Highlight his outstanding MCA 9.30 CGPA (Winter 2025 Semester 3 9.30 SGPA), BSc 9.08 CGPA, and top system architectures (ShopEase SaaS, GenAI Portfolio). Format as a beautiful clean list.',
    whyHire: 'The user is asking why they should hire Vaibhav. Give a highly persuasive, elite full-stack developer pitch focusing on his AI/RAG expertise, database mastery (PostgreSQL, Supabase, Redis), high academic success (9.30 MCA CGPA), and functional builder mindset. Include call-to-actions pointing to LinkedIn/GitHub.',
    general: 'The user is asking a general question. Keep the answer concise, natural, and helpful.',
  }[intent];

  // Try calling the live Generative AI (Gemini) model
  try {
    const apiKey = getGeminiApiKey();
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `You are VL-Agent, an elite full-stack engineer and Vaibhav's witty virtual partner. 
    Answer the user's question dynamically, warmly, and in a clean conversational structure (using paragraph explanations, bold highlights, bullet points, and clear list formatting). 
    Never output raw unstructured context keys directly (like "Project Title:", "Role:", "Summary:", "Core Challenge:"). Always summarize them naturally as a real human developer would in a professional interview.
    Make sure all links (e.g. LinkedIn, GitHub) are returned as proper clickable markdown links (e.g. [LinkedIn Profile](https://www.linkedin.com/in/vaibhavlohar109/)).
    
    Verified Background Context:
    ${retrievedContext || 'No specific project matching this query.'}
    
    Static Knowledge Base Reference:
    - Name: ${VAIBHAV_KNOWLEDGE.personal.name}
    - Role: ${VAIBHAV_KNOWLEDGE.personal.role}
    - Academics: MCA ${VAIBHAV_KNOWLEDGE.academics.postGraduation.currentCGPA} CGPA (latest Sem 3 9.30 SGPA), BSc ${VAIBHAV_KNOWLEDGE.academics.graduation.finalCGPA} CGPA.
    - Achievements: ${VAIBHAV_KNOWLEDGE.achievements.map(a => `${a.title}: ${a.description}`).join(' ')}
    - Hiring Pitch: ${VAIBHAV_KNOWLEDGE.whyHirePitch.headline} ${VAIBHAV_KNOWLEDGE.whyHirePitch.points.join(' ')}
    
    Intent: ${intent}
    ${intentInstruction}
    
    User Question: ${userMessage}`;

    const result = await model.generateContent(prompt);
    const text = result?.response?.text?.()?.trim();

    if (text && !looksTooGeneric(text)) return text;

    console.warn('Generative model returned weak or empty text — falling back to smart local heuristics.');
  } catch (err) {
    console.error('Generative model error:', err);
  }

  // Trigger our Smart Local Heuristics Fallback Engine
  return generateLocalSmartResponse(userMessage, retrievedContext);
}
