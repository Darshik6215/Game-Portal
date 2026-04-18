// API Configuration and Helper Functions

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface Game {
  id?: number;
  title: string;
  slug: string;
  iframe_url: string;
  category: string;
  tags: string[];
  description: string;
  thumbnail: string;
  rating?: number;
  players?: string;
  developer?: string;
  created_at?: string;
  updated_at?: string;
}

// Fetch all games
export async function fetchGames(): Promise<Game[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/games`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch games');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
}

// Fetch single game
export async function fetchGame(id: number): Promise<Game> {
  try {
    const response = await fetch(`${API_BASE_URL}/games/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch game');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching game:', error);
    throw error;
  }
}

// Create new game
export async function createGame(game: Omit<Game, 'id'>): Promise<Game> {
  try {
    const response = await fetch(`${API_BASE_URL}/games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game),
    });

    if (!response.ok) {
      throw new Error('Failed to create game');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating game:', error);
    throw error;
  }
}

// Update game
export async function updateGame(id: number, game: Partial<Game>): Promise<Game> {
  try {
    const response = await fetch(`${API_BASE_URL}/games/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game),
    });

    if (!response.ok) {
      throw new Error('Failed to update game');
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating game:', error);
    throw error;
  }
}

// Delete game
export async function deleteGame(id: number): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/games/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete game');
    }
  } catch (error) {
    console.error('Error deleting game:', error);
    throw error;
  }
}
