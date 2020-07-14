const axios = require('axios');
const Discord = require('discord.js');


   module.exports = {
    name: '!meme', 
    description: 'Gets memes',
    async execute(msg, args) {
      try {
        let data = await axios.get(`https://api.imgflip.com/get_memes`)
        let memes = data.data.data.memes;
        let randomNumber = Math.floor(Math.random() * memes.length)
        let randomMeme = memes[randomNumber]
        let url = randomMeme.url
        let memeName = randomMeme.name

        // const meme = new Discord.MessageEmbed()
        //   .setColor('#0099ff')
        //   .setTitle('Meme of the Day')
        //   .setURL(url)
        //   .addFields(
        //     { name: 'Meme: ', value: memeName, inline: true }
        //   )
        //   .setImage(url)

        // msg.channel.send(meme);

        const meme = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle('Meme of the Day')
          .setURL(url)
          .addFields(
            { name: 'Meme: ', value: memeName, inline: true }
          )
          .setImage(url)

        msg.channel.send(meme);
      }
      catch(error) {
        console.log(error)
      }
    }
  }