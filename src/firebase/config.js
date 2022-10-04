// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCER5Ln4hNt9OcK-ZZVZnPpY-We3AZk5x8",
  authDomain: "e-commerce-uke.firebaseapp.com",
  projectId: "e-commerce-uke",
  storageBucket: "e-commerce-uke.appspot.com",
  messagingSenderId: "464668263142",
  appId: "1:464668263142:web:fd85301e3f8e6dd3a0b127",
  //measurementId: "G-KXWHLD2VTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app)