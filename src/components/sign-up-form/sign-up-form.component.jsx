/* sign-up-form.component.jsx */

import { useState, } from 'react';
import { 
    createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils.js';

import FormInput from '../form-input/form-input.component.jsx';
import Button from '../button/button.component.jsx';

import './sign-up-form.styles.scss';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	comfirmPassword: '',
};

const SignUpForm = () => {

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, comfirmPassword} = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	}

	const handleSubmit = async( event ) => {
		event.preventDefault();

		if (password !== comfirmPassword) {
			alert("Passwords do not match");
			return;
		}
		//error Firebase: Password should be at least 6 characters (auth/weak-password).

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);

			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();


		} catch(error) {
			if (error.code === 'auth/email-already-in-use') {
				alert("Email already exists. New user not created");
			}
			else {
				console.log("user creation encountered an error", error);
			}
		}
	}

	const handleChange = (event) => {
		const {name, value} = event.target;
		setFormFields({...formFields, [name]: value});
	};

	return(
		<div className='sign-up-container'>
			<h2>Don't have an account?</h2>
			<span>Sign Up with your email & password</span>
			<form onSubmit = { handleSubmit }>
				<FormInput
					label="Display Name"
					type = "text" required onChange = {handleChange} name = "displayName" value = {displayName}/>

				<FormInput
					label = "Email"
					type = "email" required onChange = {handleChange} name = "email" value = {email}/>

				<FormInput
					label = "Password"
					type = "password" required onChange = {handleChange} name = "password" value = {password}/>

				<FormInput
					label = "Confirm Password"
					type = "password" required onChange = {handleChange} name = "comfirmPassword" value = {comfirmPassword}/>

				<Button type = "submit">Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;