const { Schema, model } = require('mongoose');

const techSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  userdata: { //connect to user info
    type: String,
    required: true,
    unique: true,
  },
  devices: { //comouter roitners cellphones
    type: String,
    required: true,
    unique: true,
  },
  issues: { // hardware softawre
    type: String,
    required: true,
    unique: true,
  },
});

const Tech = model('Tech', techSchema);

module.exports = Tech;
