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
    title: "Guru Charan Interiors",
    subtitle: "Interior Design Website",
    desc: "A professional interior design website showcasing modern home decor solutions, room planning services, and client portfolios with an elegant, responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://www.gurucharaninteriors.in/", // ✅ Live site
    image: "/images/projects/gurucharan-interiors.jpg", // ✅ Fixed path
    date: "2024",
    featured: true,
  },
  {
    title: 'AI StudyBuddy',
    subtitle: 'AI-powered study assistant',
    link: 'https://your-aistudybuddy-url.vercel.app', // ⚠️ REPLACE WITH YOUR ACTUAL LIVE URL
    image: '/images/projects/aistudybuddy.jpg',
    date: '',
    desc: 'An AI-powered study assistant designed to support students with learning, AI tutoring, summarization, flashcards, and study activities.',
    tech: ['HTML', 'CSS', 'JavaScript', 'AI'],
    featured: true,
  },
  {
  title: 'Finance School',
  subtitle: 'Financial Education Platform',
  link: 'https://inancechool.vercel.app/', // ✅ Your live URL
  image: '/images/projects/financeschool.jpg', // ️ Make sure to add screenshot!
  date: '',
  desc: 'An educational platform designed to teach financial literacy and money management concepts through interactive content.',
  tech: ['HTML', 'CSS', 'JavaScript'], // Adjust if you used React/Next.js/etc.
  featured: true,
},
  {
  title: 'Weather Application',
  subtitle: 'Weather information web application',
  link: 'https://new-ei6q.vercel.app', // ✅ Only ONE link line
  image: '/images/projects/weatherapp.jpg',
  date: '',
  desc: 'A weather application that provides current weather conditions and forecast information through a clean and user-friendly interface.',
  tech: ['HTML', 'CSS', 'JavaScript', 'API'],
  featured: true,
},
  {
    title: 'FitZone',
    subtitle: 'Modern gym website',
    link: 'https://your-fitzone-url.vercel.app', // ⚠️ REPLACE WITH YOUR ACTUAL LIVE URL
    image: '/images/projects/fitzone.jpg',
    date: '',
    desc: 'A modern gym website designed with a clear layout, strong calls to action, and a user-friendly experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    featured: true,
  },
];

export default data;