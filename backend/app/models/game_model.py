from beanie import Document
from pydantic import Field
from typing import Optional, List
from datetime import datetime

class Game(Document):
    title: str
    slug: str
    iframe_url: str
    category: str
    tags: List[str] = []
    description: str
    thumbnail: str
    views: int = 0
    plays: int = 0
    rating: float = 0.0
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    class Settings:
        name = "games"
        
    class Config:
        json_schema_extra = {
            "example": {
                "title": "Subway Surfers",
                "slug": "subway-surfers",
                "iframe_url": "https://example.com/game/subway-surfers",
                "category": "Action",
                "tags": ["running", "endless", "arcade"],
                "description": "Run, jump and dodge obstacles in this endless runner game!",
                "thumbnail": "https://example.com/thumbnails/subway-surfers.jpg",
                "views": 15420,
                "plays": 12340,
                "rating": 4.8
            }
        }
