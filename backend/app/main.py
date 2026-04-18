from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.api import api_router
from app.db.mongodb import connect_to_mongo, close_mongo_connection
from app.core.config import settings

app = FastAPI(title=settings.PROJECT_NAME)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(api_router, prefix="/api/v1")

@app.on_event("startup")
async def startup_db_client():
    await connect_to_mongo()

@app.on_event("shutdown")
async def shutdown_db_client():
    await close_mongo_connection()

@app.get("/")
async def root():
    return {"message": "Welcome to GamePortal API"}

@app.get("/api/games")
async def get_games():
    # Mock data for now
    return [
        { "id": 1, "title": "Cyber Racer", "category": "Racing", "rating": 4.8, "players": "12K", "image": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80" },
        { "id": 2, "title": "Shadow Ninja", "category": "Action", "rating": 4.9, "players": "8K", "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80" },
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
