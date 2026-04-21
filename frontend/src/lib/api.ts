// API Service for Game Portal

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export interface Game {
  id: string;
  title: string;
  slug: string;
  iframe_url: string;
  category: string;
  tags: string[];
  description: string;
  thumbnail: string;
  views: number;
  plays: number;
  rating: number;
  created_at?: string;
  updated_at?: string;
}

export interface GameFilters {
  category?: string;
  search?: string;
  skip?: number;
  limit?: number;
}

// Get all games with optional filters
export async function getAllGames(filters?: GameFilters): Promise<Game[]> {
  try {
    const queryParams = new URLSearchParams();
    
    if (filters?.category && filters.category !== 'ALL') {
      queryParams.append('category', filters.category);
    }
    if (filters?.search) {
      queryParams.append('search', filters.search);
    }
    if (filters?.skip !== undefined) {
      queryParams.append('skip', filters.skip.toString());
    }
    if (filters?.limit !== undefined) {
      queryParams.append('limit', filters.limit.toString());
    }
    
    const url = `${API_URL}/api/v1/games${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
    
    const response = await fetch(url, {
      cache: 'no-store', // Always get fresh data
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch games: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching games:', error);
    // Return empty array on error to prevent app crash
    return [];
  }
}

// Get a single game by ID
export async function getGameById(id: string): Promise<Game | null> {
  try {
    const response = await fetch(`${API_URL}/api/v1/games/${id}`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch game: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching game:', error);
    return null;
  }
}

// Get game by slug
export async function getGameBySlug(slug: string): Promise<Game | null> {
  try {
    const games = await getAllGames({ search: slug });
    const game = games.find(g => g.slug === slug);
    return game || null;
  } catch (error) {
    console.error('Error fetching game by slug:', error);
    return null;
  }
}

// Increment game views
export async function incrementGameViews(id: string): Promise<void> {
  try {
    await fetch(`${API_URL}/api/v1/games/${id}/view`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error incrementing views:', error);
  }
}

// Increment game plays
export async function incrementGamePlays(id: string): Promise<void> {
  try {
    await fetch(`${API_URL}/api/v1/games/${id}/play`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error incrementing plays:', error);
  }
}

// Get games by category
export async function getGamesByCategory(category: string): Promise<Game[]> {
  return getAllGames({ category });
}

// Search games
export async function searchGames(query: string): Promise<Game[]> {
  return getAllGames({ search: query });
}

// Get trending games (top by views)
export async function getTrendingGames(limit: number = 10): Promise<Game[]> {
  const games = await getAllGames({ limit: 100 });
  return games
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

// Get top rated games
export async function getTopRatedGames(limit: number = 10): Promise<Game[]> {
  const games = await getAllGames({ limit: 100 });
  return games
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

// Get related games (same category, similar tags)
export async function getRelatedGames(game: Game, limit: number = 4): Promise<Game[]> {
  const allGames = await getAllGames({ category: game.category });
  
  return allGames
    .filter(g => g.id !== game.id)
    .map(g => {
      let score = 0;
      
      // Check tag matches
      const matchingTags = g.tags.filter(tag => game.tags.includes(tag));
      score += matchingTags.length * 3;
      
      // Same category bonus (already filtered)
      score += 5;
      
      // Similar rating bonus
      const ratingDiff = Math.abs(g.rating - game.rating);
      if (ratingDiff < 0.3) {
        score += 2;
      }
      
      return { ...g, relevanceScore: score };
    })
    .sort((a: any, b: any) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit);
}

// Get all categories
export async function getAllCategories(): Promise<string[]> {
  const games = await getAllGames();
  const categories = new Set(games.map(g => g.category));
  return Array.from(categories).sort();
}

// Get game count by category
export async function getGameCountByCategory(): Promise<Record<string, number>> {
  const games = await getAllGames();
  const counts: Record<string, number> = {};
  
  games.forEach(game => {
    counts[game.category] = (counts[game.category] || 0) + 1;
  });
  
  return counts;
}
