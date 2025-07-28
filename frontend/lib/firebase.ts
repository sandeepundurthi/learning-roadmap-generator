import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDHmoBlSGHVQ4Fj90rSYS3OkKzDh_LN7Cw",
  authDomain: "learning-roadmap-afbf3.firebaseapp.com",
  projectId: "learning-roadmap-afbf3",
  storageBucket: "learning-roadmap-afbf3.appspot.com",
  messagingSenderId: "780476225405",
  appId: "1:780476225405:web:bd7ba0a41c8309d81a5e14"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
