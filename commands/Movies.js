const axios = require('axios');
const Discord = require('discord.js');

   module.exports = {
    name: '!Movies', 
    description: 'Gets movies',
    async execute(msg, args) {
      try {
        let search = args.slice(0).join(" ");

        let data = await axios.get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${search}`, {
          headers: {
            "x-rapidapi-key": "428f72a9f9msh71aa9e090b81f69p1b4d14jsnb8a4fa7e93d4"
          }
        })

        const {title, image} = data.data.titles[0];

        const movie = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle(title)
          .setImage(image)
          .setTimestamp()

        msg.channel.send(movie);
      }
      catch(error) {
        console.log(error)
      }
    }
  }