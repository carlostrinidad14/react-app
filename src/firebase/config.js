// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkTvbQbIi12EYJQiZRkLUuGMRNiPPZygA",
  authDomain: "react-app-15cd8.firebaseapp.com",
  projectId: "react-app-15cd8",
  storageBucket: "react-app-15cd8.appspot.com",
  messagingSenderId: "102252484234",
  appId: "1:102252484234:web:f52c30532ef3c422f4bf73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
/* export const provider = new GoogleAuthProvider() */
