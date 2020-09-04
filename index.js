const dc = require('discord.js')
const client = new dc.Client()
const token = require('./token.json')
const config = require('./config.json')
const fs = require('fs')
const sqlite3 = require('sqlite3')

let user = new sqlite3.Database("./data/user.db",
function(err) {
    if(err) {
        console.error("database error", err.message)
    } else {
        console.log('database success')
    }
})

client.on('ready', () => {
    console.log(`已登錄${client.user.tag}`)
    console.log(`Running on Discord.JS ${dc.version}`)
})
//command listener
client.on('message', async message => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "test") {
        message.channel.bulkDelete(1)
        message.reply("YEEE")
        console.log(`Runned commind in ${message.channel.name}, By ${message.author.tag}`)
    }
    if(command === "addusr"){
        if(message.member.hasPermission('ADMINISTRATOR')) {

        }
    }
    message.channel.bulkDelete(1)
    if(command === "readdata") {
        if(message.member.hasPermission('ADMINISTRATOR')) {
            user.all("money" ,function(err, rows) {
                message.channel.send(rows)
            })
        }
    }
})

client.on('message', async message => {
    if(message.author.bot) return
})


client.login(token.token)