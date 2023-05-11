const db = require('../config/connection');
const { Ticket, User } = require('../models');

const ticketData = require('./ticketData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  await Ticket.deleteMany({});

  const tickets = await Ticket.insertMany(ticketData);

  console.log('Tickets seeded!');

  await User.deleteMany({});

  const users = await User.insertMany(userData);

  console.log('Users seeded!');
  process.exit(0);
});
