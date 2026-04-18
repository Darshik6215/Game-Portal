"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, TrendingUp, Clock, Star } from "lucide-react";
import { useEffect, useState } from "react";
import InArticleAd from "@/components/ads/InArticleAd";

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

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/games.json')
      .then(res => res.json())
      .then(data => {
        setGames(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading games:', error);
        setLoading(false);
      });
  }, []);

  const featuredGames = games.slice(0, 8);

  return (
    <div className="flex flex-col gap-12 pb-16">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden bg-slate-900 flex items-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1600&q=80"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Play the Best <span className="text-primary">Web Games</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Experience high-quality gaming directly in your browser. No downloads, no installs. Just pure fun.
            </p>
            <div className="flex gap-4">
              <Link href="/game/1" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:opacity-90 transition-all">
                <Play className="fill-current" /> Play Now
              </Link>
              <Link href="/categories" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Browse All
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-primary h-6 w-6" />
            <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
          </div>
          <Link href="/trending" className="text-primary font-medium hover:underline">View all</Link>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            <p className="text-muted-foreground mt-4">Loading games...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map((game) => (
              <Link href={`/game/${game.id}`} key={game.id} className="group bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-video">
                  <Image src={game.image} alt={game.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> {game.rating}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{game.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{game.category}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {game.players} playing
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Categories Grid (Quick Access) */}
      <section className="container mx-auto px-4 py-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl">
        <h2 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Action', 'Puzzle', 'Racing', 'Adventure', 'Strategy', 'Sports'].map((cat) => (
            <Link href={`/category/${cat.toLowerCase()}`} key={cat} className="flex flex-col items-center justify-center p-6 bg-background border rounded-2xl hover:border-primary transition-colors text-center font-bold">
              <span>{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Play Here Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Play on GameHub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Instant Play</h3>
            <p className="text-muted-foreground text-sm">
              No downloads, no installations. Click and play instantly in your browser. Start gaming in seconds!
            </p>
          </div>
          <div className="bg-card border rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎮</span>
            </div>
            <h3 className="font-bold text-lg mb-2">100% Free</h3>
            <p className="text-muted-foreground text-sm">
              All games are completely free to play. No hidden fees, no subscriptions. Just pure gaming fun!
            </p>
          </div>
          <div className="bg-card border rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Play Anywhere</h3>
            <p className="text-muted-foreground text-sm">
              Works on desktop, tablet, and mobile. Play your favorite games on any device, anytime!
            </p>
          </div>
        </div>
      </section>

      {/* Homepage Ad */}
      <div className="container mx-auto px-4">
        <InArticleAd dataAdSlot="1122334455" />
      </div>

      {/* All Games Section */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">All Games</h2>
          <span className="text-muted-foreground">{games.length} games available</span>
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            <p className="text-muted-foreground mt-4">Loading all games...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {games.map((game) => (
              <Link href={`/game/${game.id}`} key={game.id} className="group bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-video">
                  <Image src={game.image} alt={game.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> {game.rating}
                  </div>
                  <div className="absolute top-2 left-2 bg-primary/90 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-bold">
                    {game.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1 line-clamp-1">{game.title}</h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {game.players}
                    </div>
                    <span className="text-primary font-medium">Play Now</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* SEO Content Section */}
      <section className="container mx-auto px-4 py-12 bg-slate-50 dark:bg-slate-900/50 rounded-3xl">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h2 className="text-2xl font-bold mb-4">Play the Best Free Online Games</h2>
          <p className="text-muted-foreground mb-4">
            Welcome to GameHub, your ultimate destination for free online gaming! We offer a vast collection of high-quality HTML5 games 
            that you can play instantly in your browser without any downloads or installations. Whether you're into action-packed adventures, 
            brain-teasing puzzles, thrilling racing games, or strategic challenges, we have something for everyone.
          </p>
          
          <h3 className="text-xl font-bold mb-3 mt-6">Why Choose GameHub?</h3>
          <p className="text-muted-foreground mb-4">
            Our platform is designed with gamers in mind. All games are carefully selected to ensure quality, fun, and safety. 
            We regularly update our collection with new and exciting titles, so there's always something fresh to play. 
            Best of all, everything is completely free - no hidden costs, no subscriptions, just pure gaming entertainment.
          </p>
          
          <h3 className="text-xl font-bold mb-3 mt-6">Game Categories</h3>
          <p className="text-muted-foreground mb-4">
            Explore our diverse range of game categories including Action, Puzzle, Racing, Adventure, Strategy, Sports, and Simulation games. 
            Each category features handpicked titles that deliver the best gaming experience. Use our search and filter options to quickly 
            find games that match your interests and skill level.
          </p>
          
          <h3 className="text-xl font-bold mb-3 mt-6">Play on Any Device</h3>
          <p className="text-muted-foreground">
            All our games are built with modern HTML5 technology, making them compatible with desktop computers, laptops, tablets, and smartphones. 
            Whether you're at home or on the go, you can enjoy seamless gaming across all your devices. No app downloads required - 
            just open your browser and start playing!
          </p>
        </div>
      </section>
    </div>
  );
}
