// Import the functions you need from the SDKs you need
import {initializeApp,getApp,getApps}from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPcsFpr6_HxDr4RtKACdmMPKkxEWg7gok",
    authDomain: "prep-wise-b4acf.firebaseapp.com",
    projectId: "prep-wise-b4acf",
    storageBucket: "prep-wise-b4acf.firebasestorage.app",
    messagingSenderId: "298770096430",
    appId: "1:298770096430:web:bbb6b61706ce5df15f1abf",
    measurementId: "G-53SMZNPR6C"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();
export const auth =getAuth(app);
export const db = getFirestore(app);