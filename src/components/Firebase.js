import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhrtdZzKGqczciffkLtvA1UlBidcHHeHk",
  authDomain: "linkedin-46181.firebaseapp.com",
  projectId: "linkedin-46181",
  storageBucket: "linkedin-46181.appspot.com",
  messagingSenderId: "1023286960794",
  appId: "1:1023286960794:web:1177f2108d88f3d002b523",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();

// db
export default getFirestore(firebaseApp);
