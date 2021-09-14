const { Client, Intents } = require('discord.js');
const fs = require('fs')

const prefix = ";"

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.once('ready', () => {
	console.log('Ready!');
});

let token = fs.readFileSync("../token.txt", "utf-8");
client.login(token);
