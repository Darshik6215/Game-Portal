'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Compass } from 'lucide-react';

export default function Hero() {
  const lineVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050508]">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000" 
          alt="Gaming Background"
          fill
          priority
          className="object-cover opacity-60 grayscale-[0.3]"
        />
        {/* Multilayer Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
        {/* Subtle Grid lines */}
        <div className="absolute inset-0 grid-lines opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.div 
              variants={lineVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/80">Premium Web Gaming</span>
            </motion.div>

            <div className="space-y-4 mb-4 uppercase tracking-tighter">
              <motion.h1 
                variants={lineVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-white leading-none tracking-wide"
              >
                PLAY THE BEST
              </motion.h1>
              <motion.h1 
                variants={lineVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500 leading-none tracking-wide"
              >
                WEB GAMES
              </motion.h1>
            </div>

            <motion.p 
              variants={lineVariants}
              className="text-gray-400 text-lg md:text-xl font-rajdhani max-w-xl mb-12 leading-relaxed mt-4"
            >
              Experience high-fidelity browser gaming. Optimized for speed, 
              built for performance, and 100% free forever. No installs, just pure play.
            </motion.p>

            <motion.div variants={lineVariants} className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-10 py-5 rounded-lg font-orbitron font-black text-xs tracking-widest flex items-center gap-3 hover:bg-neon-cyan transition-all shadow-2xl">
                <Play className="fill-current w-4 h-4" />
                PLAY NOW
              </button>
              <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-lg font-orbitron font-black text-xs tracking-widest hover:bg-white/10 transition-all flex items-center gap-3">
                <Compass className="w-4 h-4" />
                EXPLORE ALL
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Side Badge (Desktop) */}
      <div className="hidden xl:flex absolute right-12 bottom-12 items-center gap-6 text-white/30 rotate-90 origin-right translate-y-full">
         <span className="text-[10px] font-black tracking-[1em] uppercase">Scroll to explore</span>
         <div className="w-24 h-[1px] bg-white/20" />
      </div>
    </section>
  );
}
