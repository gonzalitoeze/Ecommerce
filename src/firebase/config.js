import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCER5Ln4hNt9OcK-ZZVZnPpY-We3AZk5x8",
  authDomain: "e-commerce-uke.firebaseapp.com",
  projectId: "e-commerce-uke",
  storageBucket: "e-commerce-uke.appspot.com",
  messagingSenderId: "464668263142",
  appId: "1:464668263142:web:fd85301e3f8e6dd3a0b127",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)