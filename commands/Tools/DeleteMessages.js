const Discord = require('discord.js');

const bot = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
const axios = require('axios');

module.exports = {
  name: '!DeleteMessages', 
  description: 'Delete channel messages',
  async execute(msg, args) {
    try {
      // console.log('MSG: ', msg);
      // console.log('==================================');
      // console.log('ARGS: ', args);
      let channelId = msg.channel.id;
      // console.log(channelId);
      // console.log(msg.channel);

      let messages = await axios.get(`https://discord.com/api/channels/${channelId}/messages`, {
        headers: {
          Authorization: 'Bot ' + process.env.DISCORD_TOKEN
        }
      });
      // console.log(messages);

      msg.channel.bulkDelete(messages.data)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
      
    } catch (error) {
      console.log(error);
    }
     
  }
    
}

