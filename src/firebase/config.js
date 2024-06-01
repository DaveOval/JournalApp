// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1toqAJii3RcjrWTOvjJ4_rU0NjegHfDo",
  authDomain: "react-cursos-44cbd.firebaseapp.com",
  projectId: "react-cursos-44cbd",
  storageBucket: "react-cursos-44cbd.appspot.com",
  messagingSenderId: "881137235838",
  appId: "1:881137235838:web:5058774726007c8a29652f"
};

// Initialize Firebase
export const Firebaseapp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( Firebaseapp );
export const FirebaseDB = getFirestore( Firebaseapp );
