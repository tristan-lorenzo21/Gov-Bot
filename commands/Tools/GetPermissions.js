// This command gets the channel info

const axios = require('axios');

module.exports = {
  name: '!GetPermissions', 
  description: 'Gets a users permissions',
  async execute(msg, args) {
    try {
      console.log('Getting guild user info.');
      // console.log(msg.guild);
      // console.log(Object.keys(msg.guild));
      // Get current user
      let person = msg.mentions.users.first();
      console.log(msg.channel.permissionsFor(person).toArray());
      // console.log(msg.member.user.flags);
    //  console.log(Object.keys(msg.member.roles.member._roles));
    //  console.log(msg.member.roles.member._roles);
    // msg.channel.permissionsFor()
      

      // Create a role with permissions
      // console.log('CURRENT GUILD ROLES');
      // console.log(msg.guild.roles.cache);
      // console.log('=================================');

      // msg.guild.roles.create({ data: { name: 'Mod', permissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS']}})
      
      // console.log('NEW GUILD ROLES');
      // console.log('=================================');
      // console.log(Object.keys(msg.guild.roles.cache.first().permissions));
      // console.log(msg.member.roles.cache.first());
      // console.log(msg.member.hasPermission('MANAGE_CHANNELS'));
      // if (!msg.member.hasPermission('MANAGE_CHANNELS')) {
      //   msg.channel.send('Sorry you dont have permission to create channels');
      // }
      // console.log('You have permission');
      // console.log(args);
      // if (!args[0]) {
      //   msg.channel.send('Please include the channel name afetr command');
      // }
      // console.log(args.slice(0).join(" "));
      // msg.guild.channels.create(args.slice(0).join(" "), {type: 'text'});
      // msg.channel.send('Channel successfully created!');

    } catch (error) {
      console.log(error);
    }
     
  }
    
}