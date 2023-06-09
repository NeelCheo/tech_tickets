const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID!
		name: String!
		userName: String!
		password: String!
		tickets: [Ticket]
		email: String!
		phone: String!
		Admin: Boolean
	}

	type Ticket {
		_id: ID!
		title: String
		userName: String
		adminId: String
		devices: String
		issues: String
		status: String
	}
	type Auth {
		token: ID!
		user: User
	}

	type Query {
		users: [User]
		user(userName: String!): User
		tickets: [Ticket]
		ticket(_id: ID!): Ticket
	}

	type Mutation {
		addUser(
			name: String!
			userName: String!
			password: String!
			email: String!
			phone: String!
		): Auth
		login(email: String!, password: String!): Auth
		addTicket(
			title: String!
			userName: String!
			adminId: String
			devices: String!
			issues: String!
			status: String
		): Ticket
		removeTicket(id: ID!): Ticket
	}
`;

module.exports = typeDefs;
