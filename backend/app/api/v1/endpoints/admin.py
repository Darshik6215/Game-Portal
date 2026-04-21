from fastapi import APIRouter, HTTPException, status, Depends, Header
from pydantic import BaseModel, EmailStr
from typing import Optional, List, Dict, Any
from datetime import timedelta, datetime
import random
from app.core.security import (
    authenticate_user,
    create_access_token,
    verify_token,
    get_password_hash
)
from app.core.config import settings
from app.models.user_model import Admin

router = APIRouter(prefix="/admin", tags=["admin"])

# Request/Response Models
class RegisterRequest(BaseModel):
    email: EmailStr
    password: str
    name: str
    role: str = "admin"

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class LoginResponse(BaseModel):
    access_token: str
    token_type: str
    user: dict

class UserResponse(BaseModel):
    email: str
    name: str
    role: str

class DashboardStats(BaseModel):
    total_games: int
    total_views: int
    active_users: int
    revenue: float
    growth_percentage: float

class TopGame(BaseModel):
    id: str
    title: str
    views: int
    plays: int
    rating: float

class PageView(BaseModel):
    date: str
    views: int
    users: int

class TrafficSource(BaseModel):
    name: str
    value: int
    percentage: float

class UserActivity(BaseModel):
    hour: str
    users: int

class DashboardResponse(BaseModel):
    stats: DashboardStats
    top_games: List[TopGame]
    page_views: List[PageView]
    traffic_sources: List[TrafficSource]
    user_activity: List[UserActivity]
    recent_activities: List[Dict[str, Any]]

# Dependency to verify token
async def get_current_user(authorization: Optional[str] = Header(None)) -> dict:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    token = authorization.replace("Bearer ", "")
    payload = verify_token(token)
    return payload

# Routes
@router.post("/register", response_model=LoginResponse, status_code=status.HTTP_201_CREATED)
async def register(user_data: RegisterRequest):
    """Register a new admin user"""
    # Check if user already exists
    existing_user = await Admin.find_one(Admin.email == user_data.email)
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    # Create new admin user
    hashed_password = get_password_hash(user_data.password)
    new_admin = Admin(
        email=user_data.email,
        name=user_data.name,
        role=user_data.role,
        hashed_password=hashed_password
    )
    
    await new_admin.insert()
    
    # Generate access token
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": new_admin.email, "role": new_admin.role},
        expires_delta=access_token_expires
    )
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "email": new_admin.email,
            "name": new_admin.name,
            "role": new_admin.role
        }
    }

@router.post("/login", response_model=LoginResponse)
async def login(credentials: LoginRequest):
    user = await authenticate_user(credentials.email, credentials.password)
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email, "role": user.role},
        expires_delta=access_token_expires
    )
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "email": user.email,
            "name": user.name,
            "role": user.role
        }
    }

@router.get("/me", response_model=UserResponse)
async def get_current_user_info(current_user: dict = Depends(get_current_user)):
    email = current_user.get("sub")
    user = await Admin.find_one(Admin.email == email)
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    return {
        "email": user.email,
        "name": user.name,
        "role": user.role
    }

@router.post("/logout")
async def logout(current_user: dict = Depends(get_current_user)):
    return {"message": "Successfully logged out"}

@router.get("/stats")
async def get_admin_stats(current_user: dict = Depends(get_current_user)):
    return {
        "total_games": 20,
        "total_views": 125400,
        "active_users": 8549,
        "avg_rating": 4.7
    }

@router.get("/dashboard", response_model=DashboardResponse)
async def get_dashboard_data(current_user: dict = Depends(get_current_user)):
    """Get comprehensive dashboard data"""
    
    # Stats
    stats = {
        "total_games": 20,
        "total_views": 125400,
        "active_users": 8549,
        "revenue": 2450.75,
        "growth_percentage": 12.5
    }
    
    # Top Games
    top_games = [
        {"id": "subway-surfers", "title": "Subway Surfers", "views": 15420, "plays": 12340, "rating": 4.8},
        {"id": "temple-run", "title": "Temple Run 2", "views": 12350, "plays": 9870, "rating": 4.7},
        {"id": "candy-crush", "title": "Candy Crush", "views": 11200, "plays": 8950, "rating": 4.6},
        {"id": "2048", "title": "2048", "views": 9800, "plays": 7650, "rating": 4.5},
        {"id": "stickman-hook", "title": "Stickman Hook", "views": 8900, "plays": 7120, "rating": 4.7},
        {"id": "basketball-stars", "title": "Basketball Stars", "views": 8200, "plays": 6540, "rating": 4.6},
        {"id": "moto-x3m", "title": "Moto X3M", "views": 7800, "plays": 6230, "rating": 4.8},
        {"id": "hill-climb", "title": "Hill Climb Racing", "views": 7200, "plays": 5760, "rating": 4.5}
    ]
    
    # Page Views (Last 30 days)
    page_views = []
    base_date = datetime.now()
    for i in range(30, 0, -1):
        date = (base_date - timedelta(days=i)).strftime("%Y-%m-%d")
        views = random.randint(3000, 5000)
        users = random.randint(2000, 3500)
        page_views.append({"date": date, "views": views, "users": users})
    
    # Traffic Sources
    traffic_sources = [
        {"name": "Direct", "value": 45230, "percentage": 36.0},
        {"name": "Google Search", "value": 38150, "percentage": 30.4},
        {"name": "Social Media", "value": 25080, "percentage": 20.0},
        {"name": "Referral", "value": 12540, "percentage": 10.0},
        {"name": "Other", "value": 4400, "percentage": 3.6}
    ]
    
    # User Activity (24 hours)
    user_activity = []
    for hour in range(24):
        hour_str = f"{hour:02d}:00"
        # Simulate realistic traffic pattern
        if 0 <= hour < 6:
            users = random.randint(100, 300)
        elif 6 <= hour < 12:
            users = random.randint(400, 700)
        elif 12 <= hour < 18:
            users = random.randint(800, 1200)
        else:
            users = random.randint(500, 900)
        user_activity.append({"hour": hour_str, "users": users})
    
    # Recent Activities
    recent_activities = [
        {
            "id": 1,
            "type": "game_played",
            "user": "User #1234",
            "game": "Subway Surfers",
            "timestamp": (datetime.now() - timedelta(minutes=5)).isoformat(),
            "action": "Started playing"
        },
        {
            "id": 2,
            "type": "high_score",
            "user": "User #5678",
            "game": "2048",
            "timestamp": (datetime.now() - timedelta(minutes=12)).isoformat(),
            "action": "Achieved high score: 8192"
        },
        {
            "id": 3,
            "type": "game_completed",
            "user": "User #9012",
            "game": "Temple Run 2",
            "timestamp": (datetime.now() - timedelta(minutes=18)).isoformat(),
            "action": "Completed level 10"
        },
        {
            "id": 4,
            "type": "game_played",
            "user": "User #3456",
            "game": "Candy Crush",
            "timestamp": (datetime.now() - timedelta(minutes=25)).isoformat(),
            "action": "Started playing"
        },
        {
            "id": 5,
            "type": "rating",
            "user": "User #7890",
            "game": "Moto X3M",
            "timestamp": (datetime.now() - timedelta(minutes=32)).isoformat(),
            "action": "Rated 5 stars"
        }
    ]
    
    return {
        "stats": stats,
        "top_games": top_games,
        "page_views": page_views,
        "traffic_sources": traffic_sources,
        "user_activity": user_activity,
        "recent_activities": recent_activities
    }
