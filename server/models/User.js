const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tickets: {  //create a link to the ticket
    type: Number,
    default: 0,
  },
  email: {
    type: Number,
    default: 0,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
});

const Matchup = model('user', userSchema);

module.exports = Matchup;
