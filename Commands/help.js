module.exports = {
    name: "help",
    description: "write: help <command>, the bot will write the description for the command",
    execute(msg, args, client){
        if(args.length == 0){
            msg.reply(this.description);
        } 
        else if(args.length == 1){
            if(client.commands.get(args[0]) != null)
                msg.reply(client.commands.get(args[0]).description);
            else
                msg.reply("there is no such command");
        } 
        else{
            msg.reply("you can't enter more than one command");
        }    
    }
}