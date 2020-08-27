const dc = require('discord.js')
const client = new dc.Client()
const token = require('./token.json')
const config = require('./config.json')

client.on('ready', () => {
    console.log(`已登錄${client.user.tag}`)
    console.log(`Running on Discord.JS ${dc.version}`)
})
//command listener
client.on('message', async => {
    if(message.author.bot) return
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
})

client.login(token.token)