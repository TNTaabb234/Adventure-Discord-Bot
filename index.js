const dc = require('discord.js')
const client = new dc.Client()
const token = require('./token.json')
const config = require('./config.json')
const fs = require('fs')

client.on('ready', () => {
    console.log(`已登錄${client.user.tag}`)
    console.log(`Running on Discord.JS ${dc.version}`)
})
//command listener
client.on('message', async message => {
    if(message.author.bot) return
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "test") {
        message.channel.bulkDelete(1)
        message.reply("YEEE")
        console.log(`Runned commind in ${message.guild}`)
    }


})

client.login(token.token)