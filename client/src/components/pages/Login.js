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
		
		<div class="container">
      <div id="login ">
        <div class="text-center">
          <h1><u>Login</u></h1>
        </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form onSubmit={handleFormSubmit}>
            <div class="form-group">
              <label for="email" class="mb-2">
                <h4>Email Address:</h4>
              </label>
              <input
                type="email"
                class="form-control "
                name="email"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="password" class="mb-2">
                <h4>Password:</h4>
              </label>
              <input
                type="password"
                placeholder="******"
                class="form-control "
                name="password"
                onChange={handleChange}
              />
            </div>

            {error ? (
              <h5 class="pt-2 px-5">The provided credentials are incorrect</h5>
            ) : null}

            <div id="register-link" class="text-right mt-1">
              <Link to="/signup" class="text-white">
                SignUp Instead!
              </Link>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="btn btn-primary m-3 btn-lg"
                id="contactButton"
              >
                <h5>Submit</h5>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
	);
}

export default Login;
