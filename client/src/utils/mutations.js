import { gql } from '@apollo/client';

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				userName
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

export const ADD_TICKET = gql`
	mutation Mutation(
		$title: String!
		$userName: String!
		$devices: String!
		$issues: String!
		$adminId: String
		$status: String
	) {
		addTicket(
			title: $title
			userName: $userName
			devices: $devices
			issues: $issues
			adminId: $adminId
			status: $status
		) {
			userName
		}
	}
`;
