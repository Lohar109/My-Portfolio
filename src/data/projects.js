export const projectsData = [
  {
    slug: 'studioflow',
    isFeatured: true,
    title: 'ShopEase Intelligent Commerce Suite',
    category: 'SaaS Product',
    role: 'Full Stack & AI Integration',
    year: '2026',
    summary:
      'An AI-powered e-commerce platform built on a scalable Node.js architecture. It uses multimodal GenAI (Vision & Audio) and structured JSON extraction to automate product onboarding and streamline inventory management.',
    previewText:
      'Designed to feel calm, data-rich, and client-ready with strong hierarchy and fast scanning.',
    detailIntro:
      'ShopEase is an enterprise-ready e-commerce platform that unifies storefront, admin operations, and backend services on a scalable Node.js architecture. It incorporates multimodal GenAI to automate product categorization and intelligent inventory management.',
    challenge:
      'Automated Inventory & GenAI Pipelines',
    outcome:
      'Scale merchandising & eliminate manual data entry',
    topInfoCards: [
      { label: 'Role', value: 'Full Stack & AI Integration' },
      { label: 'Core Focus', value: 'Automated Inventory & GenAI Pipelines' },
      { label: 'Outcome', value: 'Scale merchandising & eliminate manual data entry' },
    ],
    stats: [
      { label: 'Use Case', value: 'Enterprise commerce operations' },
      { label: 'Audience', value: 'Retail and merchandising teams' },
      { label: 'Primary Goal', value: 'Automate catalog onboarding' },
    ],
    caseStudy: {
      overview:
        'ShopEase was architected to solve the manual bottlenecks in modern e-commerce operations. By unifying the storefront with an AI-powered backend, the platform enables rapid onboarding of products using multimodal models, making scalable inventory management effortless for retail teams.',
      problem:
        'Managing massive e-commerce catalogs is traditionally manual and error-prone. Merchants spend countless hours typing product details, categorizing items, and mapping inventory variants. This friction slows down time-to-market and leads to inconsistent data and operational exhaustion.',
      approach: [
        'Developed a robust Node.js backend with Express and PostgreSQL to handle complex relational product and inventory data.',
        'Integrated multimodal GenAI pipelines, using Vision APIs to automatically tag product images and Audio models for quick voice-based inventory updates.',
        'Built a responsive React/Vite admin dashboard that leverages structured JSON extraction to instantly convert raw inputs into organized catalog entries.',
      ],
      result:
        'The intelligent suite drastically reduces the time required to list new products and manage stock. By automating data entry with generative AI, the platform ensures catalog accuracy and allows operational teams to focus on strategy and sales rather than tedious manual inputs.',
    },
    stack: [
      'Node.js',
      'React',
      'PostgreSQL',
      'Vision API',
      'Audio Transcription',
      'Supabase',
      'Render',
      'Vercel',
      'Cloudinary',
    ],
    previewTone:
      'bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_52%,#38bdf8_100%)]',
  },
  {
    slug: 'portfolio',
    isFeatured: true,
    title: 'GenAI-Powered Portfolio & Agent',
    category: 'Developer Platform',
    role: 'Full Stack + AI System Design',
    year: '2026',
    summary:
      'A self-aware developer showcase featuring a custom-built GenAI agent. It implements a specialized RAG (Retrieval-Augmented Generation) pipeline to answer queries about my technical journey, projects, and expertise in real-time.',
    previewText:
      'Built as an interactive portfolio where content and AI reasoning work together in a single product experience.',
    detailIntro:
      'This project combines a polished portfolio interface with an embedded AI agent that can reason over my profile, projects, and skill history using a focused RAG architecture.',
    challenge:
      'Making portfolio content queryable with reliable context retrieval and grounded responses.',
    outcome:
      'Delivered a live, self-describing portfolio that answers technical questions with high relevance.',
    topInfoCards: [
      { label: 'Role', value: 'Full Stack + AI System Design' },
      {
        label: 'Core Focus',
        value: 'RAG-powered portfolio intelligence and real-time context retrieval',
      },
      {
        label: 'Outcome',
        value: 'Context-aware responses about projects, skills, and engineering journey',
      },
    ],
    stats: [
      { label: 'Use Case', value: 'Interactive developer portfolio assistant' },
      { label: 'Audience', value: 'Recruiters, founders, and engineering teams' },
      { label: 'Primary Goal', value: 'Provide instant, accurate profile intelligence' },
    ],
    caseStudy: {
      overview:
        'The GenAI portfolio was designed to move beyond static storytelling by introducing an intelligent assistant that can answer targeted questions about my work. It pairs curated content with retrieval and response generation to create a practical, interview-ready experience.',
      problem:
        'Traditional portfolio sites are easy to browse but hard to query. Visitors often need deeper, context-specific answers about architecture choices, project tradeoffs, and technology depth that static pages cannot provide efficiently.',
      approach: [
        'Designed a structured portfolio data layer so projects, skills, and milestones could be indexed consistently for retrieval.',
        'Implemented a LangChain-based RAG pipeline with vector search to ground responses in relevant portfolio content.',
        'Integrated OpenAI/Groq model routing with response guardrails to keep answers concise, factual, and context-aware.',
      ],
      result:
        'The final product delivers a premium portfolio experience where visitors can explore visually and also ask direct technical questions, receiving grounded answers in real-time.',
    },
    stack: [
      'Node.js',
      'LangChain',
      'OpenAI/Groq',
      'RAG Architecture',
      'Vector DB',
    ],
    previewTone:
      'bg-[linear-gradient(135deg,#0b1220_0%,#1f2937_50%,#0ea5e9_100%)]',
  },
  {
    slug: 'marketpulse',
    isFeatured: true,
    title: 'Loading Optimisation Software',
    category: 'Logistics Platform',
    role: 'Desktop Application Development',
    year: '2026',
    summary:
      'Loading Optimisation Software is a C++ desktop application that automatically arranges cargo items inside trucks, train bogis, shipping containers, and warehouses using 3D space optimization — eliminating manual planning completely.',
    previewText:
      'Built to optimize loading capacity and reduce resource wastage across logistics operations.',
    detailIntro:
      'Loading Optimisation Software is a C++ desktop application that automatically arranges cargo items inside trucks, train bogis, shipping containers, and warehouses using 3D space optimization — eliminating manual planning completely.',
    challenge:
      'The biggest challenge was translating real-world loading constraints into a desktop interface that remains practical, fast, and clear for operations teams.',
    outcome:
      'The application improves loading capacity planning and supports better resource utilization across logistics workflows.',
    topInfoCards: [
      { label: 'Role', value: 'Desktop Application Development' },
      { label: 'Core Focus', value: '3D load optimization and visualization' },
      {
        label: 'Outcome',
        value:
          'Improved loading capacity planning with faster, data-backed decisions',
      },
    ],
    stats: [
      { label: 'Use Case', value: 'Load optimization' },
      { label: 'Audience', value: 'Logistics teams' },
      { label: 'Primary Goal', value: 'Reduce wastage' },
    ],
    caseStudy: {
      overview:
        'Loading Optimisation Software is a full-featured C++ desktop application built from scratch using the Qt6 framework. The software solves a real-world logistics problem — how to fit multiple different products (boxes, barrels, bags, sacks, pipes) into a container as efficiently as possible. Users can register and log in, add their own products with dimensions and weight, select any container type — truck, train bogi, shipping container, or warehouse — and the system automatically packs everything using a 3D bin-packing algorithm. The result is displayed as a real-time interactive 3D visualization where you can rotate and inspect the packed container. A pie chart shows how much of the container is filled vs empty, and users can export a detailed PDF report with product info or a layer-wise 2D breakdown of the packing layout.',
      problem:
        'In logistics and supply chain operations, workers have to manually figure out how to pack different types of cargo — boxes of different sizes, barrels, sacks, bags, and pipes — inside trucks, train bogis, or warehouses. This process is done by hand, based on experience and guesswork. There is no tool that calculates the best arrangement automatically and shows it visually. The result is wasted container space, incorrect weight distribution, longer planning time, higher fuel costs because more trips are needed, and human errors that can cause damage during transport. This problem gets worse when multiple product types with different shapes and weights need to be packed together in a single container.',
      approach: [
        'The core of this software is the Extreme Point Method — a 3D bin-packing algorithm that I implemented in C++. The idea is simple: we start with one empty slot at position (0, 0, 0) inside the container. When a product is placed at that point, three new candidate positions are generated — one along the X axis (to the right of the placed box), one along the Y axis (on top of it), and one along the Z axis (behind it). The next product tries each of these points one by one. Before placing, the algorithm checks two things — first, whether the product fits within the container boundaries, and second, whether it overlaps with any already placed product. If both checks pass, it gets placed and three more points are added. This continues until all products are placed or no valid position is found.',
        'The result is then rendered using Qt3D as a live 3D wireframe container filled with colored boxes, where each product type has its own unique color assigned by the user. An orbit camera controller lets you rotate and inspect the loaded container from any angle.',
      ],
      result:
        'Webtech Developers Pvt. Ltd., Pune held a coding challenge asking students to build a project in C++. This software was selected as the winner. The company was impressed enough to extend a 4.8 LPA full-time job offer — which I respectfully declined because my MCA exams were ongoing and they required an immediate joiner. On the technical side, the software turns a process that used to take manual planning into an instant automated decision. Cargo managers can load up to 10 different product types at once, see the packing result in real time in 3D, check the fill percentage on a pie chart, and export a printable PDF report — all within a few clicks. The software removes all guesswork from container loading and gives a visual, data-backed loading plan instantly.',
    },
    stack: [
      'C++',
      'Qt 6 Framework',
      'Qt 3D',
      'Qt Charts',
      'Qt Render',
      'JSON Storage',
      'Gmail SMTP (OTP)',
      'Optimization Algorithms',
      'Logistics tech',
    ],
    images: [
      { src: '/Loading images/1.png', caption: 'Login screen mockup' },
      { src: '/Loading images/2.png', caption: 'Registration form mockup' },
      { src: '/Loading images/3.png', caption: 'Qt3D packed container preview' },
      { src: '/Loading images/4.png', caption: 'Profile form mockup' },
      { src: '/Loading images/5.png', caption: 'In-app instruction or help panel' },
      { src: '/Loading images/6.png', caption: 'Order / manifest entry form' },
      { src: '/Loading images/7.png', caption: 'Container selection UI' },
      { src: '/Loading images/8.png', caption: 'Product add dialog mockup' },
      { src: '/Loading images/9.png', caption: 'PDF export preview' },
      { src: '/Loading images/10.png', caption: 'Layer-wise 2D breakdown example' },
      { src: '/Loading images/11.png', caption: 'Color assignment for product types' },
      { src: '/Loading images/12.png', caption: 'Saved sessions list' },
      { src: '/Loading images/13.png', caption: 'Detailed product summary report' },
      { src: '/Loading images/14.png', caption: 'Center of gravity indicator overlay' },
      { src: '/Loading images/15.png', caption: 'Truck / vehicle presets' },
      { src: '/Loading images/16.png', caption: 'Weight distribution warning example' },
      { src: '/Loading images/17.png', caption: 'Zoomed 3D inspection view' },
      { src: '/Loading images/18.png', caption: 'Stacking algorithm visualization' },
      { src: '/Loading images/19.png', caption: 'Fill percentage pie chart' },
      { src: '/Loading images/20.png', caption: 'Product type icons and legend' },
      { src: '/Loading images/21.png', caption: 'Interactive orbit camera controls' },
      { src: '/Loading images/22.png', caption: 'Product quantity input modal' },
      { src: '/Loading images/23.png', caption: 'Exportable summary PDF with icons' },
      { src: '/Loading images/24.png', caption: 'Saved loading plans list' },
      { src: '/Loading images/25.png', caption: 'Batch add products flow' },
      { src: '/Loading images/26.png', caption: 'Validation error states' },
      { src: '/Loading images/27.png', caption: 'Container configuration options' },
      { src: '/Loading images/28.png', caption: '2D layer visualization during export' },
      { src: '/Loading images/29.png', caption: 'Sample printable report page' },
      { src: '/Loading images/30.png', caption: 'Final packed container screenshot' },
    ],
    previewTone:
      'bg-[linear-gradient(135deg,#3f3f46_0%,#7c2d12_48%,#f59e0b_100%)]',
  },
  {
    slug: 'shopease-landing',
    isFeatured: true,
    title: 'ShopEase E-Commerce Landing Page',
    category: 'Web UI / UX',
    role: 'Frontend Developer',
    year: '2026',
    summary:
      'A premium, minimalist e-commerce landing page designed with semantic HTML5 structure, responsive CSS Grid/Flexbox layouts, and optimized SEO metadata.',
    previewText:
      'Focuses on clean structure, modern aesthetics, accessibility, and high performance.',
    detailIntro:
      'ShopEase E-Commerce Landing Page is a premium, minimalist storefront interface built from scratch to showcase modern design standards, optimal SEO indexability, and high-performance frontend engineering.',
    challenge:
      'Creating a pixel-perfect, highly responsive e-commerce layout without relying on external heavy frontend frameworks, ensuring maximum performance.',
    outcome:
      'Delivered a lightweight, semantic page with high lighthouse scores and fluid responsive adaptations.',
    topInfoCards: [
      { label: 'Role', value: 'Frontend Developer' },
      { label: 'Core Focus', value: 'Semantic HTML5 & Responsive Design' },
      { label: 'Outcome', value: 'SEO-ready frontend architecture with 100% responsiveness' },
    ],
    stats: [
      { label: 'Use Case', value: 'Storefront UI showcase' },
      { label: 'Audience', value: 'Developers and designer teams' },
      { label: 'Primary Goal', value: 'Demonstrate semantic coding standards' },
    ],
    caseStudy: {
      overview:
        'ShopEase was built to demonstrate how standard HTML5 semantic elements paired with clean CSS design patterns can create an extremely fast, accessible, and beautiful landing page. By eliminating bulky frameworks, the storefront loads instantly and remains robust across all screen dimensions.',
      problem:
        'Modern landing pages are often bogged down by excessive JavaScript bundles, non-semantic HTML structures (div soup), and lack of accessibility compliance. This results in slow load times, poor search engine indexability, and sub-optimal user experiences on mobile devices.',
      approach: [
        'Structured the storefront layout using descriptive HTML5 tags such as header, nav, main, section, and footer to optimize page accessibility and search engine crawls.',
        'Crafted modular responsive layouts utilizing modern CSS Flexbox and Grid, avoiding large UI frameworks to keep style payloads minimal.',
        'Optimized site assets and deferred scripts to ensure non-blocking renders and maintain high performance scores.',
      ],
      result:
        'The final deployment on Render displays a lightweight, pixel-perfect UI. It serves as a solid foundation for e-commerce sites, achieving high semantic quality, inclusive design via strict alt text bindings, and responsive adaptations.',
    },
    stack: [
      'HTML5',
      'CSS3',
      'Responsive Design',
      'SEO Optimization',
      'Google Fonts',
      'Render',
    ],
    images: [
      { src: '/Shopease Landing images/Screenshot 2026-06-26 204704.png', caption: 'ShopEase E-Commerce Landing Page Hero Section' },
      { src: '/Shopease Landing images/Screenshot 2026-06-26 204712.png', caption: 'Responsive Shop by Category Grid' },
      { src: '/Shopease Landing images/Screenshot 2026-06-26 204728.png', caption: 'Featured Glassmorphism Product Cards' },
      { src: '/Shopease Landing images/Screenshot 2026-06-26 204756.png', caption: 'Mobile Responsive Layout & Newsletter Section' },
    ],
    previewTone:
      'bg-[linear-gradient(135deg,#7c3aed_0%,#c084fc_50%,#e9d5ff_100%)]',
  },
  {
    slug: 'developer-workflow',
    isFeatured: true,
    title: 'Developer Workflow',
    category: 'Web Application',
    role: 'Frontend Developer',
    year: '2026',
    summary:
      'Developer Workflow is a browser-based productivity suite built for developers — helping them track daily tasks, manage learning resources, and visualize productivity trends, all powered by local storage with zero backend.',
    previewText:
      'Sleek client-side dashboard with progress metrics, weekly analytics, and custom light/midnight theming.',
    detailIntro:
      'Developer Workflow is a browser-based productivity suite built for developers — helping them track daily tasks, manage learning resources, and visualize productivity trends, all powered by local storage with zero backend.',
    challenge:
      'Creating a complete persistent workflow suite with data export, base64 file attachment support, and rich analytics graphs entirely on the client-side with zero server infrastructure.',
    outcome:
      'Delivered a lightweight, zero-friction developer companion that loads instantly and keeps user data 100% private.',
    topInfoCards: [
      { label: 'Role', value: 'Frontend Developer' },
      { label: 'Core Focus', value: 'Local-First Architecture & Data Visualization' },
      { label: 'Outcome', value: 'Offline-first dashboard with 0ms server overhead' },
    ],
    stats: [
      { label: 'Use Case', value: 'Personal productivity companion' },
      { label: 'Audience', value: 'Software developers and self-learners' },
      { label: 'Primary Goal', value: 'Track tasks, links, and study streaks locally' },
    ],
    caseStudy: {
      overview:
        'Developer Workflow is a fully client-side web application built from scratch using HTML5, CSS3, and Vanilla JavaScript. It solves a real problem developers face every day — keeping track of what they need to learn, what tasks are pending, and how consistently they are working. Users can add tasks, attach files to them, mark them complete, and see a real-time progress bar. A separate Analytics page powered by Chart.js shows a weekly productivity bar chart, total tasks done, current daily streak, and learning hours — all calculated from local storage data. Users can also save important resource links and quick notes directly on the dashboard. A Profile page lets developers set their name, bio, and social links (GitHub, LinkedIn, Portfolio), and a Settings page allows switching between a Midnight (dark) and Light theme, toggling dashboard widgets, and exporting or resetting all data.',
      problem:
        'Developers often have to manage their daily learning goals, code tasks, reference links, and quick notes across multiple disconnected tools — sticky notes, browser bookmarks, Notion pages, to-do apps. None of these tools are built specifically for a developer\'s workflow. There is no built-in way to attach a file to a task, track a learning streak, or visualize how productive a week has been. The result is missed tasks, lost links, forgotten notes, and zero visibility into progress over time. The problem is especially painful for students and self-learners who need a lightweight, always-available tool that requires no login, no internet dependency, and no complex setup.',
      approach: [
        'Decided on a localStorage-first, zero-backend approach and designed the multi-page structure with shared CSS.',
        'Built task CRUD with file attachment using FileReader API, real-time progress bar, and pending tasks panel.',
        'Implemented streak calculation, weekly bar chart with Chart.js, and date-based history search with filtered results.',
        'Added profile picture upload (base64), social links, bio, theme switching (Midnight/Light), and widget toggle controls.',
        'Built JSON export/import for full data backup, polished responsive CSS with CSS variables for theming, and deployed on Render.',
      ],
      result:
        'Developer Workflow solves a very real personal pain point — having a single, always-available, no-login tool to track daily development tasks and learning consistency. The app removes the need to use heavy tools like Notion or Jira for simple personal task tracking. Because everything is stored in localStorage, the app works offline and loads instantly. The streak tracker and weekly chart make productivity visible in a way that motivates consistent daily work. The file attachment feature means important reference documents stay linked directly to the tasks they belong to, and nothing gets lost. The JSON export ensures data is never locked inside the browser — users can back it up anytime.',
    },
    stack: [
      'HTML5',
      'CSS3',
      'Vanilla JavaScript (ES6+)',
      'Chart.js',
      'FontAwesome',
      'LocalStorage API',
    ],
    images: [
      { src: '/Developer Workflow/Screenshot 2026-06-23 192926.png', caption: 'Developer Workflow Dashboard' },
      { src: '/Developer Workflow/Screenshot 2026-06-23 192936.png', caption: 'Weekly Productivity Analytics' },
      { src: '/Developer Workflow/Screenshot 2026-06-23 192949.png', caption: 'Saved Notes & Resource Links' },
      { src: '/Developer Workflow/Screenshot 2026-06-23 193007.png', caption: 'Profile Settings Customization' },
      { src: '/Developer Workflow/Screenshot 2026-06-23 193019.png', caption: 'Midnight Theme Settings' },
      { src: '/Developer Workflow/Screenshot 2026-06-23 193033.png', caption: 'Backup and JSON Data Export' },
    ],
    previewTone:
      'bg-[linear-gradient(135deg,#090d16_0%,#1e1b4b_50%,#4338ca_100%)]',
  },
  {
    slug: 'careerpilot-ai',
    isFeatured: true,
    title: 'CareerPilot-AI',
    category: 'AI / ML & SaaS Product',
    role: 'Full Stack & AI System Design',
    year: '2026',
    summary:
      'An AI-powered career guidance and job hunting operating system. It features resume parsing, automated cover letter generation, customized skill roadmap creation, and interactive AI interview coaching.',
    previewText:
      'Built as an intelligent career navigator that analyzes professional profiles, maps skill gaps, and prepares candidates for interviews using interactive AI feedback loop systems.',
    detailIntro:
      'CareerPilot-AI is an intelligent career optimization platform designed to streamline job matching, profile tailoring, and interview readiness through generative AI.',
    challenge:
      'Parsing unstructured resumes, mapping career paths dynamically, and providing realistic mock interviews with contextual feedback.',
    outcome:
      'Delivered a cohesive system that saves candidates hours of search/customization time and raises interview performance.',
    topInfoCards: [
      { label: 'Role', value: 'Full Stack & AI System Design' },
      { label: 'Core Focus', value: 'LLM Prompt Routing & Semantic Embeddings' },
      { label: 'Outcome', value: 'Highly personalized career coaching & ATS optimization' },
    ],
    stats: [
      { label: 'Use Case', value: 'Interactive career platform' },
      { label: 'Audience', value: 'Job applicants and developers' },
      { label: 'Primary Goal', value: 'Provide resume tailoring and realistic mock interviews' },
    ],
    caseStudy: {
      overview:
        'CareerPilot-AI was developed to remove the manual friction in the job search process. By using advanced LLM routing and vector embedding alignment, the platform automates resume ATS scoring, cover letter tailoring, and mock interviews, giving candidates an all-in-one preparation suite.',
      problem:
        'Job seekers spend hours custom-tailoring resumes and writing cover letters for every application. Furthermore, practicing for interviews lacks realism, and candidates receive little to no feedback on how well their skills match the job description, resulting in high search friction and poor interview conversion rates.',
      approach: [
        'Built a modular React/Vite admin dashboard backed by a Node.js and Express API server.',
        'Integrated LangChain for multi-model prompt routing, sending specific user tasks (e.g. cover letter drafting vs. mock interview follow-ups) to specialized agents.',
        'Implemented semantic alignment algorithms using OpenAI embeddings to calculate ATS compatibility and highlight keyword gaps.',
      ],
      result:
        'The final deployment creates a unified, local-friendly, and powerful career operating system. It significantly reduces application tailoring time and boosts candidate confidence through interactive mock interview simulators.',
    },
    stack: [
      'React',
      'Node.js',
      'Express',
      'Groq API',
      'LangChain',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    previewTone:
      'bg-[linear-gradient(135deg,#1e1b4b_0%,#312e81_50%,#4f46e5_100%)]',
  },
];

export const projects = projectsData;
