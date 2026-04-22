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
    slug: 'marketpulse',
    isFeatured: true,
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
  {
    slug: 'campus-connect',
    title: 'Campus Connect Portal',
    category: 'EdTech Platform',
    role: 'Full Stack Product Development',
    year: '2026',
    summary:
      'A unified student portal that streamlines attendance, notices, and assignment tracking in one dashboard.',
    previewText:
      'Built to centralize day-to-day campus workflows in a single, easy-to-scan interface.',
    detailIntro:
      'Campus Connect Portal centralizes student operations so faculty and learners can manage attendance, communication, and assessments in one place.',
    challenge:
      'Fragmented campus tools and manual tracking slowed communication and reduced visibility.',
    outcome:
      'Created a single source of truth for campus operations with faster coordination.',
    topInfoCards: [
      { label: 'Role', value: 'Full Stack Product Development' },
      {
        label: 'Core Focus',
        value: 'Unified student operations and faculty communication workflows',
      },
      {
        label: 'Outcome',
        value: 'Centralized academic operations with improved day-to-day visibility',
      },
    ],
    stats: [
      { label: 'Use Case', value: 'Campus operations management' },
      { label: 'Audience', value: 'Students and faculty teams' },
      { label: 'Primary Goal', value: 'Replace disconnected tools with one portal' },
    ],
    caseStudy: {
      overview:
        'Campus Connect Portal was designed to bring scattered academic workflows into one coherent platform. It combines student tracking, internal notices, and submission visibility to reduce context switching for both students and staff.',
      problem:
        'Most campus teams were juggling separate tools for attendance, notices, and assignment coordination. This caused inconsistent records, delayed updates, and avoidable friction during routine academic operations.',
      approach: [
        'Designed a clean React interface that surfaces attendance, notices, and assignment timelines with predictable navigation.',
        'Implemented a Node.js API layer for structured records, role-based access, and reliable synchronization across modules.',
        'Integrated PostgreSQL models to keep enrollment, classroom updates, and assignment states queryable and consistent.',
      ],
      result:
        'The portal improved operational clarity and reduced manual follow-ups by giving students and faculty one shared workspace for daily academic activities.',
    },
    stack: ['React', 'Node.js', 'PostgreSQL'],
    previewTone:
      'bg-[linear-gradient(135deg,#0b132b_0%,#1d4ed8_52%,#22d3ee_100%)]',
  },
  {
    slug: 'insight-board',
    title: 'InsightBoard Analytics',
    category: 'Analytics Dashboard',
    role: 'Frontend + Data Integration',
    year: '2026',
    summary:
      'A lightweight KPI dashboard that turns daily operations data into clear, real-time team insights.',
    previewText:
      'Created for fast decision-making with clean metric grouping and sharp reporting views.',
    detailIntro:
      'InsightBoard Analytics helps teams monitor live performance indicators through a focused dashboard built for quick scanning and action.',
    challenge:
      'Operational data existed across multiple sources with no single performance view.',
    outcome:
      'Enabled teams to monitor KPIs in one dashboard and react faster to trend changes.',
    topInfoCards: [
      { label: 'Role', value: 'Frontend + Data Integration' },
      {
        label: 'Core Focus',
        value: 'Real-time KPI visualization with clean dashboard ergonomics',
      },
      {
        label: 'Outcome',
        value: 'Faster insights and clearer metric ownership across teams',
      },
    ],
    stats: [
      { label: 'Use Case', value: 'Operational analytics tracking' },
      { label: 'Audience', value: 'Product and operations teams' },
      { label: 'Primary Goal', value: 'Unify KPIs into a single live dashboard' },
    ],
    caseStudy: {
      overview:
        'InsightBoard Analytics consolidates fragmented operational metrics into one responsive workspace. It prioritizes readability, trend visibility, and actionability for teams that review performance daily.',
      problem:
        'When data lives in separate spreadsheets and internal tools, teams struggle to detect trends quickly. Lack of shared visibility also makes ownership and follow-through harder.',
      approach: [
        'Built interactive dashboard views in React with modular widgets designed for quick metric scanning.',
        'Connected structured data pipelines with Supabase-backed queries for near real-time updates.',
        'Deployed a fast preview-to-production workflow through Vercel for consistent release velocity.',
      ],
      result:
        'Teams gained a consistent source of truth for key metrics, improving response time and reducing reporting overhead in recurring reviews.',
    },
    stack: ['React', 'Supabase', 'Vercel'],
    previewTone:
      'bg-[linear-gradient(135deg,#111827_0%,#0f766e_52%,#22c55e_100%)]',
  },
  {
    slug: 'support-flow',
    title: 'SupportFlow Assistant',
    category: 'AI Support Operations',
    role: 'Backend & AI Workflow Design',
    year: '2026',
    summary:
      'An AI-first helpdesk companion that auto-classifies tickets and drafts context-aware response suggestions.',
    previewText:
      'Designed to reduce first-response latency while preserving team tone and context.',
    detailIntro:
      'SupportFlow Assistant streamlines support queues by categorizing incoming issues and preparing context-aware drafts for agents.',
    challenge:
      'High ticket volume and manual triage created slow first responses and inconsistent routing.',
    outcome:
      'Accelerated support triage with AI-assisted classification and draft generation.',
    topInfoCards: [
      { label: 'Role', value: 'Backend & AI Workflow Design' },
      {
        label: 'Core Focus',
        value: 'Automated issue triage and response drafting for support teams',
      },
      {
        label: 'Outcome',
        value: 'Faster queue handling with better prioritization accuracy',
      },
    ],
    stats: [
      { label: 'Use Case', value: 'Customer support automation' },
      { label: 'Audience', value: 'Support and success teams' },
      { label: 'Primary Goal', value: 'Reduce first-response delay and triage load' },
    ],
    caseStudy: {
      overview:
        'SupportFlow Assistant applies AI workflow automation to high-volume helpdesks. The system structures incoming context, routes issues by intent, and prepares draft replies aligned with team playbooks.',
      problem:
        'Manual ticket sorting is repetitive and error-prone at scale. Teams lose time categorizing requests before they can provide meaningful customer responses.',
      approach: [
        'Implemented Node.js services to normalize ticket payloads and orchestrate classification pipelines.',
        'Used Render deployment workflows to run queue workers and API endpoints reliably under burst traffic.',
        'Integrated Cloudinary asset handling so attachments and media references remain structured inside ticket context.',
      ],
      result:
        'Support teams handled queues with better speed and consistency, allowing agents to focus on high-value customer conversations.',
    },
    stack: ['Node.js', 'Render', 'Cloudinary'],
    previewTone:
      'bg-[linear-gradient(135deg,#111827_0%,#1f2937_45%,#0284c7_100%)]',
  },
  {
    slug: 'media-ops',
    title: 'MediaOps Studio',
    category: 'Media Workflow Platform',
    role: 'Full Stack Workflow Engineering',
    year: '2026',
    summary:
      'A media management workspace that automates file ingestion, tagging, and optimized cloud delivery.',
    previewText:
      'Built to keep media operations organized, searchable, and delivery-ready.',
    detailIntro:
      'MediaOps Studio manages high-volume media pipelines with automated ingestion, tagging, and optimized delivery orchestration.',
    challenge:
      'Growing media libraries were difficult to organize, retrieve, and serve efficiently.',
    outcome:
      'Simplified media operations with automation-first ingestion and cloud delivery controls.',
    topInfoCards: [
      { label: 'Role', value: 'Full Stack Workflow Engineering' },
      {
        label: 'Core Focus',
        value: 'Automated media ingestion, metadata tagging, and delivery optimization',
      },
      {
        label: 'Outcome',
        value: 'Faster retrieval and consistent delivery quality across channels',
      },
    ],
    stats: [
      { label: 'Use Case', value: 'Media pipeline automation' },
      { label: 'Audience', value: 'Content and operations teams' },
      { label: 'Primary Goal', value: 'Reduce manual media handling overhead' },
    ],
    caseStudy: {
      overview:
        'MediaOps Studio was designed as an operations layer for content-heavy teams. It coordinates ingestion, metadata handling, and delivery transformations so assets remain searchable and publication-ready.',
      problem:
        'Without structured media workflows, teams spend excessive time on manual sorting, duplicate uploads, and inconsistent export quality across channels.',
      approach: [
        'Built a React management console for upload flows, metadata edits, and media status visibility.',
        'Integrated Cloudinary pipelines for transformation presets, optimized delivery, and asset lifecycle handling.',
        'Used Supabase-backed metadata storage to keep tags, ownership, and publish states queryable in real time.',
      ],
      result:
        'The platform reduced operational drag across content workflows and improved consistency from upload to final media delivery.',
    },
    stack: ['Cloudinary', 'React', 'Supabase'],
    previewTone:
      'bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_48%,#0ea5e9_100%)]',
  },
]

export const projects = projectsData
