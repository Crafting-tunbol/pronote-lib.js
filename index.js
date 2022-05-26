require('dotenv').config('.env');

const Client = require('./Client');
const client = new Client(process.env.username, process.env.password);


client.loginEnt("moncollege-ent.essonne.fr");