import mongoose from 'mongoose';

// const connectDB = (url) => {
//   mongoose.set('strictQuery', true);
//   mongoose.connect(url, {
//     dbName: 'local',
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//     .then(() => console.log('connected to mongo'))
//     .catch((err) => {
//       console.error('failed to connect with mongo');
//       console.error(err);
//     });
// };
const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};
export default connectDB;


// To connect with your mongoDB database
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/', {
//     dbName: 'yourDB-name',
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, err => err ? console.log(err) :
//     console.log('Connected to yourDB-name database'));
