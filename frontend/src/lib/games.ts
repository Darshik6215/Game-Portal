export interface Game {
  id: number;
  name: string;
  category: string;
  rating: number;
  players: string;
  image: string;
  icon: string;
  isHot?: boolean;
  isNew?: boolean;
}

export const GAMES: Game[] = [
  // Racing
  { id: 1, name: "Cyber Racer", category: "Racing", rating: 4.8, players: "12K", image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=800", icon: "🏎️", isHot: true },
  { id: 2, name: "Drift Hunters", category: "Racing", rating: 4.9, players: "32K", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800", icon: "🚗", isHot: true },
  { id: 3, name: "Moto X3M", category: "Racing", rating: 4.8, players: "30K", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800", icon: "🏍️" },
  { id: 4, name: "Road Rage 3D", category: "Racing", rating: 4.5, players: "8K", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800", icon: "🏎️" },

  // Action
  { id: 6, name: "Shadow Ninja", category: "Action", rating: 4.9, players: "8K", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800", icon: "⚔️", isHot: true },
  { id: 7, name: "Stickman Hook", category: "Action", rating: 4.8, players: "40K", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=800", icon: "🪝" },
  { id: 8, name: "Battle Royale Arena", category: "Action", rating: 4.8, players: "55K", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800", icon: "🔫", isHot: true },
  { id: 9, name: "Zombie Defense", category: "Action", rating: 4.7, players: "18K", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800", icon: "🧟" },

  // Puzzle
  { id: 11, name: "Logic Master", category: "Puzzle", rating: 4.7, players: "5K", image: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=800", icon: "🧩" },
  { id: 12, name: "Candy Crush Saga", category: "Puzzle", rating: 4.7, players: "100K", image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800", icon: "🍬", isHot: true },
  { id: 13, name: "Chess Master", category: "Puzzle", rating: 4.9, players: "35K", image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800", icon: "♟️" },

  // Adventure
  { id: 16, name: "Space Explorer", category: "Adventure", rating: 4.6, players: "15K", image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=800", icon: "🚀" },
  { id: 17, name: "Temple Run 2", category: "Adventure", rating: 4.8, players: "45K", image: "https://images.unsplash.com/photo-1533240332313-0db36245e4f2?q=80&w=800", icon: "🏃" },
  { id: 19, name: "Lost Kingdom", category: "Adventure", rating: 4.7, players: "20K", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800", icon: "🏰" },

  // Sports
  { id: 21, name: "Soccer Stars", category: "Sports", rating: 4.7, players: "20K", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800", icon: "⚽" },
  { id: 22, name: "Basketball Stars", category: "Sports", rating: 4.7, players: "22K", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800", icon: "🏀" },

  // Strategy
  { id: 24, name: "Tower Defense King", category: "Strategy", rating: 4.6, players: "15K", image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800", icon: "🏰" },
  { id: 25, name: "War Commander", category: "Strategy", rating: 4.8, players: "25K", image: "https://images.unsplash.com/photo-1559893088-c0787ebfc084?q=80&w=800", icon: "🎖️" },

  // Simulation
  { id: 26, name: "Cooking Fever", category: "Simulation", rating: 4.7, players: "28K", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800", icon: "🍳" },
  { id: 28, name: "City Builder", category: "Simulation", rating: 4.6, players: "19K", image: "https://images.unsplash.com/photo-1518005020251-58296d8fca1b?q=80&w=800", icon: "🏙️" }
];

export const CATEGORIES = ["ALL", "ACTION", "PUZZLE", "RACING", "ADVENTURE", "STRATEGY", "SPORTS", "SIMULATION"];
