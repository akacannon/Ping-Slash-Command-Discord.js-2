const { MessageEmbed } = require('discord.js')
module.exports = {
    info: {
        name: "ping"
    },

    run: async function(client, message, args){

 const ping = new MessageEmbed()
        .setColor('#fff')
        .setDescription(`${Math.round(client.ws.ping)}ms`)
 message.reply({
   embeds:[ping]
 })
 }
}
