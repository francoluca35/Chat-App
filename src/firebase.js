import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkLrrjsKwfJGJL6oUQunidHZ980MfOw3Q",
  authDomain: "chat-app-b2676.firebaseapp.com",
  projectId: "chat-app-b2676",
  storageBucket: "chat-app-b2676.appspot.com",
  messagingSenderId: "88490748822",
  appId: "1:88490748822:web:e2af2852cf88dd73e34bb7"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
