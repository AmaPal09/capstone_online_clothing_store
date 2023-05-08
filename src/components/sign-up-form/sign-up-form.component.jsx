/* sign-up-form.component.jsx */

import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	comfirmPassword: '',
};

const SignUpForm = () => {

	const [formFields, setFormFields] = useState(defaultFormFields);

	const { displayName, email, password, comfirmPassword} = formFields;


	const handleSubmit = async( event ) => {
		event.preventDefault();

		if (password !== comfirmPassword) {
			alert("Passwords do not match");
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);

			await createUserDocumentFromAuth(user, {displayName});

		} catch(error) {
			console.log("user creation encountered an error", error);
		}
	}

	const handleChange = (event) => {
		const {name, value} = event.target;
		setFormFields({...formFields, [name]: value});
	};

	return(
		<div>
			<h1>Sign Up with your email & password</h1>
			<form onSubmit = { handleSubmit }>
				<label>Display Name</label>
				<input type = "text" required onChange = {handleChange} name = "displayName" value = {displayName}/>

				<label>Email</label>
				<input  type = "email"required onChange = {handleChange} name = "email" value = {email}/>

				<label>Password</label>
				<input type = "password" required onChange = {handleChange} name = "password" value = {password}/>

				<label>Confirm Password</label>
				<input type = "password" required onChange = {handleChange} name = "comfirmPassword" value = {comfirmPassword}/>

				<button type = "submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpForm;