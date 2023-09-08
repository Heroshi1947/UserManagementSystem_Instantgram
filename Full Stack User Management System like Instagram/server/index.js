require('dotenv').config(); 
const express = require('express'); 
const app = express(); 
// importing routes
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const cors = require("cors");
// importing db.js
const connection = require('./db')
connection;  //database connection triggered 

// middlewares
app.use(express.json())
app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);



const port = process.env.PORT || 8080;
 app.listen(port, () => console.log(`Server is Listening on port ${port}...`))