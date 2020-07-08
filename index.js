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