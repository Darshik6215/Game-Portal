'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GameCard from './GameCard';
import { Game, getAllGames } from '@/lib/api';

export default function TrendingSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [trendingGames, setTrendingGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingGames = async () => {
      try {
        const games = await getAllGames();
        // Sort by views (descending) and take top 8 as "trending"
        const trending = games
          .sort((a, b) => (b.views || 0) - (a.views || 0))
          .slice(0, 8);
        setTrendingGames(trending);
      } catch (error) {
        console.error('Failed to fetch trending games:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingGames();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="trending" className="bg-[#080810] py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider">
            HOT <span className="text-white/20">RIGHT NOW</span>
          </h2>
          <p className="text-gray-400 font-rajdhani mt-3 text-sm tracking-wide">Trending browser-games this week</p>
        </div>
        
        <div className="flex items-center gap-6">
           <button className="hidden sm:block text-[11px] font-black tracking-widest text-white/40 hover:text-white transition-all uppercase">
             View All
           </button>
           <div className="flex gap-4">
             <button 
               onClick={() => scroll('left')}
               className="p-4 rounded-full border border-white/5 bg-white/5 text-white/40 hover:text-white hover:border-white/20 transition-all"
             >
               <ChevronLeft className="w-5 h-5" />
             </button>
             <button 
               onClick={() => scroll('right')}
               className="p-4 rounded-full border border-white/5 bg-white/5 text-white/40 hover:text-white hover:border-white/20 transition-all"
             >
               <ChevronRight className="w-5 h-5" />
             </button>
           </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-6 pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {loading ? (
          <div className="flex gap-8 mx-auto container">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] snap-start bg-white/5 rounded-xl animate-pulse h-[400px]"
              />
            ))}
          </div>
        ) : trendingGames.length === 0 ? (
          <div className="flex items-center justify-center w-full py-12">
            <p className="text-gray-400 font-rajdhani text-lg">No trending games available. Please import games first.</p>
          </div>
        ) : (
          <div className="flex gap-8 mx-auto container">
            {trendingGames.map((game, index) => (
              <motion.div 
                key={game.id} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] snap-start"
              >
                <GameCard game={game} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
