// firebase.utils.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, doc, getDoc, setDoc,} from "firebase/firestore"

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);


//Initialize FireStore
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	if (!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid)

	const userSnapShot = await getDoc(userDocRef);

	if (!userSnapShot.exists()) {
		const {displayName, email} = userAuth
		const createdAt = new Date();

		try{
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});

		} catch(error) {
			console.log('error creating user', error.message);
		}
	}

	return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
}

