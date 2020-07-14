// This command gets the channel info.
const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
  name: '!KickUser', 
  description: 'Kicks User',
  async execute(msg, args) {
    try {
      if (!args[0]) {
        msg.channel.send('Please specify a user');
      }

      if (msg.member.hasPermission("KICK_MEMBERS")){
        console.log(args);
        let user = msg.mentions.users.first();
        let member = msg.guild.member(user);
        member.kick(['You have been kicked from this channel']);
        // console.log('GUILD USER', msg.guild.member(user).roles.cache);
        console.log(member);
      }

    } catch (error) {
      console.log(error);
    }
     
  }
    
}