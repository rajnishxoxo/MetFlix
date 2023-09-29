// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx2Xqip-kp-yN6IRYTWSJzv003Jsm6aY8",
  authDomain: "netflixclone-c6ac5.firebaseapp.com",
  projectId: "netflixclone-c6ac5",
  storageBucket: "netflixclone-c6ac5.appspot.com",
  messagingSenderId: "43238373912",
  appId: "1:43238373912:web:277d3abecfbeabe1c6216d",
  measurementId: "G-E2WTBBN712"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();