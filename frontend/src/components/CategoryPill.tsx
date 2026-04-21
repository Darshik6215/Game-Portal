'use client';

import { motion } from 'framer-motion';

interface CategoryPillProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryPill({ category, isActive, onClick }: CategoryPillProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-2 rounded-full font-bold text-sm tracking-widest transition-all duration-300 ${
        isActive 
          ? 'text-white' 
          : 'text-white/60 border border-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan'
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="activeCategory"
          className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full -z-10 shadow-neon-cyan"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {category.toUpperCase()}
    </button>
  );
}
