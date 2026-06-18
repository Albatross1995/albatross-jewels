// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkvcna2e2_P9mMVf8ZV2JaRF8SzXmXdOA",
  authDomain: "albatross-jewels.firebaseapp.com",
  projectId: "albatross-jewels",
  storageBucket: "albatross-jewels.firebasestorage.app",
  messagingSenderId: "452846501410",
  appId: "1:452846501410:web:bc24cf8bec6a44dd45147b",
  measurementId: "G-ESEWJ5X66N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
