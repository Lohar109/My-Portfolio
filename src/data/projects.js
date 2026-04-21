export const projects = [
  {
    slug: 'studioflow',
    title: 'StudioFlow Dashboard',
    category: 'SaaS Product',
    role: 'Frontend + Product Design',
    year: '2026',
    summary:
      'A project operations dashboard for creative teams with timeline tracking, approvals, and progress visibility across multiple client accounts.',
    previewText:
      'Designed to feel calm, data-rich, and client-ready with strong hierarchy and fast scanning.',
    detailIntro:
      'StudioFlow brings project planning, reviews, and stakeholder communication into one focused workspace for creative operations teams.',
    challenge:
      'The main challenge was turning a dense internal workflow into an interface that still felt light, readable, and client-friendly.',
    outcome:
      'The final concept emphasizes clarity, visual rhythm, and faster team alignment through stronger information hierarchy.',
    stats: [
      { label: 'Team Context', value: '8 designers + PMs' },
      { label: 'Core Focus', value: 'Planning and approvals' },
      { label: 'Primary Goal', value: 'Reduce workflow friction' },
    ],
    caseStudy: {
      overview:
        'StudioFlow was imagined as an internal platform for creative teams managing multiple client projects at once. The product needed to support fast daily coordination while still feeling polished enough for stakeholder reviews.',
      problem:
        'Most operations dashboards become cluttered as soon as timelines, feedback, ownership, and status all compete for attention. The interface risked becoming technically complete but mentally exhausting.',
      approach: [
        'Organized the layout around the most time-sensitive actions first, so the page feels useful at a glance.',
        'Used card grouping and spacing to separate planning, review, and delivery states without overloading the screen.',
        'Designed the visual language to feel premium and calm, helping the product support client-facing moments too.',
      ],
      result:
        'The final direction presents project complexity in a way that still feels composed. It gives teams a central place to review progress, unblock work, and communicate status with less friction.',
    },
    stack: ['React', 'Tailwind CSS', 'Charts', 'API Integration'],
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
        'Loading Optimisation Software was designed as a professional desktop tool for logistics and supply chain planning. It focuses on turning available loading space into more efficient, measurable capacity.',
      problem:
        'Loading decisions often waste valuable space because teams need to account for dimensions, stacking limits, and available volume under time pressure.',
      approach: [
        'Built the application around a Qt desktop interface so operational users can work in a focused, reliable environment.',
        'Modeled product dimensions and available container space with optimization logic to improve loading recommendations.',
        'Kept the interface practical and direct so teams can understand outcomes without unnecessary visual complexity.',
      ],
      result:
        'The result is a focused logistics tool that supports better capacity planning, reduces wasted space, and improves resource efficiency.',
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
