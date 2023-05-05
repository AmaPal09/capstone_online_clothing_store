/*  sign-in.route.component.jsx */

import { useEffect } from 'react';

import { getRedirectResult } from 'firebase/auth';

import {
	signInWithGooglePopup,
	signInWithGoogleRedirect,
	createUserDocumentFromAuth,
	auth,
} from '../../utils/firebase/firebase.utils.js';

const SignIn = () => {
	useEffect(() => { async function getResponse() {
		const response = await getRedirectResult(auth);
		if (response) {
			const userDocRef = await createUserDocumentFromAuth(response.user)
		}
	} getResponse();
	}, []);

	const logGoogleUser = async() => {
		const response = await signInWithGooglePopup();
		console.log(response)
		const userDocRef = await createUserDocumentFromAuth(response.user)
	};


	return(
		<div>
			<h1>Lets sign in </h1>
			<button onClick={logGoogleUser}>SignIn with Google Pop</button>
			<button onClick={signInWithGoogleRedirect}>SignIn with Google Redirect</button>
		</div>
	);
};

export default SignIn