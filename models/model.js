const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: String,
  todo: String,
  userName: String
})

var Post = mongoose.model('posts', postSchema);

module.exports = Post;