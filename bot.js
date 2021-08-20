const { Client, Intents } = require('discord.js');
const {fs} = require('fs');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

let token = fs.readFile("../token.txt");
client.login(token);