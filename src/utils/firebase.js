// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCNtE1wBiDawAsM80LFXHjwTp55cXkNNo",
  authDomain: "netflixgpt-800ad.firebaseapp.com",
  projectId: "netflixgpt-800ad",
  storageBucket: "netflixgpt-800ad.appspot.com",
  messagingSenderId: "990464111779",
  appId: "1:990464111779:web:5c64d1dc40e7bb46dd7b16",
  measurementId: "G-8NP94Q1QSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();