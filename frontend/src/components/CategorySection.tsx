'use client';

import { motion } from 'framer-motion';
import { CATEGORIES } from '@/lib/games';

interface CategorySectionProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export default function CategorySection({ activeCategory, setActiveCategory }: CategorySectionProps) {
  return (
    <section id="categories" className="bg-[#050508] py-20 text-center relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col items-center mb-10">
          <span className="text-[11px] font-black tracking-[0.5em] uppercase text-white/40 mb-3">Battlefields</span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider">
            PICK YOUR <span className="text-white/20">GENRE</span>
          </h2>
          <p className="text-gray-400 font-rajdhani mt-4 text-sm max-w-lg mx-auto">Selected from the most popular browser gaming categories</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mt-12 overflow-x-auto pb-6 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-8 py-3.5 rounded-lg font-bold text-[10px] tracking-[0.2em] transition-all duration-300 border uppercase whitespace-nowrap ${
                activeCategory === cat 
                  ? 'text-black border-transparent' 
                  : 'text-white/40 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-white rounded-lg -z-10"
                  transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
