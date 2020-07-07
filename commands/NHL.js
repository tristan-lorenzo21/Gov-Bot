const axios = require('axios');

module.exports = {
  name: '!NHL', 
  description: 'NHL API calls',
  async execute(msg, args) {
    try {
      console.log(msg.content);
      let NHLData = await axios.get("https://statsapi.web.nhl.com/api/v1/teams")
      // console.log(NHLData.data.teams);

    } catch (error) {
      console.log(error)
    }
  }
}
