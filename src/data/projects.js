export const projects = [
  {
    slug: 'studioflow',
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
      { label: 'Primary Goal', value: 'Scale merchandising & eliminate manual data entry' },
    ],
    stats: [
      { label: 'Use Case', value: 'Enterprise commerce operations' },
      { label: 'Audience', value: 'Retail and merchandising teams' },
      { label: 'Outcome', value: 'Automate catalog onboarding' },
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
    slug: 'marketpulse',
    title: 'Loading Optimisation Software',
    category: 'Logistics Platform',
    role: 'Desktop Application Development',
    year: '2026',
    summary:
      'A professional Qt-based desktop application designed for logistics and supply chain efficiency. It implements 3D space-optimization algorithms to maximize product loading capacity in trucks, trains, and warehouses, significantly reducing resource wastage.',
    previewText:
      'Built to optimize loading capacity and reduce resource wastage across logistics operations.',
    detailIntro:
      'Loading Optimisation Software helps logistics teams calculate efficient product arrangements for trucks, trains, and warehouses using 3D space-optimization logic.',
    challenge:
      'The biggest challenge was translating real-world loading constraints into a desktop interface that remains practical, fast, and clear for operations teams.',
    outcome:
      'The application improves loading capacity planning and supports better resource utilization across logistics workflows.',
    stats: [
      { label: 'Use Case', value: 'Load optimization' },
      { label: 'Audience', value: 'Logistics teams' },
      { label: 'Primary Goal', value: 'Reduce wastage' },
    ],
    caseStudy: {
      overview:
        'Loading Optimisation Software is a high-performance C++ desktop application engineered to streamline supply chain logistics. By utilizing advanced spatial algorithms and the Qt Framework, it transforms manual, error-prone loading processes into a precise, automated science, maximizing capacity across trucks, trains, and warehouses.',
      problem:
        'Logistics operations frequently suffer from sub-optimal space utilization. Load planners must manually calculate complex 3D stacking arrangements under strict time constraints, accounting for weight limits, fragility, and container dimensions. This reliance on manual estimation leads to wasted cargo space, increased transportation costs, and delayed shipping schedules.',
      approach: [
        'I architected a robust desktop solution using C++ for high-speed algorithmic processing and Qt for a responsive UI. The core engine implements a custom 3D bin-packing algorithm that instantly calculates the most efficient cargo arrangement. To make the data actionable, I integrated Qt 3D and Qt Render to generate interactive, real-time 3D visualizations, allowing teams to verify loading plans before physical execution.',
      ],
      result:
        'The software drastically reduces planning time from hours to seconds while significantly increasing average container fill rates. By maximizing spatial efficiency, the tool helps logistics companies reduce the number of required trips, directly cutting down operational costs and their carbon footprint through an intuitive desktop interface.',
    },
    stack: [
      'C++',
      'Qt Framework',
      'Qt 3D',
      'Qt Render',
      'Logistics Tech',
      'Optimization Algos',
    ],
    previewTone:
      'bg-[linear-gradient(135deg,#3f3f46_0%,#7c2d12_48%,#f59e0b_100%)]',
  },
]
