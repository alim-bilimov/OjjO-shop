// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ70jAAKVIJ8iUeU6SEHSlFqyacKjcVrU",
  authDomain: "ojjoshop-61659.firebaseapp.com",
  projectId: "ojjoshop-61659",
  storageBucket: "ojjoshop-61659.appspot.com",
  messagingSenderId: "610213891276",
  appId: "1:610213891276:web:1802834b32d090e784c669",
  measurementId: "G-30MBSLX3JB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
