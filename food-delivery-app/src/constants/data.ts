import { LucideIcon, Star } from 'lucide-react';

export const categories = [
  { name: 'Pizza', description: 'Cheesy, crispy, iconic.', emoji: '🍕' },
  { name: 'Burgers', description: 'Juicy stacked favorites.', emoji: '🍔' },
  { name: 'BBQ', description: 'Smoky grilled perfection.', emoji: '🔥' },
  { name: 'Desserts', description: 'Sweet finishing touches.', emoji: '🍰' },
  { name: 'Drinks', description: 'Cold crafted refreshers.', emoji: '🥤' },
  { name: 'Fast Food', description: 'Quick taste wins.', emoji: '⚡' }
];

export const popularItems = [
  {
    id: '1',
    title: 'Hamburgers And french fries',
    description: 'two trays filled with hamburgers and french fries',
    price: '$24',
    time: '28 min',
    rating: '4.9',
    image: 'https://plus.unsplash.com/premium_photo-1683619761464-6b7c9a2716a8?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://plus.unsplash.com/premium_photo-1683619761464-6b7c9a2716a8?q=80&w=871&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '2',
    title: 'Explosion Burger',
    description: 'mburger with vegetables and meat beside French fries',
    price: '$18',
    time: '22 min',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
    images: [
      'https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547584385-8cd4275b6898?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '3',
    title: 'french fries in a basket',
    description: 'three hamburgers and french fries in a basket',
    price: '$12',
    time: '18 min',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=800&auto=format&fit=crop',
    ]
  },
  {
    id: '4',
    title: 'Pizza Sitting',
    description: 'Fresh pepperoni sausage pizza',
    price: '$11',
    time: '15 min',
    rating: '4.6',
    image: 'https://images.unsplash.com/photo-1700760934249-93efbb574d23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc3QlMjBmb29kfGVufDB8fDB8fHww',
    images: [
      'https://images.unsplash.com/photo-1700760934249-93efbb574d23?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1700760934249-93efbb574d23?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '5',
    title: 'white ceramic plate',
    description: 'pizza on white ceramic plate',
    price: '$11',
    time: '15 min',
    rating: '4.6',
    image: 'https://images.unsplash.com/photo-1594179047519-f347310d3322?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1594179047519-f347310d3322?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594179047519-f347310d3322?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '6',
    title: 'sandwiches and fries',
    description: 'a tray with two sandwiches and fries on it',
    price: '$11',
    time: '15 min',
    rating: '4.6',
    image: 'https://plus.unsplash.com/premium_photo-1695800953867-a0545cfd817e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://plus.unsplash.com/premium_photo-1695800953867-a0545cfd817e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1481070414801-51fd732d7184?q=80&w=800&auto=format&fit=crop'
    ]
  },
];

export const features = [
  {
    title: 'Fast Delivery',
    description: 'Hot food delivered on demand.',
    accent: 'speed'
  },
  {
    title: 'Live Tracking',
    description: 'Follow every route in real time.',
    accent: 'map'
  },
  {
    title: 'Secure Payments',
    description: 'Trusted checkout with modern payment tools.',
    accent: 'lock'
  },
  {
    title: 'Premium Restaurants',
    description: 'Curated kitchens & top-rated menus.',
    accent: 'star'
  },
  {
    title: '24/7 Support',
    description: 'Always-on help for every order.',
    accent: 'headset'
  }
];

export const testimonials = [
  {
    name: 'Ava Mitchell',
    role: 'Foodie Reviewer',
    quote: 'FlavorWave feels like a premium app. The UI and motion are effortless and delightful.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Noah Chen',
    role: 'Delivery Partner',
    quote: 'The experience is fast and sleek. Every interaction feels responsive and modern.',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Mia Alvarez',
    role: 'Startup Founder',
    quote: 'This UI looks production ready. The sections are beautifully balanced and polished.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];
