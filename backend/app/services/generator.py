import json
from pathlib import Path

BASE_PATH = Path(__file__).resolve().parent.parent / "data"

def load_json(file_name):
    with open(BASE_PATH / file_name) as f:
        return json.load(f)

def generate_roadmap(user_data: dict):
    role = user_data.get("target_role")
    roadmap = {}

    # ✅ Load every time the function runs
    role_mapping = load_json("role_mapping.json")
    base_curriculum = load_json("base_curriculum.json")

    sections = role_mapping.get(role, [])
    
    for section in sections:
        if section in base_curriculum:
            roadmap[section] = base_curriculum[section]

    print("🎯 Role:", role)
    print("📦 Sections returned:", list(roadmap.keys()))

    return roadmap
