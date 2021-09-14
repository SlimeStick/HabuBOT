const { errorMonitor } = require("events");
const { off } = require("process");

module.exports = {
    name: "lyrics",
    description: "prints lyrics of a song",
    execute(message, args){
        const request = require("request-promise");
        const cheerio = require("cheerio");
        let lyrics = ""
        request( (args.join('+') + " youtube"), (error, respone, html) => {
            if(!error && respone.statusCode == 200){
                const $= cheerio.load(html);
                const list = $("span[jsname=YS01Ge]")
                list.each((idx, spn) => {
                    lyrics += $(spn).text()
                })
            }
        })
        message.reply(lyrics)
    }
}