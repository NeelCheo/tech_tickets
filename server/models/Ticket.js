const { Schema, model } = require('mongoose');

const ticketSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  userId:{ // who posted it 
    type: Number,
    required: true,
  },
  adminId:{ //who is working on it
    type: Number,
  },
  devices: { //computer roitners cellphones
    type: String,
    required: true,
  },
  issues: { // hardware softawre
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
