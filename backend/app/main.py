from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI
from app.routes import roadmap, auth

app = FastAPI(
    title="Learning Roadmap Generator",
    description="API to generate learning paths based on user skills and goals.",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # or use ["*"] for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth")
app.include_router(roadmap.router, prefix="/roadmap")

@app.get("/")
def root():
    return {"message": "Welcome to the Learning Roadmap Generator API"}
