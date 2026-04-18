import { Metadata } from 'next';

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

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // Fetch game data
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/data/games.json`, {
    cache: 'no-store'
  });
  const games: Game[] = await res.json();
  const game = games.find(g => g.id === parseInt(params.id));

  if (!game) {
    return {
      title: 'Game Not Found | GameHub',
      description: 'The requested game could not be found.',
    };
  }

  return {
    title: `${game.title} - Play Free Online | GameHub`,
    description: game.description,
    keywords: [game.title, ...game.tags, game.category, 'free online game', 'play now', 'browser game'],
    authors: [{ name: game.developer }],
    creator: game.developer,
    publisher: 'GameHub',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `https://gamehub.com/game/${game.id}`,
      siteName: 'GameHub',
      title: `${game.title} - Play Free Online`,
      description: game.description,
      images: [
        {
          url: game.image,
          width: 1200,
          height: 630,
          alt: game.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${game.title} - Play Free Online`,
      description: game.description,
      images: [game.image],
    },
  };
}
