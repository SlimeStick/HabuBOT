// require the needed discord.js classes
const { Client, Intents } = require('discord.js');
const { fs } = require('fs');

// create a new Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
fs.readFile("./../token.txt", function(err, token){
    console.log(token);
	client.login(token);
});

