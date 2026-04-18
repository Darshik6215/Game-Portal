from typing import Optional
from beanie import Document, Indexed
from pydantic import EmailStr

class Admin(Document):
    email: Indexed(EmailStr, unique=True)
    hashed_password: str
    name: str
    role: str = "admin"

    class Settings:
        name = "admins"

class Game(Document):
    title: str
    category: str
    rating: float
    players: str
    image: str

    class Settings:
        name = "games"
