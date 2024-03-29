/* sign-up-form.component.jsx */

import { useState, } from 'react';
import { useDispatch } from 'react-redux';

import { signUpStart } from '../../store/user/user.action.js'

import FormInput from '../form-input/form-input.component.jsx';
import Button from '../button/button.component.jsx';

import {
    SignUpContainer, 
} from './sign-up-form.styles';


const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	comfirmPassword: '',
};


//Sign up form directory
const SignUpForm = () => {

    const dispatch = useDispatch(); 

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

		try {
            dispatch(signUpStart(email, password, displayName)); 
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
		<SignUpContainer>
			<h2>Don't have an account?</h2>
			<span>Sign Up with your email & password</span>
			<form onSubmit = { handleSubmit }>
				<FormInput
					label="Display Name"
					type = "text" 
                    required 
                    onChange = {handleChange} 
                    name = "displayName" 
                    value = {displayName}/>

				<FormInput
					label = "Email"
					type = "email" 
                    required 
                    onChange = {handleChange} 
                    name = "email" 
                    value = {email}/>

				<FormInput
					label = "Password"
					type = "password" 
                    required 
                    onChange = {handleChange} 
                    name = "password" 
                    value = {password}/>

				<FormInput
					label = "Confirm Password"
					type = "password" 
                    required 
                    onChange = {handleChange} 
                    name = "comfirmPassword" 
                    value = {comfirmPassword}/>

				<Button type = "submit">Sign Up</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;