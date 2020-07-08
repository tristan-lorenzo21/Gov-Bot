const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
  name: '!NBA', 
  description: 'NBA API calls',
  async execute(msg, args) {
    try {
        let entry= msg.content.split(" ");
        let command = entry.shift();
        let value = entry.toString().toLowerCase();
        let teams = await axios.get("http://data.nba.net/prod/v2/2019/teams.json");
        let nbaTeams = teams.data.league.standard;
        let filteredTeams = nbaTeams.filter((team) => team.isNBAFranchise === true);
        let chosenTeam = filteredTeams.filter((chosen) => chosen.nickname.toLowerCase() === value);
        let conference = chosenTeam[0].confName;
        let teamName = chosenTeam[0].fullName;

        const display = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle(teamName)
          .addFields(
            { name: 'Conference', value: conference, inline: true },
          )
          .setTimestamp()

        msg.channel.send(display);
    }
    catch (error) {
      console.log(error)
    }
  }
}






// EXAMPLE CODE

// module.exports = {
//   name: '!NBA', 
//   description: 'NBA API calls',
//   async execute(msg, args) {
//      msg.reply('Ping');
//      msg.channel.send('Ping')
//      var nbaData = await axios.get(`https://api.imgflip.com/get_memes`)
//      console.log(nbaData.data.data.memes);
//   }
    
// }
  

// execute((msg, args)) {
//   // msg.reply('Ping');
//   // msg.channel.send('Ping')
//   // console.log(args)
// }