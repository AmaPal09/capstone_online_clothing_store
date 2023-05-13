/*  authentication.route.component.jsx */

import "./authentication.route.styles.scss";

import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';
import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx';

const Auth = () => {
	return(
		<div className="authentication-container">
			< SignInForm />
			< SignUpForm />
		</div>
	);
};

export default Auth