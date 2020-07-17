 const db = require('../../models/model');
 
module.exports = {
  name: '!AddTodo', 
  description: 'Add Todo to the Database',
  async execute(msg, args) {
    try {
      let formattedArgs = args.slice(0).join(" ");
      await db.create({
        userId: msg.member.user.id,
        todo: formattedArgs,
        userName: msg.member.user.username
      })
      // console.log(typeof(msg.member.user.id));
    } catch (error) {
    console.log(error)
    }
  }
}