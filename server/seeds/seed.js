const db = require('../config/connection');
const { Ticket } = require('../models');

const techData = require('./techData.json');

db.once('open', async () => {
  await Ticket.deleteMany({});

  const technologies = await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
