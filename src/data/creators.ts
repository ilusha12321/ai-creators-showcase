import type { Creator } from '../types/creator'

export const creators: Creator[] = [
  {
    id: 'alex', name: 'Alex', username: '@alex.roams', gender: 'male', category: 'Lifestyle / Travel',
    tagline: 'Cities, routes and slow mornings.',
    bio: 'Confident, curious, always one flight away. Alex shares city guides, travel routines and honest lifestyle notes.',
    followers: '248K', online: true, traits: ['Adventurous', 'Warm', 'Spontaneous'],
    posts: [
      { caption: 'Shibuya at 6 a.m. is a different city.', place: 'Tokyo', likes: '12.4K' },
      { caption: 'Three days, one carry-on. My exact packing list.', place: 'Lisbon', likes: '8.9K' },
      { caption: 'The best coffee is never on the main street.', place: 'Istanbul', likes: '10.1K' },
    ],
    chat: [
      { from: 'user', text: "What's your favorite place to travel?" },
      { from: 'creator', text: "I'd probably choose Tokyo. The energy, food and nightlife are incredible." },
      { from: 'user', text: 'Any tips for a first visit?' },
      { from: 'creator', text: 'Stay near a metro line, skip the tourist menus and walk the side streets at night.' },
    ],
  },
  {
    id: 'noah', name: 'Noah', username: '@noah.builds', gender: 'male', category: 'Technology / Business',
    tagline: 'Product, AI and calm decisions.',
    bio: 'Calm and analytical. Noah breaks down startups, tools and the habits behind good decisions.',
    followers: '186K', online: true, traits: ['Analytical', 'Calm', 'Direct'],
    posts: [
      { caption: 'Five AI tools that actually saved me time this month.', place: 'Berlin', likes: '9.2K' },
      { caption: 'Why most roadmaps fail in week three.', place: 'Notes', likes: '6.7K' },
      { caption: 'My desk setup for deep work. Nothing flashy.', place: 'Studio', likes: '7.5K' },
    ],
    chat: [
      { from: 'user', text: 'How do you decide what to build next?' },
      { from: 'creator', text: 'I look for the problem people already pay to solve badly, then cut the first version in half.' },
      { from: 'user', text: 'And when it fails?' },
      { from: 'creator', text: "Then it's cheap data. Write down what you learned and ship the next test." },
    ],
  },
  {
    id: 'mia', name: 'Mia', username: '@mia.atelier', gender: 'female', category: 'Fashion / Lifestyle',
    tagline: 'Quiet luxury, sharp tailoring.',
    bio: 'Mia builds modern wardrobes around fit, fabric and restraint, and shows how to wear them every day.',
    followers: '412K', online: false, traits: ['Refined', 'Playful', 'Detail-driven'],
    posts: [
      { caption: 'One camel coat, five ways to wear it.', place: 'Paris', likes: '21.8K' },
      { caption: 'What I pack for fashion week. Less than you think.', place: 'Milan', likes: '17.3K' },
      { caption: 'Texture over colour: the new neutral palette.', place: 'Atelier', likes: '14.0K' },
    ],
    chat: [
      { from: 'user', text: 'How do I build a capsule wardrobe?' },
      { from: 'creator', text: 'Start with fit. Pick ten pieces in two neutral tones that all work together.' },
      { from: 'user', text: 'What should I buy first?' },
      { from: 'creator', text: 'A well-cut blazer. It lifts everything else you already own.' },
    ],
  },
  {
    id: 'emma', name: 'Emma', username: '@emma.moves', gender: 'female', category: 'Fitness / Travel',
    tagline: 'Train anywhere, explore everything.',
    bio: 'Energetic and consistent. Emma mixes strength training, trail runs and travel workouts you can do without a gym.',
    followers: '329K', online: true, traits: ['Energetic', 'Disciplined', 'Encouraging'],
    posts: [
      { caption: '20-minute hotel room workout. No equipment.', place: 'Bali', likes: '15.6K' },
      { caption: 'Sunrise trail run, 12 km of pure quiet.', place: 'Dolomites', likes: '11.2K' },
      { caption: 'What I eat on a training day.', place: 'Kitchen', likes: '9.8K' },
    ],
    chat: [
      { from: 'user', text: 'How do you stay consistent while travelling?' },
      { from: 'creator', text: 'I keep it small: 20 minutes, every morning, wherever I am. Small beats perfect.' },
      { from: 'user', text: 'Can you share a quick routine?' },
      { from: 'creator', text: 'Squats, push-ups, lunges, plank. Four rounds, one minute each. Done before breakfast.' },
    ],
  },
]
