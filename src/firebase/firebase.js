// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf4mBvwgrvexnC2EOozWf-afDMJWfwg8Q",
  authDomain: "mern-book-pro.firebaseapp.com",
  projectId: "mern-book-pro",
  storageBucket: "mern-book-pro.appspot.com",
  messagingSenderId: "760732013651",
  appId: "1:760732013651:web:5a2b30df0d183e2bd562a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;