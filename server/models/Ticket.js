const { Schema, model } = require('mongoose');

const ticketSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	// userName:{ // who posted it
	//   type: String,
	//   required: true,
	// },
	adminId: {
		//who is working on it
		type: String,
	},
	devices: {
		//computer roitners cellphones
		type: String,
		required: true,
	},
	issues: {
		// hardware softawre
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
});

const Ticket = model('Ticket', ticketSchema);

module.exports = Ticket;
