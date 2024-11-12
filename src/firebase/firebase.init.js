// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL_bW_laBV6wCst04jydrVKQ89of729wM",
  authDomain: "game-with-auth.firebaseapp.com",
  projectId: "game-with-auth",
  storageBucket: "game-with-auth.firebasestorage.app",
  messagingSenderId: "309021374883",
  appId: "1:309021374883:web:64f32e560addfe14040216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);