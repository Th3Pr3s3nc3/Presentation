export interface Slide {
  id: number;
  type: 'title' | 'content' | 'stats' | 'quote' | 'list' | 'timeline' | 'closing';
  title?: string;
  subtitle?: string;
  content?: string;
  items?: (string | { icon: string; title: string; description: string })[];
  stats?: { label: string; value: string; icon: string }[];
  quote?: string;
  author?: string;
  timeline?: { year: string; title: string; description: string }[];
  gradient: string;
  textColor?: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    type: 'title',
    title: 'Building Modern Web Applications',
    subtitle: 'A Comprehensive Guide to Today\'s Best Practices',
    gradient: 'from-indigo-900 via-purple-900 to-pink-800',
    textColor: 'text-white',
  },
  {
    id: 2,
    type: 'content',
    title: 'Why Modern Web Development?',
    content: 'The web has evolved from simple static pages to complex, interactive applications that rival desktop software in functionality and user experience.',
    items: [
      'Users expect fast, responsive experiences',
      'Mobile-first design is now the standard',
      'Progressive Web Apps bridge the native gap',
      'Component-based architecture improves maintainability',
    ],
    gradient: 'from-blue-900 via-blue-800 to-cyan-700',
    textColor: 'text-white',
  },
  {
    id: 3,
    type: 'stats',
    title: 'The State of Web Development',
    stats: [
      { label: 'Websites Online', value: '1.98B+', icon: '🌐' },
      { label: 'JavaScript Developers', value: '17.4M', icon: '⚡' },
      { label: 'Mobile Traffic', value: '59.4%', icon: '📱' },
      { label: 'Avg. Load Time Goal', value: '<2.5s', icon: '🚀' },
    ],
    gradient: 'from-emerald-900 via-teal-800 to-green-700',
    textColor: 'text-white',
  },
  {
    id: 4,
    type: 'timeline',
    title: 'Evolution of Web Technologies',
    timeline: [
      { year: '2010', title: 'HTML5 & CSS3', description: 'Semantic markup and modern styling' },
      { year: '2013', title: 'React Released', description: 'Component-based UI paradigm' },
      { year: '2015', title: 'ES6 JavaScript', description: 'Modern language features' },
      { year: '2020', title: 'Jamstack & Edge', description: 'Distributed computing at scale' },
      { year: '2024', title: 'AI Integration', description: 'Intelligent, adaptive interfaces' },
    ],
    gradient: 'from-violet-900 via-purple-800 to-fuchsia-700',
    textColor: 'text-white',
  },
  {
    id: 5,
    type: 'list',
    title: 'Key Technologies in 2024',
    items: [
      { icon: '⚛️', title: 'React / Next.js', description: 'Server components & streaming SSR' },
      { icon: '🎨', title: 'Tailwind CSS', description: 'Utility-first styling framework' },
      { icon: '📦', title: 'Vite', description: 'Lightning-fast build tooling' },
      { icon: '🔷', title: 'TypeScript', description: 'Type-safe JavaScript development' },
      { icon: '🗄️', title: 'Edge Databases', description: 'Globally distributed data stores' },
    ],
    gradient: 'from-orange-900 via-red-800 to-rose-700',
    textColor: 'text-white',
  },
  {
    id: 6,
    type: 'quote',
    quote: 'The best way to predict the future is to implement it.',
    author: 'David Heinemeier Hansson',
    gradient: 'from-slate-900 via-gray-800 to-zinc-700',
    textColor: 'text-white',
  },
  {
    id: 7,
    type: 'content',
    title: 'Best Practices',
    content: 'Following established patterns and practices ensures your applications are maintainable, scalable, and performant.',
    items: [
      'Start with user experience, not technology',
      'Implement progressive enhancement',
      'Optimize for Core Web Vitals',
      'Use TypeScript for large-scale projects',
      'Automate testing and deployment',
      'Monitor performance continuously',
    ],
    gradient: 'from-sky-900 via-blue-800 to-indigo-700',
    textColor: 'text-white',
  },
  {
    id: 8,
    type: 'closing',
    title: 'Thank You!',
    subtitle: 'Questions & Discussion',
    content: 'Let\'s build something amazing together.',
    gradient: 'from-indigo-900 via-purple-900 to-pink-800',
    textColor: 'text-white',
  },
];
