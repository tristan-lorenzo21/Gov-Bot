
// This command gets the channel info.
const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
  name: '!ChannelDetail', 
  description: 'GET Channel information',
  async execute(msg, args) {
    try {
      let channelId = msg.channel.id;
      let channelDetail = await axios.get(`https://discord.com/api/channels/${channelId}`, {
        headers: {
          Authorization: 'Bot ' + process.env.DISCORD_TOKEN
        }
      });
      console.log(channelDetail.data);
      const { id, last_message_id, name} = channelDetail.data;
      let embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
          .setTitle('Channel Info')
          .addFields(
            { name: 'Channel id: ', value: id, inline: true },
            { name: 'Last Message id: ', value: last_message_id },
            { name: 'Channel Name: ', value: name }
          )
      msg.channel.send(embed);
    } catch (error) {
      console.log(error);
    }    
  }
}