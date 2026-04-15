// src/firebase/Firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 1. Add this import

const firebaseConfig = {
  apiKey: "AIzaSyD_u2onO6S8VWJFXEi5NKUFER0ekO1SqCU",
  authDomain: "furniro-b261b.firebaseapp.com",
  projectId: "furniro-b261b",
  storageBucket: "furniro-b261b.firebasestorage.app",
  messagingSenderId: "777863593206",
  appId: "1:777863593206:web:211bcc67114714783500d7"
};

const app = initializeApp(firebaseConfig);

// 2. Add these exports
export const auth = getAuth(app); 
export default app;