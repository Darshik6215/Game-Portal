export interface Game {
  id: number;
  name: string;
  category: string;
  rating: number;
  players: string;
  gradient: string;
}

export const GAMES: Game[] = [
  { id: 1, name: "Cyber Racer", category: "Racing", rating: 4.8, players: "12K", gradient: "from-cyan-500 to-blue-600" },
  { id: 2, name: "Shadow Ninja", category: "Action", rating: 4.9, players: "8K", gradient: "from-purple-600 to-pink-600" },
  { id: 3, name: "Logic Master", category: "Puzzle", rating: 4.7, players: "5K", gradient: "from-green-500 to-emerald-700" },
  { id: 4, name: "Space Explorer", category: "Adventure", rating: 4.6, players: "15K", gradient: "from-orange-500 to-red-600" },
  { id: 5, name: "Subway Surfers", category: "Action", rating: 4.9, players: "50K", gradient: "from-yellow-400 to-orange-600" },
  { id: 6, name: "Temple Run 2", category: "Adventure", rating: 4.8, players: "45K", gradient: "from-amber-600 to-orange-700" },
  { id: 7, name: "Candy Crush", category: "Puzzle", rating: 4.7, players: "100K", gradient: "from-pink-400 to-rose-600" },
  { id: 8, name: "Moto X3M", category: "Racing", rating: 4.8, players: "30K", gradient: "from-blue-500 to-indigo-700" },
  { id: 9, name: "Bubble Shooter", category: "Puzzle", rating: 4.6, players: "25K", gradient: "from-sky-400 to-blue-500" },
  { id: 10, name: "Soccer Stars", category: "Sports", rating: 4.7, players: "20K", gradient: "from-emerald-400 to-green-600" },
  { id: 11, name: "Zombie Defense", category: "Strategy", rating: 4.8, players: "18K", gradient: "from-gray-700 to-slate-900" },
  { id: 12, name: "Chess Master", category: "Strategy", rating: 4.9, players: "35K", gradient: "from-stone-500 to-neutral-700" },
  { id: 13, name: "Stickman Hook", category: "Action", rating: 4.8, players: "40K", gradient: "from-cyan-400 to-sky-600" },
  { id: 14, name: "Basketball Stars", category: "Sports", rating: 4.7, players: "22K", gradient: "from-orange-400 to-red-500" },
  { id: 15, name: "Tower Defense", category: "Strategy", rating: 4.6, players: "15K", gradient: "from-indigo-600 to-violet-800" },
  { id: 16, name: "Cooking Fever", category: "Simulation", rating: 4.7, players: "28K", gradient: "from-rose-400 to-pink-500" },
  { id: 17, name: "Drift Hunters", category: "Racing", rating: 4.9, players: "32K", gradient: "from-slate-600 to-slate-800" },
  { id: 18, name: "Farm Simulator", category: "Simulation", rating: 4.6, players: "19K", gradient: "from-lime-500 to-green-600" },
  { id: 19, name: "Tetris Lite", category: "Puzzle", rating: 4.9, players: "60K", gradient: "from-blue-600 to-indigo-800" },
  { id: 20, name: "Apex Warzone", category: "Action", rating: 4.8, players: "55K", gradient: "from-red-600 to-orange-700" }
];

export const CATEGORIES = ["All", "Action", "Puzzle", "Racing", "Adventure", "Strategy", "Sports", "Simulation"];
