"""
Quick script to check games in database
"""
import asyncio
import sys
from pathlib import Path

sys.path.append(str(Path(__file__).parent))

from app.db.mongodb import connect_to_mongo, close_mongo_connection
from app.models.game_model import Game


async def check_games():
    print("🔍 Checking games in database...")
    print("=" * 50)
    
    await connect_to_mongo()
    
    games = await Game.find_all().to_list()
    
    if not games:
        print("❌ No games found in database!")
        print("\n💡 Solution:")
        print("   Run: python import_games.py")
        print("   Or add games via admin panel")
    else:
        print(f"✅ Found {len(games)} games in database\n")
        
        for idx, game in enumerate(games[:5], 1):
            print(f"{idx}. {game.title}")
            print(f"   ID: {game.id}")
            print(f"   Slug: {game.slug}")
            print(f"   Category: {game.category}")
            print(f"   Views: {game.views}")
            print(f"   Plays: {game.plays}")
            print()
        
        if len(games) > 5:
            print(f"... and {len(games) - 5} more games")
    
    print("=" * 50)
    
    await close_mongo_connection()


if __name__ == "__main__":
    asyncio.run(check_games())
