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
            caption: 'AI driven advanced analytics platform',
          },
          {
            image: 'healthcare redesign',
            caption: 'Healthcare website redesign',
          },
        ],
      },
      {
        type: 'text',
        paragraphs: [
          'Competently implement multidisciplinary channels without dynamic architectures. Credibly engage plug & play leadership of principle centered methods of empowerment. Holisticly productivate premier processes rather than standardized growth strategies.',
          'Synergistically conceptualize optimal channels whereas scalable partnerships. Credibly provide.',
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
        image: 'finance redesign',
        caption: 'Finance platform redesign',
      },
      {
        type: 'image',
        image: 'kotha app',
        caption: 'Kotha - First Bangladeshi social app',
      },
    ],
  },
  {
    layout: 'row',
    justify: 'space-between',
    cells: [
      {
        type: 'image',
        image: 'blue mandarin cover',
        caption: 'Blue Mandarin style guidelines',
      },
      {
        type: 'cta',
        paragraph:
          'Competently implement multidisciplinary channels without dynamic architectures. Credibly engage plug & play leadership of principle centered methods of empowerment. Holisticly productivate premier processes rather than standardized growth strategies.',
        button: 'Set a 15 Min Meeting',
      },
      {
        type: 'image',
        image: 'announsr identity',
        caption: 'AnnounSr Brand identity',
      },
    ],
  },
]
