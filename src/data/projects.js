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
