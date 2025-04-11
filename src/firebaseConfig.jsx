// src/firebaseConfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyABtSHVevFY3QbRZg3SPvbQdqcU7NTaMP4",
  authDomain: "ro-1-d1951.firebaseapp.com",
  projectId: "ro-1-d1951",
  storageBucket: "ro-1-d1951.firebasestorage.app",
  messagingSenderId: "463978408841",
  appId: "1:463978408841:web:e0fa99cda45d53d103cf58",
  measurementId: "G-V48NCKMY46"
};

// ✅ Initialize only once
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// ✅ Auth & Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
