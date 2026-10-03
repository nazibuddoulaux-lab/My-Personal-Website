// Row layout mirrors the Figma structure exactly:
// - row 1 is a fixed-width image pair + a flexible text column (not 3 equal cells)
// - rows 2 and 3 are three fixed-width cells laid out with the row's own gap/justify rule
export const projectRows = [
  {
    layout: 'split',
    gap: 60,
    cells: [
      {
        type: 'image-pair',
        gap: 24,
        items: [
          {
            image: 'ai analytics platform',
            src: '/images/UBIX.jpg',
            caption: 'AI driven advanced analytics platform',
            href: '/case-study/ai-analytics-platform',
          },
          {
            image: 'pharmaceutical website redesign',
            src: '/images/PH.jpg',
            caption: 'Pharmaceutical website redesign',
          },
        ],
      },
      {
        type: 'text',
        paragraphs: [
          "This is a collection of work I'm proud of spanning product design, design systems, brand identity, illustration, and visual design.",
          "What ties it together is a belief that good strategy and good craft aren't separate disciplines; the best products happen when they inform each other. Below, you'll find a few examples of how that's played out across different problems, teams, and constraints.",
        ],
      },
    ],
  },
  {
    layout: 'row',
    gap: 24,
    cells: [
      {
        type: 'illustration',
        label: 'Illustration',
        paragraph:
          'Competently implement multidisciplinary channels without dynamic architectures. Credibly engage plug & play leadership of principle centered methods of empowerment. Holisticly productivate premier.',
      },
      {
        type: 'image',
        image: 'kotha app',
        src: '/images/KO.jpg',
        caption: 'Kotha - First Bangladeshi social app',
      },
      {
        type: 'image',
        image: 'finance redesign',
        src: '/images/FN.jpg',
        caption: 'Finance platform redesign',
      },
    ],
  },
  {
    layout: 'row',
    justify: 'space-between',
    cells: [
      {
        type: 'image',
        image: 'storiq design system',
        src: '/images/ST.jpg',
        caption: 'STORIQ - Design System',
      },
      {
        type: 'cta',
        paragraph:
          "Have a project in mind or just want to talk shop? I'm always happy to chat about design, strategy, or how we might work together.",
        button: 'Set a 15 Min Meeting',
      },
      {
        type: 'image',
        image: 'announsr identity',
        src: '/images/SR.jpg',
        caption: 'AnnounSr Brand Identity',
      },
    ],
  },
]
