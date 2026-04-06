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
    title: 'MarketPulse Analytics',
    category: 'Data Platform',
    role: 'Full-Stack Development',
    year: '2026',
    summary:
      'An analytics experience for campaign reporting that turns raw ad performance into executive-friendly insights, benchmarks, and recommendations.',
    previewText:
      'Built to translate dense marketing data into a cleaner story for teams and stakeholders.',
    detailIntro:
      'MarketPulse reframes campaign data into a reporting experience that supports decision-making instead of overwhelming users with tables.',
    challenge:
      'The biggest constraint was presenting multiple metrics and time comparisons without making the interface feel noisy or overbuilt.',
    outcome:
      'The project direction focuses on storytelling with data, helping teams move from raw numbers to action more quickly.',
    stats: [
      { label: 'Use Case', value: 'Campaign reporting' },
      { label: 'Audience', value: 'Marketing teams' },
      { label: 'Primary Goal', value: 'Clearer decision-making' },
    ],
    caseStudy: {
      overview:
        'MarketPulse was shaped as a reporting and analytics product for teams that need quick performance insight without spending half their time cleaning spreadsheets or screenshots for presentations.',
      problem:
        'Campaign data is often available, but not presented in a way that makes trends obvious. Users needed context, benchmarks, and structure, not just a larger pile of numbers.',
      approach: [
        'Prioritized narrative reporting over raw metric density so the interface guides users toward what changed and why it matters.',
        'Balanced summary views with drill-down points to keep both managers and hands-on marketers supported.',
        'Kept the visual system restrained so the data, not decoration, carries the strongest signal.',
      ],
      result:
        'The case study direction turns analytics into a more readable product experience. Instead of forcing interpretation, it frames the most important signals and makes next steps easier to discuss.',
    },
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    previewTone:
      'bg-[linear-gradient(135deg,#3f3f46_0%,#7c2d12_48%,#f59e0b_100%)]',
  },
]
