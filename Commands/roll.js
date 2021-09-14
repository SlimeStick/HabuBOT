module.exports = {
    name: "roll",
    description: "rolls a number between the given range(inclusive)",
    execute(msg ,args, client){
        if(args != 2){
            msg.reply("too much arguments or too few");
            return;
        }
        let number1 = parseInt(args[0]);
        let number2 = parseInt(args[1]);
        if(number1 != NaN && number2 != NaN){
            msg.reply(Math.floor(Math.random() * (number1 - number2)) + number2);
        }
        else{
            msg.reply("error");
        }
    }
}