import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBn8fpvy2UDYUmD3OlC31ATfXMQzUCVXqw",
  authDomain: "prescription-8db4f.firebaseapp.com",
  projectId: "prescription-8db4f",
  storageBucket: "prescription-8db4f.firebasestorage.app",
  messagingSenderId: "1094021757146",
  appId: "1:1094021757146:web:ba02da94219d422b948de3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
