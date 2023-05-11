const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, userName, _id }) {
    const payload = { email, userName, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};