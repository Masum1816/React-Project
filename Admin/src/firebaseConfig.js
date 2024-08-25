// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDblOoM8WXB4j7R2nuyLezixH9mXDjG85Y",
  authDomain: "react-cf05c.firebaseapp.com",
  projectId: "react-cf05c",
  storageBucket: "react-cf05c.appspot.com",
  messagingSenderId: "987981930651",
  appId: "1:987981930651:web:35ef99627aef85e349263e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

