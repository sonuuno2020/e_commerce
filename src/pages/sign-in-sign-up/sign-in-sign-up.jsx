import React from 'react';
import SignIn from '../../components/sign in/sign in.component';
import SignUP from '../../components/sign-up/sign-up.component';

import "./sign-in-sign-up.scss";

const SignInSignUp=()=>(
	<div className="sign-in-sign-up">
		<SignIn />
		<SignUP />
	</div>
	)

export default SignInSignUp;