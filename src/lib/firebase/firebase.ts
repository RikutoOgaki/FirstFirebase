// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCplg8avar8dSo9OwIHsd30XAKKHw1821g",
    authDomain: "json-test-69eb7.firebaseapp.com",
    projectId: "json-test-69eb7",
    storageBucket: "json-test-69eb7.appspot.com",
    messagingSenderId: "958508199370",
    appId: "1:958508199370:web:6d17d823fd013a12f3b333",
    measurementId: "G-Q65XEXLKN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirabaseApp = () =>
    !getApps.length ? initializeApp(firebaseConfig) : getApp()