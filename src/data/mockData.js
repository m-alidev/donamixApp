import images from '../constants/images';

export const introSlides = [
  {
    id: 'slide-1',
    title: 'Welcome to Donamix!\nConnect. Share.\nDiscover',
    subtitle: 'Join a community where your voice matters. Build meaningful connections and discover exciting content tailored just for you.',
    art: 'welcome',
  },
  {
    id: 'slide-2',
    title: 'Build Your Profile',
    subtitle: 'Your identity, your way.\nSet up your profile to reflect your unique style.\nUpload a photo, share your interests, and let the world see who you really are!',
    art: 'profile',
  },
  {
    id: 'slide-3',
    title: 'Find Your Community',
    subtitle: 'Explore chat hubs, send gifts, stream live, tune into radio, play games, plan a trip, and more.\nYour journey, your way!',
    art: 'community',
  },
  {
    id: 'slide-4',
    title: 'Ready to Start?',
    subtitle: 'Let’s make your experience unforgettable.\nStart connecting now. Your journey begins here, where every moment counts.',
    art: 'ready',
  },
];

export const user = {
  id: 'u-1',
  name: 'Aisha Carter',
  username: '@aisha',
  role: 'VIP',
  profileImage: images.avatar,
  bio: 'Traveler | Community host | Music lover',
  stats: { followers: 12800, following: 912, posts: 44 },
};

export const quickActions = [
  { id: 'qa-1', label: 'Wallet', icon: 'wallet-outline', screen: 'Wallet' },
  { id: 'qa-2', label: 'Trips', icon: 'airplane-outline', screen: 'Trips' },
  { id: 'qa-3', label: 'Premium', icon: 'crown-outline', screen: 'PremiumPlans' },
  { id: 'qa-4', label: 'Gifts', icon: 'gift-outline', screen: 'Gifts' },
  { id: 'qa-5', label: 'Settings', icon: 'settings-outline', screen: 'Settings' },
];

export const chatHubs = [
  { id: 'h-1', title: 'Global Lounge', members: 12400, tag: 'Trending' },
  { id: 'h-2', title: 'Travel Addicts', members: 9600, tag: 'Adventure' },
  { id: 'h-3', title: 'Music Radar', members: 8100, tag: 'Live' },
];

export const suggestedMembers = [
  { id: 'm-1', name: 'Noah Bright', image: images.avatar, badge: 'ADMIN' },
  { id: 'm-2', name: 'Mina Hale', image: images.avatar, badge: 'VIP' },
  { id: 'm-3', name: 'Leo Vance', image: images.avatar, badge: 'GUARDIAN' },
];

export const games = [
  { id: 'g-1', name: 'Spin Battle', players: '2.3k playing' },
  { id: 'g-2', name: 'Quiz Arena', players: '1.4k playing' },
];

export const spotlight = [
  { id: 's-1', title: 'DJ Nova Live Set', subtitle: 'Tonight 9:00 PM' },
  { id: 's-2', title: 'Travel AMA: Bali', subtitle: 'Tomorrow 7:30 PM' },
];

export const trips = [
  { id: 't-1', place: 'Santorini Escape', date: 'Mar 12, 2026', status: 'Upcoming' },
  { id: 't-2', place: 'Tokyo City Nights', date: 'Apr 06, 2026', status: 'Draft' },
];

export const chatMessages = [
  { id: 'c-1', sender: 'admin', text: 'Welcome to Global Lounge 🎉', type: 'text', role: 'ADMIN' },
  { id: 'c-2', sender: 'me', text: 'Hi everyone! Glad to be here.', type: 'text' },
  { id: 'c-3', sender: 'vip', text: '', type: 'media', mediaLabel: 'Shared: beach_photo.jpg', role: 'VIP' },
  { id: 'c-4', sender: 'admin', text: 'Reply to @aisha: Great intro!', type: 'reply', role: 'ADMIN' },
];

export const inboxThreads = [
  { id: 'i-1', name: 'Mina Hale', lastMessage: 'Are you joining tonight?', time: '2m', unread: 2 },
  { id: 'i-2', name: 'Noah Bright', lastMessage: 'Sent a premium invite.', time: '10m', unread: 0 },
];

export const wallet = {
  balance: 12850,
  transactions: [
    { id: 'w-1', title: 'Gift Sent', amount: -300, date: 'Mar 03, 2026' },
    { id: 'w-2', title: 'Coins Added', amount: 2000, date: 'Mar 01, 2026' },
  ],
  subscriptions: [
    { id: 'sub-1', plan: 'VIP Monthly', amount: 19.99, status: 'Active' },
  ],
};

export const premiumPlans = [
  { id: 'p-1', tier: 'VIP', monthly: 19.99, yearly: 199, perks: ['Priority Badge', 'Spotlight Boost'] },
  { id: 'p-2', tier: 'Guardian', monthly: 39.99, yearly: 399, perks: ['Guardian Shield', 'Room Moderation'] },
  { id: 'p-3', tier: 'Admin', monthly: 79.99, yearly: 799, perks: ['Admin Tag', 'Advanced Analytics'] },
];

export const gifts = [
  { id: 'gift-1', name: 'Rose', price: 40, category: 'Popular' },
  { id: 'gift-2', name: 'Crown', price: 220, category: 'Premium' },
  { id: 'gift-3', name: 'Jet', price: 800, category: 'Luxury' },
  { id: 'gift-4', name: 'Teddy', price: 120, category: 'Popular' },
];

export const notifications = [
  { id: 'n-1', title: 'Trip request approved', seen: false },
  { id: 'n-2', title: 'You received a gift', seen: true },
];
