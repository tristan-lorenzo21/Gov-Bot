const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: String,
  todo: String,
  userName: String,
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

var Post = mongoose.model('posts', postSchema);

module.exports = Post;