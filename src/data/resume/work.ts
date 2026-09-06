/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Freelance',
    position: 'Web Developer',
    url: '',
    startDate: '2023-01-01',
    summary: `Web developer with 3 years of experience building responsive and user-friendly websites using HTML, CSS, and JavaScript.`,
    highlights: [
      'Develop responsive websites with clean and user-friendly interfaces.',
      'Build website layouts using HTML and CSS.',
      'Add interactive functionality using JavaScript.',
      'Focus on responsive design and cross-device compatibility.',
      'Customize and improve website designs based on project requirements.',
    ],
  },
];

export default work;