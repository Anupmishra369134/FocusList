// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZs6M4ethalVT37aWMUf_-QJNY3gz2Dj0",
  authDomain: "focuslist-6290a.firebaseapp.com",
  projectId: "focuslist-6290a",
  storageBucket: "focuslist-6290a.firebasestorage.app",
  messagingSenderId: "56070851354",
  appId: "1:56070851354:web:1c7fc21197dc56de383aa3",
  measurementId: "G-LB4LKEDV70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;