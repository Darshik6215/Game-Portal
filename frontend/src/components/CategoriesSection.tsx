'use client';

import { motion } from 'framer-motion';
import { CATEGORIES } from '@/lib/data';

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-24 bg-dark-base relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-neon-cyan text-xs font-bold tracking-[0.5em] uppercase mb-4"
          >
            Diverse Genres
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white mb-6">
            CHOOSE YOUR <span className="text-neon-cyan">VIBE</span>
          </h2>
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent shadow-neon-cyan" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {CATEGORIES.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 245, 255, 0.1)' }}
              className="px-8 py-4 rounded-2xl border border-white/5 bg-white/5 text-white/60 font-orbitron font-bold tracking-widest text-sm hover:border-neon-cyan/50 hover:text-white transition-all shadow-lg"
            >
              {cat.toUpperCase()}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
