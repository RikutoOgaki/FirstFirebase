// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbRXtMQTuYqXJ2yKsbkGf1JMXKuZwWYNk",
    authDomain: "todo-list-89a7a.firebaseapp.com",
    projectId: "todo-list-89a7a",
    storageBucket: "todo-list-89a7a.appspot.com",
    messagingSenderId: "784054158559",
    appId: "1:784054158559:web:cff4b278fb9128593c556a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)