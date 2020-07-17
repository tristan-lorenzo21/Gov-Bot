const db = require('../../models/model');
const Discord = require('discord.js');
 
 module.exports = {
    name: '!CompleteTodo', 
    description: 'Finishes Todo from the Database',
    async execute(msg, args) {
      try {
        const todos = await db.find({userId: msg.member.user.id});
       
        let chosenTodo = todos[args - 1];

        let todoId = chosenTodo._id;

        await db.updateOne({ _id: todoId }, { $set: { completed: true } });
    } catch (error) {
      console.log(error)
    }
  }
 }