module.exports = {
    name: "rock paper scissors",
    description: "Plays rock paper scissors with you",
    execute(msg ,args, client){
        if(args.length != 1){
            msg.reply("too many or too few arguments");
            return;
        }
        let number = parseInt(args[0]);
        if(number != NaN){
            msg.reply("that's not a number");
            return;
        }
        if(number > 21){
            msg.reply("that's too many rounds");
            return;
        }
        msg.reply("Let's play best out of " + args[0] + "rounds").then(sentMsg =>{
            sentMsg.react("😄");
            setTimeout(countDown(3), 1000);
            sentMsg.clear()
            sentMsg.react("3️⃣");
            sentMsg.clear()
            sentMsg.react("2️⃣");
            sentMsg.clear()
            sentMsg.react("1️⃣");
            sentMsg.clear()
            move = Math.floor(Math.random() * 3)
            msg.channel.awaitMessages(m => m.author.id === msg.author.id, {

            })
            .then(msg => {

            });
        }
        
    }
}