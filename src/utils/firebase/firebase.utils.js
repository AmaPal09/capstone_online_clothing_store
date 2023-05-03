// firebase.utils.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOuUmhUDJABVfRoVOEkuOCScE3pEyVtdc",
  authDomain: "crown-clothing-capstone-db.firebaseapp.com",
  projectId: "crown-clothing-capstone-db",
  storageBucket: "crown-clothing-capstone-db.appspot.com",
  messagingSenderId: "1002184707548",
  appId: "1:1002184707548:web:c54b5bd46ce7af828e5319"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);