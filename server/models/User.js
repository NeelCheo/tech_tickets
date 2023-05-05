const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  tickets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ticket',
    },
  ],
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  phone: {
    type: String,
    required: true,
  },
  Admin: {
    type: Boolean,
    required: true,
  },
});

const User = model('User', userSchema);

module.exports = User;