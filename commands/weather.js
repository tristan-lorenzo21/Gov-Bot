const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
  name: '!weather', 
  description: 'Weather calls for cities',
  async execute(msg, args) {
    try {
      const API_KEY = process.env.WEATHER_API_KEY;
      const args = msg.content.split(' ');
      const command = args.shift().toLowerCase();
      let cityName = args.join(" ").toLowerCase();

      let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
      let city = response.data.name;
      let temp = response.data.main.temp;
      let tempInF = Math.floor((((temp - 273.15) * 9) / 5) + 32);
      let desc = response.data.weather[0].description;

      const message = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`${city} Weather`)
      .addFields(
        { name: 'Temp:', value: `${tempInF} degrees` },
        { name: 'Description:', value: desc },
      );

    msg.channel.send(message);
    } catch (error) {
      console.log(error)
    }
  }
}