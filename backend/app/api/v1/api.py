from fastapi import APIRouter
from app.api.v1.endpoints import admin, games

api_router = APIRouter()
api_router.include_router(admin.router)
api_router.include_router(games.router)
