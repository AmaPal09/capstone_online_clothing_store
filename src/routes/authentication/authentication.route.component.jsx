/*  authentication.route.component.jsx */

import {
    AuthenticationContainer, 
} from  "./authentication.route.styles";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';
import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx';


//Auth route component
const Auth = () => {
	return(
		<AuthenticationContainer>
			< SignInForm />
			< SignUpForm />
		</AuthenticationContainer>
	);
};

export default Auth