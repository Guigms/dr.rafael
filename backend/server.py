from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, ConfigDict
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


class ContactMessageCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")

    name: str
    phone: str
    service: str = ""
    modality: str = ""
    message: str = ""


@api_router.get("/")
async def root():
    return {"message": "Dr Rafael Dantas — Fisioterapia API"}


@api_router.get("/health")
async def health():
    return {"status": "ok"}


@api_router.post("/contact")
async def create_contact(input: ContactMessageCreate):
    if not input.name.strip() or not input.phone.strip():
        raise HTTPException(status_code=400, detail="Nome e telefone são obrigatórios.")
    doc = input.model_dump()
    doc["name"] = doc["name"].strip()
    doc["phone"] = doc["phone"].strip()
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    result = await db.contact_messages.insert_one(doc)
    return {"ok": True, "id": str(result.inserted_id)}


@api_router.get("/contact")
async def list_contacts():
    docs = await db.contact_messages.find({}, {"_id": 0}).sort(
        "created_at", -1).to_list(length=100)
    return {"count": len(docs), "items": docs}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO)
