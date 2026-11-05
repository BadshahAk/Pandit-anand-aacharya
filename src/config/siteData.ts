import {
  PersonalityTrait,
  DreamItem,
  JourneyMilestone,
  FavoriteThing,
  TravelDestination,
  GalleryPhoto,
  QuizQuestion,
  WouldYouRatherPrompt,
  TruthOrDareItem
} from '../types';

export const SITE_BRAND = {
  name: 'ANAND',
  tagline: 'A simple soul with a heart full of dreams ❤️',
  subtitle: 'A Simple Soul, A Beautiful Story.',
  heroGreeting: "Hey, I'm Anand! ❤️",
  telegramUrl: 'https://t.me/KINGxANAND',
  telegramUsername: '@KINGxANAND',
  portraitAsset: '/images/anand-portrait.jpg',
  fallbackInitials: 'ANAND',
  musicTrack: {
    title: 'O Sanam',
    artist: 'Akhil Sachdeva',
    edition: 'Soulful Acoustic & Romantic Lofi Vibe',
    localFile: '/music/background.mp3'
  }
};

export const ABOUT_TEXT = {
  title: 'A Little About Me',
  subtitle: 'Beyond the titles, just a heart that feels everything.',
  p1: "Hey, I'm Anand! ❤️",
  p2: "A simple soul with a heart full of dreams, endless feelings, and a little bit of madness. ✨",
  p3: "I believe in deep connections, genuine smiles, late-night conversations, unexpected surprises, and the kind of love that feels like home. 🫶🏻",
  p4: "I'm someone who dreams big, feels deeply, and finds happiness in the smallest things. I want to explore the world, collect beautiful memories, achieve my dreams, and make every moment worth remembering. 🌍💫"
};

export const PERSONALITY_CARDS: PersonalityTrait[] = [
  {
    id: 'pandit',
    role: 'PANDIT',
    emoji: '🕉️',
    subtitle: 'Rooted in Vedic Heritage',
    description: 'Spirituality, traditions, simplicity and inner peace.',
    details: [
      'Finding divine serenity in sacred mantras and morning aartis.',
      'Belief in positive karma, family values, and humble gratitude.',
      'Carrying centuries-old ancestral wisdom with a gentle, modern heart.'
    ],
    gradient: 'from-[#FDF6E2] to-[#FFF9F0]',
    accentColor: '#D4AF37'
  },
  {
    id: 'developer',
    role: 'DEVELOPER',
    emoji: '💻',
    subtitle: 'Architect of Digital Logic',
    description: 'Creativity, programming, technology and innovation.',
    details: [
      'Turning raw concepts into elegant, pixel-perfect user experiences.',
      'Obsessed with clean code, smooth animations, and intuitive design.',
      'Building products that solve real problems and touch real people.'
    ],
    gradient: 'from-[#EEF5FF] to-[#FAF8FF]',
    accentColor: '#3B82F6'
  },
  {
    id: 'trader',
    role: 'TRADER',
    emoji: '📈',
    subtitle: 'Mind of Probabilities',
    description: 'Strategy, ambition, discipline and calculated risks.',
    details: [
      'Reading charts not just with math, but with patience and psychology.',
      'Emotional discipline: knowing when to strike and when to wait.',
      'Chasing financial freedom and turning vision into solid milestones.'
    ],
    gradient: 'from-[#ECFDF5] to-[#F7FEFA]',
    accentColor: '#10B981'
  },
  {
    id: 'dreamer',
    role: 'DREAMER',
    emoji: '✨',
    subtitle: 'Soul of Romance & Magic',
    description: 'Big dreams, beautiful memories, love and exploration.',
    details: [
      'Believing in starlit strolls, heartfelt poetry, and warm embraces.',
      'Seeing magic in sunset hues, shared coffee, and honest smiles.',
      'Writing an unforgettable life story with the courage to love truly.'
    ],
    gradient: 'from-[#FFF0F3] to-[#FFF5F7]',
    accentColor: '#E85D75'
  }
];

export const DREAMS_SUMMARY =
  'To travel the world, build something meaningful, make my parents proud, experience unconditional love, and create a life that feels peaceful and beautiful.';

