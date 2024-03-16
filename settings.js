//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "Secret!!" //ur yt chanel name
global.socialm = "Secret!!" //ur github or insta name
global.location = "Earth, Indonesia" //ur location

//new
global.botname = 'CT - Bot' //ur bot name
global.ownernumber = '6283873407979' //ur owner number
global.ownername = 'Secret!!' //ur owner name
global.websitex = "https://127.0.0.1"
global.wagc = "https://127.0.0.1"
global.themeemoji = '💻'
global.wm = "CT - Bot"
global.botscript = 'https://127.0.0.1' //script link
global.packname = "Sticker By"
global.author = "CT - Bot\n\n+6283873407979"
global.creator = "6283873407979@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6283873407979"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '1' //set autoblock country code
global.antiforeignnumber = '1' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
