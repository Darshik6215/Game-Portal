"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Star, Clock, Share2, ThumbsUp, ChevronRight } from 'lucide-react';
import InArticleAd from '@/components/ads/InArticleAd';
import SidebarAd from '@/components/ads/SidebarAd';

interface Game {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  gameUrl: string;
  category: string;
  rating: number;
  players: string;
  developer: string;
  tags: string[];
}

const GamePage = ({ params }: { params: { id: string } }) => {
  const [game, setGame] = useState<Game | null>(null);
  const [relatedGames, setRelatedGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/games.json')
      .then(res => res.json())
      .then((data: Game[]) => {
        const currentGame = data.find(g => g.id === parseInt(params.id));
        if (currentGame) {
          setGame(currentGame);
          
          // Smart related games algorithm
          // 1. Games with matching tags (highest priority)
          // 2. Games from same category
          // 3. Games with similar ratings
          const related = data
            .filter(g => g.id !== currentGame.id)
            .map(g => {
              let score = 0;
              
              // Check tag matches
              const matchingTags = g.tags.filter(tag => currentGame.tags.includes(tag));
              score += matchingTags.length * 3;
              
              // Same category bonus
              if (g.category === currentGame.category) {
                score += 5;
              }
              
              // Similar rating bonus
              const ratingDiff = Math.abs(g.rating - currentGame.rating);
              if (ratingDiff < 0.3) {
                score += 2;
              }
              
              return { ...g, relevanceScore: score };
            })
            .sort((a, b) => b.relevanceScore - a.relevanceScore)
            .slice(0, 4);
          
          setRelatedGames(related);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading game:', error);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
        <p className="text-muted-foreground mt-4">Loading game...</p>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Game Not Found</h1>
        <Link href="/" className="text-primary hover:underline">Return to Home</Link>
      </div>
    );
  }

  const controls = [
    { key: "WASD / Arrows", action: "Move / Navigate" },
    { key: "Space", action: "Jump / Action" },
    { key: "Mouse", action: "Aim / Interact" },
    { key: "ESC", action: "Pause Menu" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/category/${game.category.toLowerCase()}`} className="hover:text-primary transition-colors">{game.category}</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">{game.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Game Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Game Window Placeholder */}
          <div className="relative aspect-video w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center group">
            <Image 
              src={game.image} 
              alt={game.title} 
              fill 
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="relative z-10 text-center px-4">
              <a 
                href={game.gameUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground p-6 rounded-full shadow-xl hover:scale-110 transition-transform mb-4"
              >
                <Play className="h-12 w-12 fill-current" />
              </a>
              <h2 className="text-3xl font-bold text-white mb-2">Click to Play</h2>
              <p className="text-slate-300">The game will open in a new tab</p>
            </div>
          </div>

          {/* Game Info */}
          <div className="bg-card border rounded-2xl p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 border-none" />
                    <span className="font-bold text-foreground">{game.rating}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {game.players} online
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-slate-50 transition-colors">
                  <ThumbsUp className="h-4 w-4" /> Like
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-slate-50 transition-colors">
                  <Share2 className="h-4 w-4" /> Share
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">About the Game</h3>
              <p className="text-muted-foreground leading-relaxed">
                {game.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {game.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-card border rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">How to Play</h3>
            <div className="space-y-3 mb-6">
              <p className="text-muted-foreground leading-relaxed">
                Master {game.title} with these simple steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Click the "Play Now" button above to start the game</li>
                <li>Use the controls listed below to navigate and play</li>
                <li>Complete objectives to earn points and unlock achievements</li>
                <li>Challenge yourself to beat your high score!</li>
              </ol>
            </div>
            
            <h4 className="font-bold mb-4">Game Controls</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {controls.map((control, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-dashed">
                  <span className="text-sm font-medium">{control.action}</span>
                  <kbd className="px-3 py-1 bg-white dark:bg-slate-800 border rounded shadow-sm text-xs font-mono font-bold">
                    {control.key}
                  </kbd>
                </div>
              ))}
            </div>
          </div>

          {/* Tips & Tricks */}
          <div className="bg-card border rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">💡 Tips & Tricks</h3>
            <div className="space-y-3">
              <div className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-900">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Master the Basics</h4>
                  <p className="text-xs text-muted-foreground">Take time to learn the controls before diving into advanced gameplay.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Practice Makes Perfect</h4>
                  <p className="text-xs text-muted-foreground">Regular practice will help you improve your skills and reaction time.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-900">
                <span className="text-2xl">🏆</span>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Challenge Yourself</h4>
                  <p className="text-xs text-muted-foreground">Try to beat your previous high scores and compete with friends!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Game Features */}
          <div className="bg-card border rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">🎮 Game Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                <span className="text-green-500">✓</span>
                <span className="text-sm">No Download Required</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Play in Browser</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                <span className="text-green-500">✓</span>
                <span className="text-sm">100% Free to Play</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Mobile Friendly</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Regular Updates</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Safe & Secure</span>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-card border rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">❓ Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2 text-sm">Is {game.title} free to play?</h4>
                <p className="text-sm text-muted-foreground">Yes! {game.title} is completely free to play. No downloads, no registration required. Just click and play!</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2 text-sm">Can I play on mobile devices?</h4>
                <p className="text-sm text-muted-foreground">Absolutely! This game works on desktop, tablet, and mobile devices. Play anywhere, anytime!</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2 text-sm">Do I need to download anything?</h4>
                <p className="text-sm text-muted-foreground">No downloads needed! {game.title} runs directly in your web browser using HTML5 technology.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">How do I save my progress?</h4>
                <p className="text-sm text-muted-foreground">Your progress is automatically saved in your browser. Make sure cookies are enabled for the best experience.</p>
              </div>
            </div>
          </div>

          {/* About Developer */}
          <div className="bg-card border rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">👨‍💻 About the Developer</h3>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary">{game.developer.charAt(0)}</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{game.developer}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {game.developer} is a renowned game developer known for creating engaging and high-quality {game.category.toLowerCase()} games. 
                  With a focus on player experience and innovative gameplay, they continue to deliver exciting gaming experiences.
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Category: {game.category}</span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Rating: {game.rating}⭐</span>
                </div>
              </div>
            </div>
          </div>

          {/* In-Article Ad */}
          <InArticleAd dataAdSlot="1234567890" />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Sidebar Ad */}
          <SidebarAd dataAdSlot="9876543210" />

          {/* Related Games */}
          <div className="bg-card border rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Similar Games
            </h3>
            <div className="space-y-4">
              {relatedGames.map((related) => (
                <Link href={`/game/${related.id}`} key={related.id} className="flex gap-4 group">
                  <div className="relative h-20 w-32 flex-shrink-0 rounded-lg overflow-hidden border">
                    <Image src={related.image} alt={related.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{related.title}</h4>
                    <span className="text-xs text-muted-foreground mb-1">{related.category}</span>
                    <div className="flex items-center gap-1 text-xs">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 border-none" />
                      {related.rating}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/categories" className="mt-8 block text-center py-3 border border-dashed rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">
              Explore More Games
            </Link>
          </div>

          {/* Ad or Promo Placeholder */}
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center">
            <h3 className="font-bold text-lg mb-2">Join Our Discord!</h3>
            <p className="text-sm text-muted-foreground mb-6">Connect with fellow gamers and get updates on new games.</p>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold w-full">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock TrendingUp icon since it wasn't imported from lucide-react in the top but used in Sidebar
const TrendingUp = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

export default GamePage;
