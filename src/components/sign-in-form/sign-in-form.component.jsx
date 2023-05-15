/* sign-up-form.component.jsx */

import { useState, useContext } from 'react';

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmaiAndPassword,
} from '../../utils/firebase/firebase.utils.js';

import FormInput from '../form-input/form-input.component.jsx';
import Button from '../button/button.component.jsx';
import { UserContext } from '../../contexts/user.context.jsx';

import './sign-in-form.styles.scss';

const defaultFormFields = {
	email: '',
	password: '',
};


const SignInForm = () => {

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const { setCurrentUser } = useContext(UserContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	}

	const signInWithGoogle = async() => {
		const response = await signInWithGooglePopup();
		await createUserDocumentFromAuth(response.user)
	};

	const handleSubmit = async( event ) => {
		event.preventDefault();

		try {
			const response = await signInAuthUserWithEmaiAndPassword(email, password);
			setCurrentUser(response.user);
			resetFormFields();


		} catch(error) {
			switch(error.code) {
				case "auth/wrong-password":
					alert("incorrect password");
					break
				case "auth/user-not-found":
					alert("no user assosited with this email");
					break
				default:
					console.log(error);
			}
		}
	}

	const handleChange = (event) => {
		const {name, value} = event.target;
		setFormFields({...formFields, [name]: value});
	};

	return(
		<div className='sign-in-container'>
			<h2>Already  have an account?</h2>
			<span>Sign in with your email & password</span>
			<form onSubmit = { handleSubmit }>
				<FormInput
					label="Email"
					type="email"
					required
					onChange= {handleChange}
					name="email"
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>

				<div className="buttons-container">
					<Button type= "submit">Sign In</Button>
					<Button
						type="button"
						buttonType="google"
						onClick= { signInWithGoogle }
					>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;