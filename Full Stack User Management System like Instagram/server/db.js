//const mongoose = require("mongoose");


// module.exports = () => { 
//   const connectionParams = {
//    useNewUrlParser: true, 
//    useUnifiedTopology: true,
//   //  host: 'localhost',
//   // port: 3000,
//   database: 'InstagramUserManagement',
//   };
//   try {
//     mongoose.connect(process.env.DB, connectionParams); 
//     console.log("Connected to database successfully")
//   } catch (error) {
//   console.log(error);
//   console.log("could not connect to database!");
//   }
// }

const mongoose = require('mongoose');

// Replace <username>, <password>, <cluster-url>, and <database-name> with your own values
const uri = 'mongodb://localhost:27017/pwSkillsAssignment';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });