const dc = require('discord.js')
const client = new dc.Client()
const token = require('./token.json')
const config = require('./config.json')
const fs = require('fs')
const redis = require('redis')
const rediscli = redis.createClient()


client.on('ready', () => {
    console.log(`已登錄${client.user.tag}`)
    console.log(`Running on Discord.JS ${dc.version}`)
})
//command listener
client.on('message', async message => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "readdata") {
        user.each('SELECT rowid AS id info FROM money', function(err, row) {
            message.channel.send(row)
        })
    }
})

client.on('message', async message => {
    if(message.author.bot) return
})

rediscli.on('connect', () =>{ 
    console.log('Redis is ready')
})




client.login(token.token)