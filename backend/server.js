const express = require('express');
const dotenv = require('dotenv').config();
const connection = require('./config/database')
const cors = require("cors");


const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(cors());

app.use('/api/users', require('./routes/userRouter'));


app.listen(port, ()=>{
console.log(`Server is running on port ${port}`)
})