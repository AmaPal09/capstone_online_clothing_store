/*  sign-in.route.component.jsx */

import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils.js';

const SignIn = () => {
	const logGoogleUser = async() => {
		const response = await signInWithGooglePopup();
		console.log(response);
	}

	return(
		<div>
			<h1>Lets sign in </h1>
			<button onClick={logGoogleUser}>SignIn</button>
		</div>
	);
};

export default SignIn