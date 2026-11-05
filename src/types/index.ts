export interface PersonalityTrait {
  id: string;
  role: string;
  emoji: string;
  subtitle: string;
  description: string;
  details: string[];
  gradient: string;
  accentColor: string;
}

export interface DreamItem {
  id: string;
  title: string;
  emoji: string;
  description: string;
  quote: string;
  tags: string[];
  color: string;
}

export interface JourneyMilestone {
  chapter: string;
  title: string;
  tag: string;
  description: string;
  feeling: string;
  iconName: string;
}

export interface FavoriteThing {
  id: string;
  title: string;
  emoji: string;
  description: string;
  quote: string;
}

export interface TravelDestination {
  id: string;
  name: string;
  country: string;
  type: 'visited' | 'dream';
  description: string;
  image: string;
  highlight: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: 'Portrait' | 'Spiritual' | 'Memories' | 'Vibes';
  date?: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  anandQuote: string;
}

export interface WouldYouRatherPrompt {
  id: number;
  optionA: string;
  optionB: string;
  category: 'Romantic' | 'Lifestyle' | 'Late Night' | 'Travel';
}

export interface TruthOrDareItem {
  type: 'truth' | 'dare';
  text: string;
  category: 'Romantic 💌' | 'Deep Emotional 🌙' | 'Playful 😜' | 'Friendship 🤝';
  intensity: 'Soft' | 'Medium' | 'Deep';
}

export interface RoomPlayer {
  id: string;
  name: string;
  avatar: string;
  score: number;
  lastActive: number;
  currentAnswer?: string | null;
  ready: boolean;
}

export interface RoomMessage {
  id: string;
  sender: string;
  text: string;
  type: 'chat' | 'system' | 'reaction' | 'confession';
  timestamp: string;
}

export interface GameRoom {
  code: string;
  title: string;
  hostId: string;
  gameType: 'would-you-rather' | 'truth-dare' | 'anand-quiz' | 'whisper-lounge';
  createdAt: number;
  currentQuestionIndex: number;
  players: Record<string, RoomPlayer>;
  messages: RoomMessage[];
}

export interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}
