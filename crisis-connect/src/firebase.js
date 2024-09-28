// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAmq-8Z4_yPq8vi-xutXC9QOykglFYT0Y",
  authDomain: "redefine-buildathon.firebaseapp.com",
  projectId: "redefine-buildathon",
  storageBucket: "redefine-buildathon.appspot.com",
  messagingSenderId: "82989261044",
  appId: "1:82989261044:web:a99e4d0d723f7b0c8c7ea1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
