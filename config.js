const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '244935469526'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'maxdavid126@gmail.com'
global.github = 'https://github.com/DENZO-UCHIWA/BLAST-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/alex_david/' // add your username
global.sudo = process.env.SUDO || "244958658955"
global.devs = '244958658955';
global.website = 'https://github.com/DENZO-UCHIWA/BLAST-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/ad50ea5a171d6647edaa7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUNIeGFPUzk2Ulc4T2w4ZGtqVzN4bjVBVHRvcWorcEdxWDUwVGRqaVMwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTVEZVdPb1QvY1VjWi9yOWdIdUNWMkg1a0NoYnVJTFp2cXFoam8rdzREZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTXdIbktadkM2TDc4Tjl0UXMxRVFBVkkybXpCZ2FwaDI4Q2oxRzcwUGtFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMU0JBZTBzNnBrOEN4UjJtZk8vazIyUE9NMU5Bc212RXg2dnJTekpZOFZJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlId3pncUJSQlI2QlFwc0dOMXBXQ1VsT01lVHhhN0UxRVc0Zm9CNlQvVVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9BZS8wa3pUZzNLQkVZMUNDcURZM01nSlFSRkpORGJKL2RzUHJSY0ZMeEk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWaGNmd3BPNGhZV0tqWjVaQU1DN0JsRWlnVEFub1hwK3NjQ1ZwK28vRWJ4VFhaNlQ5QnFpN2V2T2pKeXlGT2c0TVZSWW1GRllJZ1FpNzdrZ0NqaDBEdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE5MCwiYWR2U2VjcmV0S2V5IjoiQ2ZJT0RPTksybTRLMW8za3IwVVdNTWt6SnNuZnk0dU9mc3A2c0hsb1l3UT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieWhiWjV3Y1RROWl0ODlUTFB2N2V3QSIsInBob25lSWQiOiI4YTA4Y2I2OC05NTE1LTQ3MWItYTViNC04NjFhYWE4ZDZmMzQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZERBZEZDVm5OWTlKSkhscUlDeE4raEJpRnNJPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGTTIzdjJqZllTQ3BwMW5aZHU0UzRsR3p6MnM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMYTRrcUFERUwvLzVMY0dHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6WndTemcxZ082UlhYeHFIejFzMVJQRzhoOXJSeDdkVHFNanl0ckIwWDBrPSIsImFjY291bnRTaWduYXR1cmUiOiIzbkJaSTk0ZHlQQ1hUbUVXV25DR1pWSlQ3aFNWYWtZOENYZGEyc1ZFT2hVWkdKK29Hdjd0MzdlSzdsWU8rWHlhakpUY2E2ZjdoSWJQdk5rdFFNMFFDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOTBQK3hmVVM5L2tQZzFCSWh3eWhpOHVXSXkyOGJFL0dPSlJDdUF1RTYwaThsUXJhVjYyeW1pWDJpZjJIMEdPSTNta0xlVDM4WlFzaE53OGJVTlliQnc9PSJ9LCJtZSI6eyJpZCI6IjI0NDk1NjEwMDM0OToxMUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDQ5NTYxMDAzNDk6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYzJjRXM0TllEdWtWMThhaDg5Yk5VVHh2SWZhMGNlM1U2akk4cmF3ZEY5SiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzYxMDgxOH0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BLAST BOT',
  packname:  process.env.PACK_NAME || 'DENZO',
  
  botname:   process.env.BOT_NAME === undefined ? "BLAST-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DENZO' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '229' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "BLAST-MD BY DENZO UCHIWA",   //*"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
