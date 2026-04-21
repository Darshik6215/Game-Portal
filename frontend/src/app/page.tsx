'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import TrendingSlider from '@/components/TrendingSlider';
import CategorySection from '@/components/CategorySection';
import WhySection from '@/components/WhySection';
import AllGamesGrid from '@/components/AllGamesGrid';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  return (
    <div className="flex flex-col relative overflow-hidden bg-[#050508]">
      {/* 1. HERO SECTION (Cinematic Entry) */}
      <Hero />
      
      {/* 2. TRENDING SECTION (Social Proof / High Energy) */}
      <div className="relative z-10 border-b border-white/5 mt-24">
        <TrendingSlider />
      </div>

      {/* 3. CATEGORY SELECTOR (Interactive Navigation) */}
      <div className="relative z-10 mt-24">
        <CategorySection 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
      </div>

      {/* 4. ALL GAMES GRID (Core Discovery) */}
      <div className="relative z-10 mt-24">
        <AllGamesGrid activeCategory={activeCategory} />
      </div>

      {/* 5. WHY GAMEPORTAL SECTION (Value Prop) */}
      <div className="relative z-10 mt-24">
        <WhySection />
      </div>

      {/* 6. PRO-GAMING INFO SECTION (SEO & Trust) */}
      <section className="bg-[#080810] pt-24 pb-28 relative border-t border-white/5 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider">
                ELITE <span className="text-white/20">BROWSER GAMING</span>
              </h2>
              <p className="text-gray-400 font-rajdhani text-sm uppercase tracking-[0.4em]">Next-Gen performance in your tab</p>
            </div>

            <div className="w-16 h-1 bg-white/10 mx-auto" />
            <div className="space-y-8 text-gray-500 font-rajdhani text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              <p>
                GamePortal is built for the modern gamer. By utilizing bleeding-edge 
                web technologies, we deliver 60FPS performance directly in your browser tab. 
                No high-end hardware required.
              </p>
              <p>
                From competitive racing to strategic tower defense, our library is 
                hand-curated to ensure every title meets our strict quality standards. 
                Zero downloads, zero friction, just elite gaming.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
