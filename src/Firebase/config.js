// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5-JFBHlWJeKyhUdjiOO-tyMvtV1-grCQ",
  authDomain: "entrega-final-react-coderhouse.firebaseapp.com",
  projectId: "entrega-final-react-coderhouse",
  storageBucket: "entrega-final-react-coderhouse.appspot.com",
  messagingSenderId: "592202501684",
  appId: "1:592202501684:web:71e5e5ed0935429b1fc461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);