import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';
import "../styles/Submit.css"

const Signup = () => {
	const [formState, setFormState] = useState({
		name: '',
		userName: '',
		password: '',
		email: '',
		phone: '',
	});
	const [addUser, { error, data }] = useMutation(ADD_USER);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(formState);

		try {
			const { data } = await addUser({
				variables: { ...formState },
			});

			Auth.login(data.addUser.token);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		
		<div class="container">
				
				<div id="signUp">
				<div class="text-center">
				<h1><u>SignUp</u> </h1>
				</div>
					<div className="card-body">
						{data ? (
							<p>
								Success! You may now head to the ticket submission form{' '}
								{/* <Link to="/login">back to the homepage.</Link> */}
							</p>):(
						
							<div class="row justify-content-center text-center">
							<div class="col-md-6">
							
							<form onSubmit={handleFormSubmit}>
							<div class="form-group">
							<label for="name">
                
              </label>
			  </div>
			  <div class="form-group">
			  <label for="userName" class="mb-2">
                <h4>Name:</h4>
              </label>
				
             
								<input
									className="form-input"
									placeholder="Your Name"
									name="name"
									type="text"
									value={formState.name}
									onChange={handleChange}
								/>
								</div>
								<div class="form-group">
								<label for="userName" class="mb-2">
                <h4>Username:</h4>
              </label>
								<input
									className="form-input"
									placeholder="Your username"
									name="userName"
									type="text"
									value={formState.userName}
									onChange={handleChange}
								/>
								</div>
								<label for="userName" class="mb-2">
                <h4>Password:</h4>
              </label>
								<input
									className="form-input"
									placeholder="******"
									name="password"
									type="password"
									value={formState.password}
									onChange={handleChange}
								/>
								<div class="form-group">
								<label for="userName" class="mb-2">
                <h4>Email:</h4>
              </label>
								<input
									className="form-input"
									placeholder="Your email"
									name="email"
									type="email"
									value={formState.email}
									onChange={handleChange}
								/>
								</div>
								<div class="form-group">
								<label for="userName" class="mb-2">
                <h4>Phone:</h4>
              </label>
								<input
									className="form-input"
									placeholder="Phone Number"
									name="phone"
									type="text"
									value={formState.phone}
									onChange={handleChange}
								/>
</div>
								<button
									className="btn btn-block btn-primary"
									style={{ cursor: 'pointer' }}
									type="submit"
								>
									Submit
								</button>
								
							</form>
							<div id="register-link" class="">
              <Link to="/Login" class="text-white">
                Login Instead!
              </Link>
            </div>
							</div>
							</div>
						)}

						{error && (
							<div className="my-3 p-3 bg-danger text-white">
								{error.message}
							</div>
						)}
					</div>
				</div>
			</div>
		
	);
};

export default Signup;


