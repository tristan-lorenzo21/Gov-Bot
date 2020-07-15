 const db = require('../models/model');
 const Discord = require('discord.js');
 
 module.exports = {
    name: '!GetTodos', 
    description: 'Get Todo from the Database',
    async execute(msg, args) {
      try {
        const todos = await db.find({userId: msg.member.user.id});
        // console.log(todos);
        let tempArray = [];
        let userName = msg.member.user.username;

        for (let i = 0; i < todos.length; i++) {
          tempArray.push(todos[i].todo)
        }
        
        let todoCard = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle(`Todo List for ${userName}`)
        tempArray.forEach((todo, index) =>{
          todoCard.addField(`Todo ${index + 1}`, todo);
        })

        msg.channel.send(todoCard)
    } catch (error) {
      console.log(error)
    }
  }
 }