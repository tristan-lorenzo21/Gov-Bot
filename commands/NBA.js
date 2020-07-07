const axios = require('axios');

module.exports = {
  name: '!NBA', 
  description: 'NBA API calls',
  async execute(msg, args) {
    try {
      let entry = msg.content.split(" ");
      let command = entry.shift();
      let value = entry.toString().toLowerCase();
      // let nbaData = await axios.get("http://data.nba.net/10s/prod/v1/today.json");
      let teams = await axios.get("http://data.nba.net/prod/v2/2019/teams.json");
      let nbaTeams = teams.data.league.standard;

      let filteredTeams = nbaTeams.filter((team) => team.isNBAFranchise === true);
      let chosenTeam = filteredTeams.filter((chosen) => chosen.nickname.toLowerCase() === value);

      //msg.reply(value);
      console.log(chosenTeam)
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