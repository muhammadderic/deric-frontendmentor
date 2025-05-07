import retroPcs from '@assets/news-homepage/images/image-retro-pcs.jpg';
import topLaptops from '@assets/news-homepage/images/image-top-laptops.jpg';
import gamingGrowth from '@assets/news-homepage/images/image-gaming-growth.jpg';

import type { 
  MenuItem, 
  NewsItem, 
  TopicItem 
} from '@challenges/junior/news-homepage/types';

export const menuItems: MenuItem[] = [
  { name: 'Home', href: '#' },
  { name: 'New', href: '#' },
  { name: 'Popular', href: '#' },
  { name: 'Trending', href: '#' },
  { name: 'Categories', href: '#' },
];

export const newsItems: NewsItem[] = [
  {
    title: 'Hydrogen VS Electric Cars',
    description: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of AI Artistry',
    description: 'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying Up?',
    description: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

export const topicItems: TopicItem[] = [
  {
    id: 1,
    rank: '01',
    title: 'Reviving Retro PCs',
    description: 'What happens when old PCs are given modern upgrades?',
    image: retroPcs,
    alt: 'Retro PC',
  },
  {
    id: 2,
    rank: '02',
    title: 'Top 10 Laptops of 2022',
    description: 'Our best picks for various needs and budgets.',
    image: topLaptops,
    alt: 'Top Laptops',
  },
  {
    id: 3,
    rank: '03',
    title: 'The Growth of Gaming',
    description: 'How the pandemic has sparked fresh opportunities.',
    image: gamingGrowth,
    alt: 'Gaming Growth',
  },
];