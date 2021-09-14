module.exports = {
    name: "description",
    description: "HabuBOT\nIf you don't have friends, at least HabuBOT will be your friend.\nWrite <help> for help\nWrite <cmdlst> for the commands list",
    execute(msg, args, client){
        msg.reply(this.description);
    }
}