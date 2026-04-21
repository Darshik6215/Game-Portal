'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Globe } from 'lucide-react';

export default function WhySection() {
  const features = [
    {
      title: "INSTANT PLAY",
      desc: "No downloads, no installations. Click and dominate in seconds — right in your browser.",
      icon: <Zap className="w-8 h-8 text-white" />,
      gradient: "from-blue-600/20 via-transparent to-transparent"
    },
    {
      title: "100% FREE FOREVER",
      desc: "Every game, every mode, zero cost. No hidden fees, no subscriptions. Just pure gaming.",
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      gradient: "from-purple-600/20 via-transparent to-transparent"
    },
    {
      title: "PLAY ANYWHERE",
      desc: "Desktop, tablet, or mobile — your games follow you. Cross-platform performance, always.",
      icon: <Globe className="w-8 h-8 text-white" />,
      gradient: "from-pink-600/20 via-transparent to-transparent"
    }
  ];

  return (
    <section id="about" className="bg-dark-base py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider">
            WHY <span className="text-white/40">GAMEPORTAL?</span>
          </h2>
          <p className="text-gray-400 font-rajdhani mt-4 text-sm max-w-lg mx-auto">The ultimate destination for seamless high-fidelity web gaming</p>
          <div className="w-24 h-1 bg-white/20 mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: 'rgba(255, 255, 255, 0.2)' }}
              className={`relative p-10 rounded-2xl border border-white/5 bg-gradient-to-br ${feature.gradient} transition-all duration-500 overflow-hidden group`}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-4 tracking-widest">{feature.title}</h3>
                <p className="text-gray-400 font-rajdhani text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
              
              {/* Subtle Ambient Light (Hover) */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
