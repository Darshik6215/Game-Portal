"""
Import games from JSON file to MongoDB database
Run: python import_games.py
"""

import asyncio
import json
import sys
from pathlib import Path

# Add parent directory to path
sys.path.append(str(Path(__file__).parent))

from app.db.mongodb import connect_to_mongo, close_mongo_connection
from app.models.game_model import Game


async def import_games():
    """Import games from JSON file to MongoDB"""
    
    print("🚀 Starting game import...")
    print("=" * 50)
    
    # Connect to MongoDB
    print("📡 Connecting to MongoDB...")
    await connect_to_mongo()
    print("✅ Connected to MongoDB")
    
    # Read JSON file
    json_path = Path(__file__).parent.parent / 'frontend' / 'public' / 'data' / 'games.json'
    
    if not json_path.exists():
        print(f"❌ Error: JSON file not found at {json_path}")
        return
    
    print(f"📖 Reading games from: {json_path}")
    
    with open(json_path, 'r', encoding='utf-8') as f:
        games_data = json.load(f)
    
    print(f"📊 Found {len(games_data)} games in JSON file")
    print("=" * 50)
    
    # Import each game
    imported_count = 0
    skipped_count = 0
    error_count = 0
    
    for idx, game_data in enumerate(games_data, 1):
        try:
            # Check if game already exists
            existing_game = await Game.find_one(Game.slug == game_data['slug'])
            
            if existing_game:
                print(f"⏭️  [{idx}/{len(games_data)}] Skipped: {game_data['title']} (already exists)")
                skipped_count += 1
                continue
            
            # Create new game
            game = Game(
                title=game_data['title'],
                slug=game_data['slug'],
                iframe_url=game_data['gameUrl'],  # Use gameUrl as iframe_url
                category=game_data['category'],
                tags=game_data.get('tags', []),
                description=game_data['description'],
                thumbnail=game_data['image'],
                rating=game_data.get('rating', 0.0),
                views=0,  # Start with 0 views
                plays=0   # Start with 0 plays
            )
            
            await game.insert()
            print(f"✅ [{idx}/{len(games_data)}] Imported: {game.title}")
            imported_count += 1
            
        except Exception as e:
            print(f"❌ [{idx}/{len(games_data)}] Error importing {game_data.get('title', 'Unknown')}: {str(e)}")
            error_count += 1
    
    print("=" * 50)
    print("📊 Import Summary:")
    print(f"   ✅ Imported: {imported_count} games")
    print(f"   ⏭️  Skipped: {skipped_count} games (already exist)")
    print(f"   ❌ Errors: {error_count} games")
    print(f"   📊 Total: {len(games_data)} games processed")
    print("=" * 50)
    
    if imported_count > 0:
        print("🎉 Import completed successfully!")
        print(f"🌐 Visit: http://localhost:3000 to see your games")
    else:
        print("ℹ️  No new games were imported")
    
    # Close connection
    await close_mongo_connection()
    print("👋 Disconnected from MongoDB")


async def clear_all_games():
    """Clear all games from database (use with caution!)"""
    
    print("⚠️  WARNING: This will delete ALL games from database!")
    confirm = input("Type 'YES' to confirm: ")
    
    if confirm != 'YES':
        print("❌ Cancelled")
        return
    
    print("🗑️  Deleting all games...")
    await connect_to_mongo()
    
    deleted = await Game.delete_all()
    print(f"✅ Deleted {deleted.deleted_count} games")
    
    await close_mongo_connection()


async def show_stats():
    """Show database statistics"""
    
    print("📊 Database Statistics")
    print("=" * 50)
    
    await connect_to_mongo()
    
    # Total games
    total = await Game.count()
    print(f"📦 Total Games: {total}")
    
    # Games by category
    games = await Game.find_all().to_list()
    
    if games:
        categories = {}
        for game in games:
            categories[game.category] = categories.get(game.category, 0) + 1
        
        print("\n📂 Games by Category:")
        for category, count in sorted(categories.items()):
            print(f"   {category}: {count} games")
        
        # Top viewed games
        top_viewed = sorted(games, key=lambda x: x.views, reverse=True)[:5]
        print("\n👁️  Top Viewed Games:")
        for idx, game in enumerate(top_viewed, 1):
            print(f"   {idx}. {game.title}: {game.views} views")
        
        # Top played games
        top_played = sorted(games, key=lambda x: x.plays, reverse=True)[:5]
        print("\n🎮 Top Played Games:")
        for idx, game in enumerate(top_played, 1):
            print(f"   {idx}. {game.title}: {game.plays} plays")
    
    print("=" * 50)
    
    await close_mongo_connection()


def main():
    """Main function"""
    
    if len(sys.argv) > 1:
        command = sys.argv[1]
        
        if command == 'clear':
            asyncio.run(clear_all_games())
        elif command == 'stats':
            asyncio.run(show_stats())
        else:
            print(f"❌ Unknown command: {command}")
            print("Available commands:")
            print("  python import_games.py        - Import games from JSON")
            print("  python import_games.py clear  - Clear all games")
            print("  python import_games.py stats  - Show statistics")
    else:
        asyncio.run(import_games())


if __name__ == "__main__":
    main()
