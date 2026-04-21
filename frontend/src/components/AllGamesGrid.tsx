'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GameCard from './GameCard';
import { getAllGames, type Game } from '@/lib/api';

interface AllGamesGridProps {
  activeCategory: string;
}

export default function AllGamesGrid({ activeCategory }: AllGamesGridProps) {
  const [visibleCount, setVisibleCount] = useState(15);
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    try {
      setLoading(true);
      const gamesData = await getAllGames();
      setGames(gamesData);
    } catch (error) {
      console.error('Error loading games:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredGames = useMemo(() => {
    return activeCategory === 'ALL'
      ? games
      : games.filter(g => g.category.toUpperCase() === activeCategory);
  }, [activeCategory, games]);

  const displayedGames = filteredGames.slice(0, visibleCount);

  if (loading) {
    return (
      <section id="all-games" className="bg-[#0b0b12] py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            <p className="text-gray-400 mt-4">Loading games...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="all-games" className="bg-[#0b0b12] py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
           <div>
              <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider">
                EXPLORE <span className="text-white/20">ALL GAMES</span>
              </h2>
              <p className="text-gray-400 font-rajdhani mt-4 text-lg tracking-wide">Filter by category and find your next obsession. {filteredGames.length} games available.</p>
           </div>
           
           <div className="hidden md:block text-[11px] font-black tracking-widest text-white/40 border-b border-white/10 pb-2">
             SORT: RELEVANCE
           </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-12"
        >
          <AnimatePresence mode="popLayout">
            {displayedGames.map((game) => (
              <motion.div
                key={game.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GameCard game={game} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filteredGames.length && (
          <div className="mt-24 text-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 10)}
              className="px-16 py-5 rounded-lg border border-white/10 text-white font-orbitron font-black text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all shadow-2xl"
            >
              Load More Games
            </button>
          </div>
        )}
        
        {filteredGames.length === 0 && (
           <div className="py-20 text-center">
              <p className="text-gray-600 font-orbitron uppercase tracking-widest">No games found in this category.</p>
           </div>
        )}
      </div>
    </section>
  );
}
