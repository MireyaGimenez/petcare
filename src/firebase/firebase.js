import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBhfcEmzH6CTJWAz3P9q4phVSl40mCaKC4",
  authDomain: "petcare-a3a6a.firebaseapp.com",
  projectId: "petcare-a3a6a",
  storageBucket: "petcare-a3a6a.firebasestorage.app",
  messagingSenderId: "1083901992278",
  appId: "1:1083901992278:web:a075b5149bae513e72caf7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
