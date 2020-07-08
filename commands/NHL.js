const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
  name: '!NHL', 
  description: 'NHL API calls',
  async execute(msg, args) {
    try {
      let entry = msg.content.split(' ');
      let command = entry.shift();
      let value = entry.toString().toLowerCase();
      // console.log(value);
      
      // console.log(msg.content);
      let NHLData = await axios.get("https://statsapi.web.nhl.com/api/v1/teams")
      // console.log(NHLData.data.teams);
      let searchData = NHLData.data.teams.filter((team) => team.teamName.toLowerCase() === value)

      const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(searchData[0].name)
        .setURL(searchData[0].officialSiteUrl)
        .addFields(
          { name: 'City:', value: searchData[0].venue.city },
          { name: 'Stadium:', value: searchData[0].venue.name },
          { name: 'Division:', value: searchData[0].division.name },
        );

      msg.channel.send(exampleEmbed);

      console.log(searchData);
    } catch (error) {
      console.log(error)
    }
  }
}
