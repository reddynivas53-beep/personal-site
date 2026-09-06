export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'AI StudyBuddy',
    subtitle: 'AI-powered study assistant',
    link: 'https://github.com/reddynivas53-beep/aistudybuddy',
    image: '/images/projects/aistudybuddy.jpg',
    date: '',
    desc: 'An AI-powered study assistant designed to support students with learning, AI tutoring, summarization, flashcards, and study activities.',
    tech: ['HTML', 'CSS', 'JavaScript', 'AI'],
    featured: true,
  },

  {
    title: 'Weather Application',
    subtitle: 'Weather information web application',
    link: 'https://github.com/reddynivas53-beep/weather-app',
    image: '/images/projects/weatherapp.jpg',
    date: '',
    desc: 'A weather application that provides current weather conditions and forecast information through a clean and user-friendly interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    featured: true,
  },

  {
    title: 'FitZone',
    subtitle: 'Modern gym website',
    image: '/images/projects/fitzone.jpg',
    date: '',
    desc: 'A modern gym website designed with a clear layout, strong calls to action, and a user-friendly experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    featured: true,
  },
];

export default data;