/*  authentication.route.component.jsx */


import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';

const Auth = () => {

	const logGoogleUser = async() => {
		const response = await signInWithGooglePopup();
		console.log(response)
		const userDocRef = await createUserDocumentFromAuth(response.user)
	};


	return(
		<div>
			<h1>Lets sign in </h1>
			<button onClick={logGoogleUser}>SignIn with Google Pop</button>
			< SignUpForm />
		</div>
	);
};

export default Auth