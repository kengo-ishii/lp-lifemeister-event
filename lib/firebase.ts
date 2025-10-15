// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2fa9_zJ6AAwZXndYqrA3ukY9WWR0ckoY",
  authDomain: "lp-lifemeister-event.firebaseapp.com",
  projectId: "lp-lifemeister-event",
  storageBucket: "lp-lifemeister-event.firebasestorage.app",
  messagingSenderId: "690798133821",
  appId: "1:690798133821:web:6e04cf9a2afc1934826054",
  measurementId: "G-BPZZMTVRCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only in browser environment
let analytics: any = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };
