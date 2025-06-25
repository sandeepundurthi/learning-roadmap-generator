
# 🚀 Automated Learning Roadmap Generator

A web app that generates personalized learning paths based on your skills and career goals.

## 🌐 Live Demo
_Deploy it on Vercel (frontend) and Render (backend) or run locally (see below)._

---

## 📦 Features

- 🎯 Role-based learning roadmap generator
- 🔐 Firebase authentication (email/password)
- ☁️ Cloud Firestore for saving user progress
- ✅ Interactive roadmap with progress tracking
- 📦 Backend powered by FastAPI with curated curriculum data

---

## 🛠️ Tech Stack

**Frontend**: Next.js, Tailwind CSS, Firebase Auth  
**Backend**: FastAPI, Python, Firestore  
**Other**: GitHub API, YouTube API (optional), Docker (optional)

---

## 🧑‍💻 Local Setup

### 1. Clone the repo
```bash
git clone https://github.com/your-username/learning-roadmap-generator.git
cd learning-roadmap-generator
```

### 2. Backend (FastAPI)
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 3. Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```

Visit: http://localhost:3000

---

## 🔐 Firebase Setup (for Frontend)

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Enable Email/Password authentication
3. Create a Firestore DB
4. Create `.env.local` in `frontend/`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
```

---

## 📁 Project Structure

```
learning-roadmap-generator/
├── backend/        # FastAPI app
├── frontend/       # Next.js app with Firebase
└── data/           # Role and curriculum data
```

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

---

## 📜 License

MIT License
