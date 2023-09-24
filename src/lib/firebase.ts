// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhLPoYJRaKeGDbh4cVCQSIe0GbXfvPqj4",
  authDomain: "game-of-life-sveltekit.firebaseapp.com",
  projectId: "game-of-life-sveltekit",
  storageBucket: "game-of-life-sveltekit.appspot.com",
  messagingSenderId: "62229370542",
  appId: "1:62229370542:web:6bcdbcedfc925c7a857f3f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
