module.exports = {
  name: '!NBA', 
  description: 'NBA API calls',
  execute(msg, args) {
    msg.reply('Ping');
    msg.channel.send('Ping')
    console.log(args)
  }
}