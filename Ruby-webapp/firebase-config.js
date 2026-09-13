import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyCBjQNEB0rbAN7eTh9laov3kwB7QqRKEmA",
    authDomain: "ruby-webapp-demo.firebaseapp.com",
    projectId: "ruby-webapp-demo",
    storageBucket: "ruby-webapp-demo.firebasestorage.app",
    messagingSenderId: "721420539138",
    appId: "1:721420539138:web:ad0a212fbcd8ea08b71e1b",
    measurementId: "G-17YWV4X045",
    databaseURL: "https://ruby-webapp-demo-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);