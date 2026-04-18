from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from app.core.config import settings
from app.models.user_model import Admin, Game

async def connect_to_mongo():
    client = AsyncIOMotorClient(settings.MONGODB_URL)
    await init_beanie(
        database=client[settings.DATABASE_NAME],
        document_models=[
            Admin,
            Game
        ]
    )
    print(f"Connected to MongoDB and initialized Beanie: {settings.DATABASE_NAME}")

async def close_mongo_connection():
    # Motor handles closing automatically in most cases with FastAPI
    pass
