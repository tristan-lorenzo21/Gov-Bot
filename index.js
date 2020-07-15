const Discord = require('discord.js');
const bot = new Discord.Client();
require('./config/db');
require('dotenv').config({ path: './config.env' });
const TOKEN = process.env.DISCORD_TOKEN;
const API_KEY = process.env.WEATHER_API_KEY;

// DB connect
const connectDB = require('./config/db');
connectDB();

// COMMANDS
const botCommands = require('./commands')
const toolCommands = require('./commands/Tools/Commands.js');
bot.commands = new Discord.Collection();

let commandObj = { ...botCommands, ...toolCommands};
// console.log('TOOLS COMMANDS: ', commandObj);

Object.keys(commandObj).map(key => {
  bot.commands.set(commandObj[key].name, commandObj[key])
});

bot.login(TOKEN);
// Command prefix setup
const prefix = '!';

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`);
})

// When the user enters the channel
bot.on('guildMemberAdd', member => {
  const { username } = member.user;
  console.log(`User ${username} has joined the server!!`);
  console.log('MEMBER OBJECT: ', member.user);
  // Add a role to the new user 
  // let role = member.guild.roles.find('name', 'User);

  // member.add(role);
  
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

// ADD to DB
