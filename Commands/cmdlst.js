module.exports = {
    name: "cmdlst",
    description: "prints the list of all commands",
    execute(msg, args, client){
        var lst = "List of commands:\n";
        client.commands.forEach(command => {
            lst += command.name + "\n";
        });
        msg.reply(lst);
    }
}