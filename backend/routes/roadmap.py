
from fastapi import APIRouter, Body
from app.services.generator import generate_roadmap

router = APIRouter()

@router.post("/")
def roadmap_endpoint(user_data: dict = Body(...)):
    roadmap = generate_roadmap(user_data)
    return {"roadmap": roadmap}
