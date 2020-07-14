// This command gets the channel info.
const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
  name: '!CreateChannel', 
  description: 'Creates a new Channel',
  async execute(msg, args) {
    try {
      console.log('Creating Channel');
      // console.log(msg.member.hasPermission('MANAGE_CHANNELS'));
      if (!msg.member.hasPermission('MANAGE_CHANNELS')) {
        msg.channel.send('Sorry you dont have permission to create channels');
      } else {
        console.log('You have permission');
        console.log(args);
        if (!args[0]) {
          msg.channel.send('Please include the channel name afetr command');
      }
        console.log(args.slice(0).join(" "));
        msg.guild.channels.create(args.slice(0).join(" "), {type: 'text'});
        msg.channel.send('Channel successfully created!');        
      }
     
    } catch (error) {
      console.log(error);
    }
     
  }
    
}