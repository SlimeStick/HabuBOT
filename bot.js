const Discord = require('discord.js');
const {token, prefix} = require('./config.json');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

//finding all of the commands
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

//adding commands to the bot
for(const file of commandFiles)
{
    const command = require(`./Commands/${file}`);
	
    client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', (msg) =>{
    //checking if the bot is in a guild(discord server) and if the message wasn't sent by a bot
    let guildName = msg.guild.name;
    if(!msg.author.bot && guildName != null)
    {
        //checks if the message is a command
        if(msg.content.startsWith(prefix))
        {
            //saves the arguments and the command itself in a variable
            let args = msg.content.slice(prefix.length).trim().split(' ');
            let command = args.shift().toLowerCase();
            if(client.commands.has(command))
            {
                try
                {
                    client.commands.get(command).execute(msg, args, client);
                }
                catch(error)
                {
                    console.error(error);
                    msg.reply(error);
                }
            }
            else
            {
                msg.reply("this command doesn't exist");
            }
        }
    }
});

client.login(token);