export const DREAMS_LIST: DreamItem[] = [
  {
    id: 'travel',
    title: 'Travel the World',
    emoji: '🌍',
    description: 'Walking hand in hand through forgotten cobblestone streets, misty mountain peaks, and sun-kissed coastlines.',
    quote: '"I want to leave footprints in quiet villages and collect sunsets from every corner of this earth."',
    tags: ['Wanderlust', 'Swiss Alps', 'Varanasi Ghats', 'Passport Stamps'],
    color: '#3B82F6'
  },
  {
    id: 'parents',
    title: 'Make My Parents Proud',
    emoji: '❤️',
    description: 'Giving my parents a life where they never have to worry, seeing them smile with pride and joy at everything we achieve.',
    quote: '"Every victory is hollow until I see my parents eyes shining with pride."',
    tags: ['Gratitude', 'Devotion', 'Family First', 'Unconditional Blessing'],
    color: '#E11D48'
  },
  {
    id: 'meaningful',
    title: 'Build Something Meaningful',
    emoji: '✨',
    description: 'Creating software, platforms, and ventures that truly empower others and leave a legacy of innovation and goodness.',
    quote: '"Not just chasing numbers, but building something that outlives me and genuinely helps souls."',
    tags: ['Impact', 'Code & Vision', 'Legacy', 'Innovation'],
    color: '#8B5CF6'
  },
  {
    id: 'true-love',
    title: 'Experience True Love',
    emoji: '🫶🏻',
    description: 'Finding that one person with whom silence is comfortable, conversations are effortless, and love feels like coming home.',
    quote: '"Not looking for a fairytale, just a soul that stays when the rain falls and holds my hand through every storm."',
    tags: ['Soul Connection', 'Loyalty', 'Warmth', 'Pure Devotion'],
    color: '#EC4899'
  },
  {
    id: 'peaceful-life',
    title: 'Live a Peaceful Life',
    emoji: '🌸',
    description: 'A sanctuary filled with morning sunlight, birds chirping, good books, soulful prayer, and a calm, grateful mind.',
    quote: '"True wealth is when your soul is quiet, your heart is kind, and your home is filled with laughter."',
    tags: ['Inner Peace', 'Simplicity', 'Mindfulness', 'Morning Chai'],
    color: '#10B981'
  }
];

export const JOURNEY_CHAPTERS: JourneyMilestone[] = [
  {
    chapter: 'Chapter 01',
    title: 'Sacred Roots & Moral Compass',
    tag: 'The Foundation',
    description: 'Grew up surrounded by traditional Vedic hymns, temple bells, and timeless Indian family values that taught me respect, empathy, and integrity.',
    feeling: 'Rooted in heritage & humility',
    iconName: 'Flame'
  },
  {
    chapter: 'Chapter 02',
    title: 'The First Spark of Technology',
    tag: 'Curiosity Unleashed',
    description: 'Wrote my first lines of code and realized that with a laptop and imagination, one can build worlds. Blending logical precision with human empathy.',
    feeling: 'Obsessed with creation & logic',
    iconName: 'Code2'
  },
  {
    chapter: 'Chapter 03',
    title: 'Navigating Markets & Discipline',
    tag: 'Trading Mindset',
    description: 'Stepped into financial trading. Learned that patience, risk management, and emotional calm matter more than raw intellect. True resilience is forged in volatility.',
    feeling: 'Quiet discipline & calculated vision',
    iconName: 'TrendingUp'
  },
  {
    chapter: 'Chapter 04',
    title: 'A Heart That Dares to Dream',
    tag: 'Self-Discovery',
    description: 'Realized that career and success only shine when balanced with deep emotions, love, creativity, spirituality, and meaningful human warmth.',
    feeling: 'Embracing vulnerability & romance',
    iconName: 'Heart'
  },
  {
    chapter: 'Chapter 05',
    title: 'Unwritten Skies & Infinite Horizons',
    tag: 'The Horizon',
    description: 'Still learning, still dreaming, still becoming. Looking ahead towards global adventures, meaningful creations, and meeting the one who will write the next chapters together.',
    feeling: 'Ready for destiny ✨',
    iconName: 'Compass'
  }
];

export const LOVE_FEELINGS_CONTENT = {
  heading: 'A Heart That Feels Deeply ❤️',
  mainStatement:
    'I may not always have the perfect words, but I have a heart that genuinely cares. I love little efforts, honest conversations, loyalty, affection, and people who make me feel that I matter.',
  specialHighlight:
    'Not looking for a perfect fairytale… just a beautiful story with real feelings. 🥺❤️',
  quotes: [
    {
      title: 'Little Efforts Matter',
      text: 'Remembering small details, sending a random "I thought of you" song, or making a warm cup of chai without asking — that is pure poetry.',
      author: 'Anand'
    },
    {
      title: 'Comfortable Silence',
      text: 'When you can sit with someone in complete silence on a terrace watching the night sky, and it still feels like the best conversation of your life.',
      author: 'Anand'
    },
    {
      title: 'Unwavering Loyalty',
      text: 'In a world full of temporary trends, I believe in old-school loyalty, sticking through tough times, and celebrating every small joy together.',
      author: 'Anand'
    }
  ]
};

