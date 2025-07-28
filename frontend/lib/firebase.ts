
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhLQPXDglORo3v7OWIjEKl9XT_E-SrgjY",
  authDomain: "learning-roadmap-afbf3.firebaseapp.com",
  projectId: "learning-roadmap-afbf3",
  storageBucket: "learning-roadmap-afbf3.firebasestorage.app",
  messagingSenderId: "780476225405",
  appId: "1:780476225405:web:bd7ba0a41c8309d81a5e14"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
