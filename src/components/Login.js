import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../css/Login.css';
import {auth} from '../Firebase.js';

const Login = () => {

	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = e => {
		e.preventDefault();

		auth.signInWithEmailAndPassword(email,password)
			.then((auth) => {
				history.push('/');
			})
			.catch((e) => alert(e.message));
	}

	const register = e => {
		e.preventDefault();
		
		auth.createUserWithEmailAndPassword(email,password)
			.then((auth) => {
				history.push('/');
			})
			.catch((e) => alert(e.message));
	}

	return (
		<div className="login">
			<Link to="/">
				<img 
					className="login-logo"
					src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
					alt="amazon-logo"
				/>
			</Link>

			<div className="login-container">
				<h1>Sign In</h1>
				<form>
					<h5>E-mail</h5>
					<input 
						value={email} 
						type="email" 
						onChange={e => setEmail(e.target.value)}
					/>


					<h5>Password</h5>
					<input 
						value={password} 
						type="password" 
						onChange={e => setPassword(e.target.value)}
					/>
					<button 
						type="submit" 
						className="amazon_btn sign_btn"
						onClick={login}
					>
						Sign in
					</button>
				</form>
				<p>
					By SignIn, you agree to Amazon's Conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
				</p>
				<button 
					className="create_btn"
					onClick={register}
				>
					Create your Amazon Account
				</button>
			</div>
		</div>

	);
}

export default Login;