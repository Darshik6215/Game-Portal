'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Users, Play } from 'lucide-react';
import { Game } from '@/lib/api';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/game/${game.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative bg-[#111118] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 shadow-2xl cursor-pointer"
      >
        {/* Thumbnail Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
          <Image 
            src={game.thumbnail} 
            alt={game.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
            loading="lazy"
          />
          
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

          {/* Rating Badge (Top Right) */}
          <div className="absolute top-3 right-3 backdrop-blur-md bg-black/60 text-white px-2 py-0.5 rounded flex items-center gap-1 border border-white/10 text-[10px] font-bold">
            <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
            {game.rating}
          </div>

          {/* Status Badge (Top Left) */}
          {game.views > 10000 && (
            <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-0.5 rounded text-[9px] font-black tracking-widest uppercase shadow-lg">
              HOT
            </div>
          )}

          {/* Play Now Overlay (Visible on Hover Only) */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <motion.div 
               initial={{ scale: 0.8 }}
               whileHover={{ scale: 1.1 }}
               className="bg-white text-black p-4 rounded-full shadow-2xl"
             >
                <Play className="w-6 h-6 fill-black" />
             </motion.div>
          </div>
        </div>

        {/* Info Content */}
        <div className="p-4">
          <p className="text-[10px] font-semibold text-gray-400 tracking-[0.2em] uppercase mb-1">{game.category}</p>
          <h3 className="text-white font-orbitron text-sm font-bold truncate mb-3">{game.title}</h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-gray-500">
              <Users className="w-3 h-3" />
              <span className="text-[9px] font-bold">{(game.views || 0).toLocaleString()} views</span>
            </div>
            
            <span className="text-white text-[9px] font-black tracking-widest uppercase hover:text-neon-cyan transition-colors flex items-center gap-1">
              PLAY NOW <Play className="w-2 h-2 fill-current" />
            </span>
          </div>
        </div>

        {/* Bottom Glow Strip (Very Subtle) */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 group-hover:bg-neon-cyan transition-colors" />
      </motion.div>
    </Link>
  );
}