export const FAVOURITE_THINGS: FavoriteThing[] = [
  {
    id: 'conversations',
    title: 'Beautiful Conversations',
    emoji: '☕',
    description: 'Late-night talks about dreams, fears, universe, childhood memories, and unspoken thoughts.',
    quote: 'When 2:00 AM feels like afternoon because the conversation is too precious to sleep.'
  },
  {
    id: 'travelling',
    title: 'Travelling & Exploring',
    emoji: '✈️',
    description: 'Wandering through historic ghats, green hills, serene temples, and finding cozy cafes in unknown alleys.',
    quote: 'Traveling refreshes the soul and reminds us how wide the world is.'
  },
  {
    id: 'spirituality',
    title: 'Spirituality & Meditation',
    emoji: '🪔',
    description: 'The scent of sandalwood, evening diya lights, Vedic chants, and finding stillness inside.',
    quote: 'Prayer is not asking; it is surrendering to the divine with gratitude.'
  },
  {
    id: 'technology',
    title: 'Technology & Creativity',
    emoji: '💻',
    description: 'Designing intuitive software, creative code experiments, and using tech to bring ideas to reality.',
    quote: 'Code is modern sorcery — turning thoughts into living digital products.'
  },
  {
    id: 'surprises',
    title: 'Little Surprises',
    emoji: '🎁',
    description: 'Unexpected sweet notes, spontaneous road trips, favorite snacks brought out of nowhere.',
    quote: 'Small spontaneous gestures carry the biggest warmth.'
  },
  {
    id: 'connections',
    title: 'Genuine Connections',
    emoji: '🤝',
    description: 'Honest bonds where you never have to pretend to be someone else to feel accepted.',
    quote: 'No masks, no games — just pure, authentic hearts.'
  },
  {
    id: 'peaceful',
    title: 'Peaceful Moments',
    emoji: '🍃',
    description: 'Gentle monsoon rain on the window, soft acoustic music, and a warm blanket with peace of mind.',
    quote: 'Peace is the highest luxury in modern times.'
  },
  {
    id: 'ambitions',
    title: 'Dreams & Ambitions',
    emoji: '🚀',
    description: 'Setting ambitious milestones, analyzing markets, and working quietly until results speak.',
    quote: 'Dream so big that it scares you, but work so consistently that it honors you.'
  }
];

export const TRAVEL_DESTINATIONS: TravelDestination[] = [
  {
    id: 'varanasi',
    name: 'Varanasi Ghats',
    country: 'India',
    type: 'visited',
    description: 'Sacred Ganga riverbank, mystical evening aarti, resonating conch shells and timeless spiritual energy.',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
    highlight: 'Spiritual awakening & peace'
  },
  {
    id: 'kedarnath',
    name: 'Kedarnath Dham',
    country: 'Himalayas, India',
    type: 'visited',
    description: 'High in the clouds among glaciers, the sacred shrine of Lord Shiva wrapped in Himalayan silence.',
    image: 'https://images.unsplash.com/photo-1626595639744-8d9e2ca255e2?auto=format&fit=crop&w=800&q=80',
    highlight: 'Devotion amidst snow-clad peaks'
  },
  {
    id: 'rajasthan',
    name: 'Royal Forts & Desert',
    country: 'Rajasthan, India',
    type: 'visited',
    description: 'Golden sandstone palaces, vibrant folk music, royal traditions and warm hospitality.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    highlight: 'Roots, culture & regal heritage'
  },
  {
    id: 'swiss-alps',
    name: 'Swiss Alps & Zermatt',
    country: 'Switzerland',
    type: 'dream',
    description: 'Panoramic glass train crossing snowfields, wooden chalets, hot chocolate, and starlit alpine nights.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    highlight: 'Winter wonderland & romantic trains'
  },
  {
    id: 'tromso',
    name: 'Tromsø & Aurora Borealis',
    country: 'Norway',
    type: 'dream',
    description: 'Chasing the celestial emerald Northern Lights dancing across the Arctic night sky.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    highlight: 'Watching magical aurora dance'
  },
  {
    id: 'amalfi',
    name: 'Amalfi Coast & Positano',
    country: 'Italy',
    type: 'dream',
    description: 'Pastel cliffside villas cascading into the deep Mediterranean blue, lemon groves, and sunset yacht rides.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    highlight: 'Romantic Mediterranean sunsets'
  },
  {
    id: 'kyoto',
    name: 'Kyoto Cherry Blossoms',
    country: 'Japan',
    type: 'dream',
    description: 'Walking beneath blooming pink Sakura canopies, Zen bamboo forests, and peaceful wooden temples.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    highlight: 'Cherry blossom petals in the wind'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'p1',
    src: '/images/anand-portrait.jpg',
    title: 'Anand — Royal Elegance & Warmth',
    caption: 'Dressed in traditional kurta and jacket, with a calm smile and sacred tilak.',
    category: 'Portrait',
    aspect: 'portrait'
  },
  {
    id: 'p2',
    src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
    title: 'Golden Hour Serenity',
    caption: 'Sunlight filtering through trees, a reminder to pause and breathe in gratitude.',
    category: 'Vibes',
    aspect: 'portrait'
  },
  {
    id: 'p3',
    src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    title: 'Vedic Sanctum & Evening Flame',
    caption: 'The sacred fire of havan that brings clarity, purification, and peace to the soul.',
    category: 'Spiritual',
    aspect: 'landscape'
  },
  {
    id: 'p4',
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    title: 'Midnight Code & Creative Flow',
    caption: 'When logic turns into art: building digital experiences late into the quiet night.',
    category: 'Memories',
    aspect: 'landscape'
  },
  {
    id: 'p5',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    title: 'Shorelines & Whispering Waves',
    caption: 'The ocean reminds us of endless horizons and the beauty of unconditional dreams.',
    category: 'Memories',
    aspect: 'landscape'
  },
  {
    id: 'p6',
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    title: 'Pure Smiles & Little Things',
    caption: 'Happiness doesn’t come from luxury; it comes from real moments with good people.',
    category: 'Vibes',
    aspect: 'square'
  }
];

