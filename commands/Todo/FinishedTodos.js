 const db = require('../../models/model');
 const Discord = require('discord.js');
 
 module.exports = {
    name: '!FinishedTodos', 
    description: 'Get Todo from the Database',
    async execute(msg, args) {
      try {
        const todos = await db.find({userId: msg.member.user.id});

        let userName = msg.member.user.username;
        let filteredTodos = todos.filter((item) => item.completed === true)

        if (filteredTodos.length == 0) {
          let todoCard = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle(`Finished Todo List for ${userName}`)
          .addField('Sorry!', 'You have no completed todos')
          
          msg.channel.send(todoCard)
        } else {
          let todoCard = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle(`Finished Todo List for ${userName}`)
          filteredTodos.forEach((todo, index) =>{
          todoCard.addField(`Todo ${index + 1}`, todo.todo);

          msg.channel.send(todoCard)
        })
        }
        // let todoCard = new Discord.MessageEmbed()
        //   .setColor('#0099ff')
        //   .setTitle(`Finished Todo List for ${userName}`)
        // filteredTodos.forEach((todo, index) =>{
        //   todoCard.addField(`Todo ${index + 1}`, todo.todo);
        // })
    } catch (error) {
      console.log(error)
    }
  }
 }