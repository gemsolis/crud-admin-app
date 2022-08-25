
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcX0nVIpNrr4XYkGjonDTShCgCltgzdzw",
  authDomain: "crud-product-app.firebaseapp.com",
  projectId: "crud-product-app",
  storageBucket: "crud-product-app.appspot.com",
  messagingSenderId: "53408741967",
  appId: "1:53408741967:web:d6f9f0c23c1b04ab9c883a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);