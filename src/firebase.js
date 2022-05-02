// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBQKpIUlXSJBsV8NHqzulNWG0qP9XEZz8",
  authDomain: "portfolio-c7de6.firebaseapp.com",
  projectId: "portfolio-c7de6",
  storageBucket: "portfolio-c7de6.appspot.com",
  messagingSenderId: "669678468106",
  appId: "1:669678468106:web:f336bb650f7d52f838f3f3",
  measurementId: "G-87N793K499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);