export interface Slide {
  id: number;
  type: 'title' | 'content' | 'stats' | 'quote' | 'list' | 'timeline' | 'closing' | 'split' | 'grid' | 'map';
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
  badge?: string;
  splitContent?: { left: string; right: string[] };
  gridItems?: { icon: string; label: string }[];
  countries?: { name: string; flag: string; status: string }[];
}

export const slides: Slide[] = [
  {
    id: 1,
    type: 'title',
    title: 'Kibuga Online Shop',
    subtitle: 'Uganda\'s Multi-Vendor E-Commerce Marketplace',
    gradient: 'from-orange-900 via-amber-800 to-yellow-700',
    textColor: 'text-white',
  },
  {
    id: 2,
    type: 'content',
    badge: 'Company Overview',
    title: 'Who We Are',
    content: 'Kibuga Online Shop is a Ugandan multi-vendor e-commerce marketplace operated by Kibuga Investments Limited, connecting consumers with a wide range of products from local and international vendors through a single digital shopping platform.',
    items: [
      'Making online shopping accessible, convenient and affordable in Uganda',
      'Creating a digital marketplace for businesses to reach broader customers',
      'Operating through Kibuga.com and mobile applications',
      'Providing technology, infrastructure, customer acquisition & order management',
    ],
    gradient: 'from-orange-900 via-red-800 to-rose-700',
    textColor: 'text-white',
  },
  {
    id: 3,
    type: 'split',
    badge: 'Purpose',
    title: 'Mission & Vision',
    gradient: 'from-amber-900 via-orange-800 to-red-700',
    textColor: 'text-white',
    splitContent: {
      left: 'To make shopping simple, accessible and affordable by connecting consumers with a wide range of quality products and trusted sellers through a convenient digital marketplace.',
      right: [
        'Become one of Africa\'s most trusted digital marketplaces',
        'Connect businesses and consumers across borders',
        'Drive growth through technology and innovation',
        'Expand accessibility across the African continent',
      ],
    },
  },
  {
    id: 4,
    type: 'grid',
    badge: 'Marketplace Focus',
    title: 'Product Categories',
    subtitle: 'Multi-category marketplace serving everyday consumer products and higher-value durable goods',
    gradient: 'from-emerald-900 via-teal-800 to-green-700',
    textColor: 'text-white',
    gridItems: [
      { icon: '📱', label: 'Phones & Tablets' },
      { icon: '⚡', label: 'Electronics' },
      { icon: '🏠', label: 'Home & Office' },
      { icon: '🔌', label: 'Appliances' },
      { icon: '💻', label: 'Computing' },
      { icon: '💄', label: 'Health & Beauty' },
      { icon: '👗', label: 'Fashion' },
      { icon: '👶', label: 'Baby Products' },
      { icon: '🎮', label: 'Gaming' },
      { icon: '📺', label: 'TV, Video & Audio' },
      { icon: '🌾', label: 'Agriculture' },
      { icon: '⚽', label: 'Sports & Lifestyle' },
    ],
  },
  {
    id: 5,
    type: 'stats',
    badge: 'Platform Statistics',
    title: 'Kibuga by the Numbers',
    stats: [
      { label: 'Products Listed', value: '28,000+', icon: '📦' },
      { label: 'Product Categories', value: '10+', icon: '🏷️' },
      { label: 'Sales Channels', value: 'Web + Mobile', icon: '📲' },
      { label: 'Currency', value: 'UGX', icon: '💰' },
      { label: 'Marketplace Model', value: 'Multi-Vendor', icon: '🏪' },
      { label: 'Customer Model', value: 'B2C', icon: '🛒' },
      { label: 'Primary Market', value: 'Uganda', icon: '🇺🇬' },
      { label: 'Vendor Types', value: 'Local & Intl.', icon: '🌍' },
    ],
    gradient: 'from-violet-900 via-purple-800 to-fuchsia-700',
    textColor: 'text-white',
  },
  {
    id: 6,
    type: 'content',
    badge: 'International Opportunity',
    title: 'Global Marketplace Access',
    content: 'A key area of Kibuga\'s growth strategy is expanding access to international products and suppliers, providing international vendors an opportunity to enter the Ugandan market without establishing a complete local e-commerce operation from scratch.',
    items: [
      'Local customer access & digital marketplace infrastructure',
      'Local market knowledge & vendor management systems',
      'Customer acquisition channels & order management',
      'Local delivery & fulfilment ecosystem',
      'Local currency pricing & customer support',
    ],
    gradient: 'from-blue-900 via-indigo-800 to-violet-700',
    textColor: 'text-white',
  },
  {
    id: 7,
    type: 'map',
    badge: 'Geographical Reach',
    title: 'Expansion Strategy',
    subtitle: 'Starting from Uganda, expanding across East Africa',
    gradient: 'from-cyan-900 via-blue-800 to-indigo-700',
    textColor: 'text-white',
    countries: [
      { name: 'Uganda', flag: '🇺🇬', status: 'Active' },
      { name: 'Kenya', flag: '🇰🇪', status: 'Planned' },
      { name: 'Tanzania', flag: '🇹🇿', status: 'Planned' },
      { name: 'Rwanda', flag: '🇷🇼', status: 'Planned' },
      { name: 'Burundi', flag: '🇧🇮', status: 'Planned' },
      { name: 'South Sudan', flag: '🇸🇸', status: 'Planned' },
    ],
  },
  {
    id: 8,
    type: 'content',
    badge: 'How It Works',
    title: 'International Supplier Access',
    content: 'Kibuga\'s international marketplace strategy makes it easier for suppliers outside Uganda to access the Ugandan market — without requiring a physical retail presence locally.',
    items: [
      'Digital marketplace infrastructure for product presentation',
      'Products showcased directly to Ugandan consumers',
      'No need for international vendors to establish local operations',
      'Seamless integration with local delivery & fulfilment',
      'Full customer support in local currency',
    ],
    gradient: 'from-rose-900 via-pink-800 to-fuchsia-700',
    textColor: 'text-white',
  },
  {
    id: 9,
    type: 'closing',
    title: 'Kibuga Online Shop',
    subtitle: 'Connecting Uganda to the World',
    content: 'Making shopping simple, accessible and affordable for everyone.',
    gradient: 'from-orange-900 via-amber-800 to-yellow-700',
    textColor: 'text-white',
  },
];
