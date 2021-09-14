const { errorMonitor } = require("events");
const { off } = require("process");

module.exports = {
    name: "lyrics",
    description: "prints lyrics of a song",
    execute(message, args){
        const request = require("request-promise");
        const cheerio = require("cheerio");
        let lyrics = "kziza"
        request( ("https://www.google.com/search?q=" + args.join('+') + " youtube"), (error, respone, html) => {
            if(!error && respone.statusCode == 200){
                const $= cheerio.load(html);
                const list = $('span[jsname="YS01Ge"]')
                list.each((i, spn) => {
                    const item = $(spn).text()
                    console.log(item)
                })
            }
        })
        message.reply(lyrics)
    }
}