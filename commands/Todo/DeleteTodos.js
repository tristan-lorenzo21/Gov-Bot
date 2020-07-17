 const db = require('../../models/model');
 const Discord = require('discord.js');
 
 module.exports = {
    name: '!DeleteTodos', 
    description: 'Deletes Todos from the Database',
    async execute(msg, args) {
      try {
        const todos = await db.find({userId: msg.member.user.id});

        let tempArray = [];
        let userName = msg.member.user.username;
        // let filteredTodos = todos.filter((item) => item.completed === true)

        await db.deleteMany( {completed: true} );
        
        // let todoCard = new Discord.MessageEmbed()
        //   .setColor('#0099ff')
        //   .setTitle(`Todo List for ${userName}`)
        // filteredTodos.forEach((todo, index) =>{
        //   todoCard.addField(`Todo ${index + 1}`, todo.todo);
        // })

        // msg.channel.send(todoCard)
    } catch (error) {
      console.log(error)
    }
  }
 }