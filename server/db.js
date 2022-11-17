require('dotenv').config();
const mongoose = require('mongoose');
const { MONGODB_URI: url } = require('./utils/config');

const connectToDB = async () => {
  try {
    const con = await mongoose.connect(
      process.env.MONGODB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        // await mongoose.connect(url, {
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true,
        //   useCreateIndex: true,
        //   useFindAndModify: false,
      }
    );

    // console.log('Connected to MongoDB!');
    console.log(`MongoDB connected:${con.connection.host}`);
  } catch (error) {
    console.error(`Error while connecting to MongoDB: `, error.message);
  }
};

module.exports = connectToDB;

// const mongoose = require('mongoose');
// const mongoURI = 'mongodb://localhost:27017/reddish?directConnection=true';
// const connectToMongo = () => {
//   mongoose.connect(mongoURI, () => {
//     console.log('Connected to Mongo Successfully');
//   });
// };
// module.exports = connectToMongo;
