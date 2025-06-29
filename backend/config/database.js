const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dBConnection = mongoose.connect(process.env.CONNECTION_STRING);

dBConnection.then(()=>{
    console.log("Connected to database")
}).catch(()=>{
    console.log("Connection failed")
})

module.exports = dBConnection;