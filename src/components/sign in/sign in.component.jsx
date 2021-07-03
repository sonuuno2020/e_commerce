import React from 'react';
import './sign in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
	constructor(props){
		super(props);

		this.state={
			email:"",
			password:""
		};

	}
	handleChange=event=>{
		const {name,value}=event.target;

		this.setState({[name]:value});
	};

	handleSubmit=event=>{
		event.preventDefault();

		this.setState({email:"",password:""});
	};

	

	render(){
		return (
			<div className="sign-in">
					<h2>I have already account</h2>
					<span>Use your email and password to sign in</span>
		
					<form onSubmit={this.handleSubmit}>
						<FormInput name="email" 
						label="email" 
						type="text" 
						handleChange={this.handleChange}
						value={this.state.email} 
						required />

						
						
		
						<FormInput name="password" 
						label="password" 
						type="password" 
						handleChange={this.handleChange}
						value={this.state.password} 
						required />
						
						<div className="button">
							<CustomButton type="submit">SignIn</CustomButton>
							<CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
							Signin With Google</CustomButton>
						</div>
						
					</form>
				</div>)
	}
}

export default SignIn;