export const SWEET_RANDOM_QUOTES = [
  'In a world where you can be anything, be the person who makes someone feel safe. 🤍',
  'Some souls are simply cut from the same starlight. ✨',
  'True romance is not just holding hands under the moon, but standing by each other in the storm. 🌧️❤️',
  'Chai tastes sweeter when shared with someone who understands your silence. ☕',
  'May your heart always remain soft, even when the world gets cold. 🌸',
  'The best feeling is when you look at someone and they are already looking at you with a smile. 🥺',
  'Dreams don’t work unless you do, but love works only when your heart is pure. 🫶🏻',
  'Never apologize for feeling deeply; gentle hearts are what make this world bearable. 💫'
];

export const HIDDEN_LETTER_CONTENT = {
  to: 'To You, Dear Visitor / Someone Special 💌',
  greeting: 'If you stumbled across this letter…',
  body: `Thank you for taking a pause and stepping into my little world. 

In a world running in frantic rush, I have always believed that real beauty lives in slow, heartfelt things — a warm handwritten letter, a reassuring glance across a crowded room, holding onto values, and loving someone without conditions.

I’m Anand: a blend of devotion, ambition in markets, creative code, and an unapologetically romantic heart. I don’t believe in half-hearted efforts or superficial bonds. If you are here, I hope my little world brings a smile to your face and reminds you that true kindness still exists.

Keep dreaming big, and never let anyone convince you to dim your light. ✨`,
  closing: 'Warmly and with lots of love,',
  signature: 'Anand ❤️'
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is Anand's ideal way to spend a quiet evening?",
    options: [
      'Partying in a loud, crowded club',
      'Late-night rooftop chai with deep conversations under the stars',
      'Binge-scrolling social media for 5 hours',
      'Working non-stop without sleep'
    ],
    correctIndex: 1,
    explanation: 'Anand loves meaningful late-night conversations and stargazing over loud parties any day!',
    anandQuote: '"Silence with the right person is richer than 100 empty words."'
  },
  {
    id: 2,
    question: "Which four pillars define Anand's unique personality?",
    options: [
      'Gamer, Chef, Pilot, Singer',
      'Pandit, Developer, Trader, Dreamer',
      'Politician, Actor, Influencer, DJ',
      'Athlete, Musician, Lawyer, Critic'
    ],
    correctIndex: 1,
    explanation: 'Anand is a harmonious blend of Vedic spirituality (Pandit), software logic (Developer), market discipline (Trader), and romantic vision (Dreamer)!',
    anandQuote: '"Rooted in tradition, building with code, thriving in markets, and dreaming with heart."'
  },
  {
    id: 3,
    question: "What does Anand value most in a relationship?",
    options: [
      'Expensive gifts & social media flex',
      'Loyalty, honest communication, and little efforts that feel like home',
      'Winning arguments and keeping score',
      'Formal expectations and strict rules'
    ],
    correctIndex: 1,
    explanation: 'For Anand, loyalty and genuine warmth are everything. Little efforts touch his heart the most.',
    anandQuote: '"Not looking for a fairytale, just a beautiful story with real feelings."'
  },
  {
    id: 4,
    question: "What is Anand's favorite music vibe?",
    options: [
      'Loud heavy metal scream tracks',
      'Soulful acoustic & romantic lofi songs like "O Sanam"',
      'Silence only, no music ever',
      'Commercial ringtones on loop'
    ],
    correctIndex: 1,
    explanation: 'Akhil Sachdeva’s "O Sanam" and soulful acoustic melodies hold a special place in his heart.',
    anandQuote: '"Music reaches places in the heart that words can never touch."'
  },
  {
    id: 5,
    question: "What is Anand's ultimate life dream?",
    options: [
      'To make parents proud, explore the world, experience true love, and build something meaningful',
      'To move to a lonely cave and isolate forever',
      'To buy 50 luxury cars and never do charity',
      'To stop learning and stay idle'
    ],
    correctIndex: 0,
    explanation: 'His highest aspirations are making his parents smile with pride, seeing the world, and building lasting value.',
    anandQuote: '"Every achievement is sweeter when your parents smile at it."'
  }
];

