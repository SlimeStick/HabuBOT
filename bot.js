const { Client, Intents } = require('discord.js');
const fs = require('fs');
const { token, prefix } = require('config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);
