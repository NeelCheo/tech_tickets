import { gql } from '@apollo/client';

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser(
		$name: String!
		$userName: String!
		$password: String!
		$email: String!
		$phone: String!
	) {
		addUser(
			name: $name
			userName: $userName
			password: $password
			email: $email
			phone: $phone
		) {
			token
			user {
				_id
				userName
			}
		}
	}
`;
