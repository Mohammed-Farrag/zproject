// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXrLraj98sWeYYG4Mys6R4tYOyCddpAv8",
  authDomain: "zproject-43af9.firebaseapp.com",
  projectId: "zproject-43af9",
  storageBucket: "zproject-43af9.appspot.com",
  messagingSenderId: "97507489729",
  appId: "1:97507489729:web:af6123d6ea5250e8262140"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app);
const auth = getAuth(app);
export { app, db, storage, auth }