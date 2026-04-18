from fastapi import APIRouter, HTTPException, status, Depends, Header
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import timedelta
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
