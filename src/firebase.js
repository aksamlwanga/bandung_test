// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBjnB6NHeAifgmKK7IgoSJeXE7ZkW5HimQ",
  authDomain: "bandung-d81f8.firebaseapp.com",
  projectId: "bandung-d81f8",
  storageBucket: "bandung-d81f8.appspot.com",
  messagingSenderId: "98582787622",
  appId: "1:98582787622:web:7ef2f861cad3c95a2718e7",
  measurementId: "G-MJSW9S63N3"
};




const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);