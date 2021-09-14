const { Client, Intents } = require('discord.js');
const fs = require('fs');
const { token, prefix } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	console.log("interaction");
	if (!message.content.startsWith(prefix)) return;

	const { commandName } = interaction;
	console.log(commandName);
});

client.login(token);
