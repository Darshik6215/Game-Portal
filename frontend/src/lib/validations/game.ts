import { z } from 'zod';

// Game validation schema
export const gameSchema = z.object({
  title: z.string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters'),
  
  slug: z.string()
    .min(3, 'Slug must be at least 3 characters')
    .max(100, 'Slug must be less than 100 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  
  iframe_url: z.string()
    .url('Must be a valid URL')
    .min(1, 'Game URL is required'),
  
  category: z.string()
    .min(1, 'Category is required'),
  
  tags: z.array(z.string())
    .min(1, 'At least one tag is required')
    .max(10, 'Maximum 10 tags allowed'),
  
  description: z.string()
    .min(10, 'Description must be at least 10 characters')
    .max(1000, 'Description must be less than 1000 characters'),
  
  thumbnail: z.string()
    .url('Must be a valid URL')
    .min(1, 'Thumbnail URL is required'),
});

export type GameFormData = z.infer<typeof gameSchema>;

// Categories list
export const CATEGORIES = [
  'Action',
  'Adventure',
  'Puzzle',
  'Racing',
  'Sports',
  'Strategy',
  'Simulation',
  'Shooter',
  'RPG',
  'Casual',
] as const;

// Common tags
export const COMMON_TAGS = [
  '3d',
  'multiplayer',
  'singleplayer',
  'arcade',
  'casual',
  'competitive',
  'family-friendly',
  'fast-paced',
  'physics',
  'retro',
  'skill-based',
  'time-management',
] as const;
