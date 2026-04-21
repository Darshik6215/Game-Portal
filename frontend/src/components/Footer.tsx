import Link from 'next/link';
import { Gamepad2, Twitter, Github, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  const categories = ["Action", "Puzzle", "Racing", "Adventure", "Strategy", "Sports"];
  const links = ["Home", "Trending", "All Games", "About Us", "Privacy Policy"];

  return (
    <footer className="bg-[#050508] border-t border-white/5 pt-20 pb-10 font-rajdhani">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <Gamepad2 className="w-8 h-8 text-white group-hover:text-neon-cyan transition-colors" />
              <span className="font-orbitron font-black text-2xl tracking-tighter text-white">
                GAME<span className="text-white/40">PORTAL</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              The premier destination for high-fidelity web gaming. Experience cinematic action instantly in your browser.
            </p>
            <div className="flex gap-5">
              {[Twitter, Github, Youtube, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="text-gray-600 hover:text-white transition-all transform hover:scale-110">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-white text-xs mb-10 tracking-[0.3em] uppercase">Browse</h4>
            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link href="#all-games" className="text-gray-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-white text-xs mb-10 tracking-[0.3em] uppercase">Support</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-white text-xs mb-10 tracking-[0.3em] uppercase">Newsletter</h4>
            <p className="text-gray-500 text-xs mb-6">Stay ahead of the game with our latest releases.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-white/5 border border-white/5 rounded-lg py-3 px-4 text-xs text-white focus:outline-none focus:border-white/20 transition-all font-bold tracking-widest"
              />
              <button className="bg-white text-black py-3 rounded-lg text-[10px] font-black tracking-[0.3em] uppercase hover:bg-neon-cyan transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-[9px] font-black tracking-[0.2em] uppercase">
            © 2026 GAMEPORTAL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[9px] font-black tracking-[0.2em] text-gray-700 uppercase">
             <span>Terms</span>
             <span>Privacy</span>
             <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
