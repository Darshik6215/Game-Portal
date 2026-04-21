from fastapi import APIRouter, HTTPException, status, Depends
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from app.models.game_model import Game
from app.api.v1.endpoints.admin import get_current_user

router = APIRouter(prefix="/games", tags=["games"])

# Request/Response Models
class GameCreate(BaseModel):
    title: str
    slug: str
    iframe_url: str
    category: str
    tags: List[str] = []
    description: str
    thumbnail: str

class GameUpdate(BaseModel):
    title: Optional[str] = None
    slug: Optional[str] = None
    iframe_url: Optional[str] = None
    category: Optional[str] = None
    tags: Optional[List[str]] = None
    description: Optional[str] = None
    thumbnail: Optional[str] = None

class GameResponse(BaseModel):
    id: str
    title: str
    slug: str
    iframe_url: str
    category: str
    tags: List[str]
    description: str
    thumbnail: str
    views: int
    plays: int
    rating: float
    created_at: datetime
    updated_at: datetime

# Public Routes (No Auth Required)
@router.get("", response_model=List[GameResponse])
async def get_all_games(
    category: Optional[str] = None,
    search: Optional[str] = None,
    skip: int = 0,
    limit: int = 100
):
    """Get all games with optional filtering"""
    query = {}
    
    if category:
        query["category"] = category
    
    if search:
        query["$or"] = [
            {"title": {"$regex": search, "$options": "i"}},
            {"description": {"$regex": search, "$options": "i"}},
            {"tags": {"$regex": search, "$options": "i"}}
        ]
    
    games = await Game.find(query).skip(skip).limit(limit).to_list()
    
    return [
        GameResponse(
            id=str(game.id),
            title=game.title,
            slug=game.slug,
            iframe_url=game.iframe_url,
            category=game.category,
            tags=game.tags,
            description=game.description,
            thumbnail=game.thumbnail,
            views=game.views,
            plays=game.plays,
            rating=game.rating,
            created_at=game.created_at,
            updated_at=game.updated_at
        )
        for game in games
    ]

@router.get("/{game_id}", response_model=GameResponse)
async def get_game(game_id: str):
    """Get a single game by ID"""
    game = await Game.get(game_id)
    
    if not game:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Game not found"
        )
    
    return GameResponse(
        id=str(game.id),
        title=game.title,
        slug=game.slug,
        iframe_url=game.iframe_url,
        category=game.category,
        tags=game.tags,
        description=game.description,
        thumbnail=game.thumbnail,
        views=game.views,
        plays=game.plays,
        rating=game.rating,
        created_at=game.created_at,
        updated_at=game.updated_at
    )

# Protected Routes (Auth Required)
@router.post("", response_model=GameResponse, status_code=status.HTTP_201_CREATED)
async def create_game(
    game_data: GameCreate,
    current_user: dict = Depends(get_current_user)
):
    """Create a new game (Admin only)"""
    # Check if slug already exists
    existing_game = await Game.find_one(Game.slug == game_data.slug)
    if existing_game:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="A game with this slug already exists"
        )
    
    # Create new game
    game = Game(
        title=game_data.title,
        slug=game_data.slug,
        iframe_url=game_data.iframe_url,
        category=game_data.category,
        tags=game_data.tags,
        description=game_data.description,
        thumbnail=game_data.thumbnail
    )
    
    await game.insert()
    
    return GameResponse(
        id=str(game.id),
        title=game.title,
        slug=game.slug,
        iframe_url=game.iframe_url,
        category=game.category,
        tags=game.tags,
        description=game.description,
        thumbnail=game.thumbnail,
        views=game.views,
        plays=game.plays,
        rating=game.rating,
        created_at=game.created_at,
        updated_at=game.updated_at
    )

@router.put("/{game_id}", response_model=GameResponse)
async def update_game(
    game_id: str,
    game_data: GameUpdate,
    current_user: dict = Depends(get_current_user)
):
    """Update a game (Admin only)"""
    game = await Game.get(game_id)
    
    if not game:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Game not found"
        )
    
    # Check if new slug conflicts with existing game
    if game_data.slug and game_data.slug != game.slug:
        existing_game = await Game.find_one(Game.slug == game_data.slug)
        if existing_game:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="A game with this slug already exists"
            )
    
    # Update fields
    update_data = game_data.dict(exclude_unset=True)
    if update_data:
        update_data["updated_at"] = datetime.utcnow()
        for field, value in update_data.items():
            setattr(game, field, value)
        
        await game.save()
    
    return GameResponse(
        id=str(game.id),
        title=game.title,
        slug=game.slug,
        iframe_url=game.iframe_url,
        category=game.category,
        tags=game.tags,
        description=game.description,
        thumbnail=game.thumbnail,
        views=game.views,
        plays=game.plays,
        rating=game.rating,
        created_at=game.created_at,
        updated_at=game.updated_at
    )

@router.delete("/{game_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_game(
    game_id: str,
    current_user: dict = Depends(get_current_user)
):
    """Delete a game (Admin only)"""
    game = await Game.get(game_id)
    
    if not game:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Game not found"
        )
    
    await game.delete()
    return None

@router.post("/{game_id}/view", status_code=status.HTTP_200_OK)
async def increment_game_views(game_id: str):
    """Increment game view count"""
    game = await Game.get(game_id)
    
    if not game:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Game not found"
        )
    
    game.views += 1
    game.updated_at = datetime.utcnow()
    await game.save()
    
    return {"success": True, "views": game.views}

@router.post("/{game_id}/play", status_code=status.HTTP_200_OK)
async def increment_game_plays(game_id: str):
    """Increment game play count"""
    game = await Game.get(game_id)
    
    if not game:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Game not found"
        )
    
    game.plays += 1
    game.updated_at = datetime.utcnow()
    await game.save()
    
    return {"success": True, "plays": game.plays}
