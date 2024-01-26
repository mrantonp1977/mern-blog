// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "antonis-mern-blog.firebaseapp.com",
  projectId: "antonis-mern-blog",
  storageBucket: "antonis-mern-blog.appspot.com",
  messagingSenderId: "567588516696",
  appId: "1:567588516696:web:6c18cc1f48cf8fd0a0eb2d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);