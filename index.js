const Discord = require('discord.js');
const axios = require('axios');
require('dotenv').config({ path: './config.env' });
const bot = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
bot.commands = new Discord.Collection();
const botCommands = require('./commands')

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key])
});

const TOKEN = process.env.DISCORD_TOKEN;
const API_KEY = process.env.WEATHER_API_KEY;


bot.login(TOKEN);
// Command prefix setup
const prefix = '!';

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`);
})

// Weather Bot
bot.on('message', msg => {
  let entry = msg.content.toLowerCase();
  // console.log(entry);
  // console.log('Content', entry);

  if (msg.content === 'ping') {
    // msg.reply('pong'); This tags the initial user who sent message .
    msg.channel.send('pong'); // Sends a message to channel with tagging anyone.
  } else if (msg.content.startsWith(`${prefix}weather`)) {
    // const city = msg.content;
    // console.log(typeof(city));
    const args = msg.content.split(' ');
    // console.log(args);
    const command = args.shift().toLowerCase();
    let city_name = args.join(" ").toLowerCase();
    // console.log('Command: ', command);
    console.log(city_name)

    // API call
    // api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`)
      .then((response) => {
        console.log((response.data));
        let city = response.data.name
        let temp = response.data.main.temp
        let tempInF = Math.floor((((temp - 273.15) * 9) / 5) + 32);
        let desc = response.data.weather[0].description;
        msg.channel.send(`It is ${desc} with a temp of ${tempInF} in ${city}`);
      }).catch((error) => {
        console.log(error);
      })
  }
});

bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift();
  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});