export const WOULD_YOU_RATHER_CARDS: WouldYouRatherPrompt[] = [
  {
    id: 1,
    category: 'Romantic',
    optionA: 'Midnight walk under rain with one umbrella ☔',
    optionB: 'Cozy fireplace watching snowfall with hot cocoa ❄️'
  },
  {
    id: 2,
    category: 'Late Night',
    optionA: '3 AM honest confession call that lasts for hours 🌙',
    optionB: 'Spontaneous sunrise road trip with your favorite music 🌅'
  },
  {
    id: 3,
    category: 'Travel',
    optionA: 'Peaceful boat ride in Varanasi watching evening aarti 🪔',
    optionB: 'Scenic glass train across snow-capped Swiss mountains 🏔️'
  },
  {
    id: 4,
    category: 'Lifestyle',
    optionA: 'Cook a spontaneous dinner together while laughing 🍝',
    optionB: 'Dress up for a surprise candlelit rooftop dinner 🕯️'
  },
  {
    id: 5,
    category: 'Romantic',
    optionA: 'A handwritten letter sealed with red wax and dried rose 💌',
    optionB: 'A customized playlist of 50 songs that remind them of you 🎵'
  },
  {
    id: 6,
    category: 'Late Night',
    optionA: 'Stargazing on a grassy hill wrapped in a warm blanket ✨',
    optionB: 'Walking through quiet nighttime alleys sharing ice cream 🍦'
  }
];

export const TRUTH_OR_DARE_DECK: TruthOrDareItem[] = [
  {
    type: 'truth',
    category: 'Romantic 💌',
    intensity: 'Soft',
    text: 'What was the first thing you noticed about the person you like or your best friend?'
  },
  {
    type: 'truth',
    category: 'Deep Emotional 🌙',
    intensity: 'Deep',
    text: 'What is one promise you made to yourself that you never want to break?'
  },
  {
    type: 'truth',
    category: 'Friendship 🤝',
    intensity: 'Medium',
    text: 'Who in your life can make you smile even on your darkest and hardest days?'
  },
  {
    type: 'dare',
    category: 'Romantic 💌',
    intensity: 'Soft',
    text: 'Send a genuine 2-sentence appreciation voice note or text to someone you care about right now.'
  },
  {
    type: 'dare',
    category: 'Playful 😜',
    intensity: 'Medium',
    text: 'Recite a famous romantic Bollywood dialogue with full theatrical expression!'
  },
  {
    type: 'dare',
    category: 'Deep Emotional 🌙',
    intensity: 'Soft',
    text: 'Close your eyes for 30 seconds, think of three things you are grateful for, and say them out loud.'
  },
  {
    type: 'truth',
    category: 'Romantic 💌',
    intensity: 'Deep',
    text: 'Do you believe in soulmates, or do you think love is something you build together with patience?'
  },
  {
    type: 'dare',
    category: 'Playful 😜',
    intensity: 'Soft',
    text: 'Hum the melody of "O Sanam" or your favorite love song for 15 seconds!'
  }
];
