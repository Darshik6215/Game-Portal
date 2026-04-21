'use client';

import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Smartphone } from 'lucide-react';

export default function WhyGameHub() {
  const features = [
    {
      title: "INSTANT PLAY",
      desc: "No downloads, no installations. Start gaming in seconds directly in your browser.",
      icon: Rocket,
      color: "text-neon-cyan"
    },
    {
      title: "100% FREE",
      desc: "Every single game on our platform is free to play, with no hidden subscriptions.",
      icon: ShieldCheck,
      color: "text-neon-purple"
    },
    {
      title: "PLAY ANYWHERE",
      desc: "Tailored for cross-platform performance. Desktop, tablet, or mobile — we've got you.",
      icon: Smartphone,
      color: "text-neon-pink"
    }
  ];

  return (
    <section id="about" className="py-24 bg-dark-base relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white mb-4">
            WHY <span className="text-neon-cyan">GAMEPORTAL?</span>
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full shadow-neon-cyan" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 245, 255, 0.4)' }}
              className="glass p-8 rounded-3xl border border-white/5 transition-colors relative group"
            >
              <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neon-cyan/10 transition-colors`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-white mb-4 tracking-wider">{feature.title}</h3>
              <p className="text-white/60 font-rajdhani leading-relaxed">
                {feature.desc}
              </p>
              
              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity animate-glow-pulse" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
