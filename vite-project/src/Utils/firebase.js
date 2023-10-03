  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBditUKtd5UPCp_gFifbLENEWkNd3BPTz4",
  authDomain: "movieapp-a3102.firebaseapp.com",
  projectId: "movieapp-a3102",
  storageBucket: "movieapp-a3102.appspot.com",
  messagingSenderId: "944104800322",
  appId: "1:944104800322:web:0b3bbd1456fc0e425e6ddb",
  measurementId: "G-64J245L2N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();