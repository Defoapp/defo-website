// MongoDB Document Schema representation for Rotating Images Showcase
// Supports any MongoDB document with `_id`, `imageUrl` (or `image` / `url`), `title`, and optional tags
export const MOCK_MONGODB_DATA = [
  {
    _id: "66e01a2b84f39c0012a9e001",
    title: "Cyber Stream & Media",
    category: "Entertainment",
    imageUrl: "/images/stream.jpg",
    badge: "Live 3.1K",
    accentColor: "#00f298",
  },
  {
    _id: "66e01a2b84f39c0012a9e002",
    title: "IronPulse Heavy Gym",
    category: "Fitness & Strength",
    imageUrl: "/images/gym.jpg",
    badge: "Deadlift 180kg",
    accentColor: "#38bdf8",
  },
  {
    _id: "66e01a2b84f39c0012a9e003",
    title: "Vybe Cooking Live",
    category: "Culinary & Cooking",
    imageUrl: "/images/cooking.jpg",
    badge: "24.1K Watching",
    accentColor: "#f97316",
  },
  {
    _id: "66e01a2b84f39c0012a9e004",
    title: "Synth Wave Audio Player",
    category: "Music & Audio",
    imageUrl: "/images/music.jpg",
    badge: "Cyber Pulse",
    accentColor: "#a855f7",
  },
  {
    _id: "66e01a2b84f39c0012a9e005",
    title: "Aetherium Crypto Assets",
    category: "Fintech & Trading",
    imageUrl: "/images/crypto.jpg",
    badge: "+3.71% 24h",
    accentColor: "#10b981",
  },
];

// Alias for backwards compatibility
export const SCREENS_DATA = MOCK_MONGODB_DATA;
