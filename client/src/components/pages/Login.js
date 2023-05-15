import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';

import Auth from '../../utils/auth';

function Login(props) {
	const [formState, setFormState] = useState({ email: '', password: '' });
	const [login, { error, data }] = useMutation(LOGIN);
	const [isSubmitted, setisSubmitted] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	//form submission
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(formState);

		try {
			const { data } = await login({
				variables: { ...formState },
			});
			setisSubmitted(true)

			Auth.login(data.login.token);
		} catch (e) {
			console.error(e);
		}

		// clear form values
		setFormState({
			email: '',
			password: '',
		});
	};

	return (
		isSubmitted ? <p>
		Success! You may now head to the ticket submission form{' '}
		{/* <Link to="/#Ticket">to the ticket form.</Link> */}
	</p>: 
		
		<main className="flex-row justify-center mb-4">
			<div className="col-12 col-lg-10">
				<div className="card">
					<h4 className="card-header bg-dark text-light p-2">Login</h4>
					<div className="card-body">
					
						 
							<form onSubmit={handleFormSubmit}>
								<input
									className="form-input"
									placeholder="Your email"
									name="email"
									type="email"
									value={formState.email}
									onChange={handleChange}
								/>
								<input
									className="form-input"
									placeholder="******"
									name="password"
									type="password"
									value={formState.password}
									onChange={handleChange}
								/>
								<button
									className="btn btn-block btn-primary"
									style={{ cursor: 'pointer' }}
									type="submit"
								>
									Submit
								</button>
							</form>
						

						{error && (
							<div className="my-3 p-3 bg-danger text-white">
								{error.message}
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	);
}

export default Login;
