export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  exportRegions: string[];
  badgeText?: string;
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Shrimp Peeled and Deveined (21/25 VPD)',
    category: 'Shrimp',
    description: 'High-quality peeled and deveined shrimp, perfectly processed and frozen.',
    image: '/products/Shrimp.jpeg',
    exportRegions: ['India', 'Nepal'],
    badgeText: 'Premium'
  },

  {
    id: 'p2',
    name: 'Breaded Shrimp',
    category: 'Value Added',
    description: 'Premium breaded shrimp, ready to fry and serve.',
    image: '/products/Breaded Shrimp.jpeg',
    exportRegions: ['India', 'Nepal'],
    badgeText: 'Best Seller'
  },
  {
    id: 'p3',
    name: 'Spring Rolls with Shrimp',
    category: 'Value Added',
    description: 'Crispy spring rolls generously stuffed with premium shrimp.',
    image: '/products/Spring Rolls.jpeg',
    exportRegions: ['India', 'Nepal'],
  },

  {
    id: 'p4',
    name: 'Frozen Crab',
    category: 'Crab',
    description: 'Premium crab meat, carefully processed and frozen for freshness.',
    image: '/products/Crab.jpeg',
    exportRegions: ['India', 'Nepal']
  },
  {
    id: 'p5',
    name: 'Lobster',
    category: 'Lobster',
    description: 'Exquisite Rock Lobster tails and whole frozen options.',
    image: '/products/Lobster.jpeg',
    exportRegions: ['India', 'Nepal']
  },

  {
    id: 'p7',
    name: 'Squid',
    category: 'Cephalopods',
    description: 'Cleaned and whole Indian Squid, perfect for grilling and frying.',
    image: '/products/Squid.jpeg',
    exportRegions: ['India', 'Nepal']
  },
  {
    id: 'p8',
    name: 'Baby Octopus',
    category: 'Cephalopods',
    description: 'Tender baby octopus, carefully processed and frozen.',
    image: '/products/Octopus.jpeg',
    exportRegions: ['India', 'Nepal']
  },

  {
    id: 'p9',
    name: 'King Seer Fish',
    category: 'Fish',
    description: 'High-grade King Seer Fish, known for its rich taste.',
    image: '/products/Seer Fish.jpeg',
    exportRegions: ['India', 'Nepal']
  },

  {
    id: 'p10',
    name: 'Pomfret',
    category: 'Fish',
    description: 'Quality Pomfret, processed with strict hygiene standards.',
    image: '/products/Pomfret.jpeg',
    exportRegions: ['India', 'Nepal']
  },

  {
    id: 'p11',
    name: 'Silver Pomfret',
    category: 'Fish',
    description: 'Quality Silver Pomfret, processed with strict hygiene standards.',
    image: '/products/Silver Pomfret.jpeg',
    exportRegions: ['India', 'Nepal']
  }
];
