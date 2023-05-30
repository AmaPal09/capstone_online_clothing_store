// firebase.utils.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc, 
    collection,
    writeBatch, 
    query, 
    getDocs, 
} from "firebase/firestore"; 

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


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db); 

    objectsToAdd.forEach((object) => { 
        const docRef = doc(collectionRef, object.title.toLowerCase()); 
        batch.set(docRef, object); 
    });

    await batch.commit(); 
    console.log('done'); 
};


//get product categories from firebase
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories'); 
    const q = query(collectionRef); 

    const querySnapshot = await getDocs(q); 

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data(); 
        acc[title.toLowerCase()] = items; 
        return acc; 
    }, {}); 

    return categoryMap; 

}; 


export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
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
				...additionalInformation,
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
};


export const signInAuthUserWithEmaiAndPassword = async(email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};


export const signOutUser = async () => {
	return await signOut(auth);
};


export const onAuthStateChangedListener = (callback) => {
	return onAuthStateChanged(auth, callback);
};