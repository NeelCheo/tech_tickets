const { Ticket, User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
	Query: {
		users: async () => {
			return User.find().populate('tickets');
		},
		user: async (parent, { userName }) => {
			return User.findOne({ userName }).populate('tickets');
		},
		// tickets: async (parent, { userName }) => {
		// 	const params = userName ? { userName } : {};
		// 	return Ticket.find(params);
		// },
		tickets: async () => {
			return Ticket.find();
			
		}
		// ticket: async (parent, { ticketId }) => {
		//   return Ticket.findOne({ _id: ticketId });
		// },
	},
	Mutation: {
		addUser: async (parent, { name, userName, password, email, phone }) => {
			// First we create the user
			const user = await User.create({
				userName,
				email,
				password,
				name,
				phone,
			});
			// To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
			const token = signToken(user);
			// Return an `Auth` object that consists of the signed token and user's information
			return { token, user };
		},
		login: async (parent, { email, password }) => {
			// Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
			const user = await User.findOne({ email });

			// If there is no user with that email address, return an Authentication error stating so
			if (!user) {
				throw new AuthenticationError('No user found with this user name');
			}

			// If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
			const correctPw = await user.isCorrectPassword(password);

			// If the password is incorrect, return an Authentication error stating so
			if (!correctPw) {
				throw new AuthenticationError('Incorrect credentials');
			}

			// If email and password are correct, sign user into the application with a JWT
			const token = signToken(user);

			// Return an `Auth` object that consists of the signed token and user's information
			return { token, user };
		},
		addTicket: async (
			parent,
			{ title, userName, adminId, devices, issues, status }
		) => {
			// First we create the user
			// To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
			console.log("hello")
			// Return an `Auth` object that consists of the signed token and user's informatio

			const ticket = await Ticket.create({
				title,
				userName,
				adminId,
				devices,
				issues,
				status,
			});

			await User.findOneAndUpdate(
				{ userName: userName },
				{ $addToSet: { tickets: ticket._id } }
			);

			return ticket;
		},
		removeTicket: async (parent, { id }) => {
			return Ticket.findOneAndDelete({
				_id: id,
			});
		},
	},
};

module.exports = resolvers;
