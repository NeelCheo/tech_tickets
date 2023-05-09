const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true,
		trim: true,
		unique: true,
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
		unique: true,
	},
	phone: {
		type: String,
		required: true,
	},
	Admin: {
		type: Boolean,
	},
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
