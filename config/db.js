const mongoose = require('mongoose');

const connectDB = async () => {
  try {
  const conn = await mongoose.connect('mongodb+srv://todo:todoList@cluster0.lbovu.mongodb.net/Cluster0?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
  })

  console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}


module.exports = connectDB;

// mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.lbovu.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })