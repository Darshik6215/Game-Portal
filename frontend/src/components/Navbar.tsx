'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, Menu, X, Gamepad2 } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuLinks = [
    { name: 'GAMES', href: '#all-games' },
    { name: 'TRENDING', href: '#trending' },
    { name: 'CATEGORIES', href: '#categories' },
    { name: 'ABOUT', href: '#about' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Gamepad2 className="w-8 h-8 text-white group-hover:text-neon-cyan transition-colors" />
            <span className="font-orbitron font-black text-2xl tracking-tighter text-white">
              GAME<span className="text-white/40">PORTAL</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {menuLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[10px] font-black tracking-[0.3em] text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-6">
            <div className={`relative hidden sm:flex items-center transition-all duration-500 rounded-full bg-white/5 border border-white/5 ${isSearchFocused ? 'w-80 border-white/20' : 'w-48'}`}>
              <Search className="absolute left-4 w-3.5 h-3.5 text-white/40" />
              <input 
                type="text" 
                placeholder="Find your game..." 
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full bg-transparent py-2.5 pl-11 pr-4 text-[10px] font-bold tracking-widest text-white focus:outline-none placeholder:text-white/20"
              />
            </div>

            <div className="flex items-center gap-2 text-white/60">
               <button className="p-2 hover:text-white transition-colors">
                 <Bell className="w-5 h-5" />
               </button>
               <button 
                  className="lg:hidden p-2"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu className="w-6 h-6" />
                </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-orbitron font-black text-2xl text-white">PORTAL</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-white/5 rounded-full border border-white/10"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {menuLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-5xl font-orbitron font-black text-white/20 hover:text-white transition-all uppercase leading-none"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
