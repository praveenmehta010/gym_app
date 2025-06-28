const express = require('express');
// const http = require('http').Server(express);
const mongoose = require('mongoose');

const app = express();
const port = 3000;
mongoose.connect("mongodb+srv://PraveenMehta:12345As@gymappdb.lxqn5oy.mongodb.net/?retryWrites=true&w=majority&appName=gymAppDb");

// const User = require('./models/login');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, ()=>{
console.log(`Server is running on port ${port}`)
})


// http.listen(3000, function(){
//     console.log('Server is running ');
// });
 
// async function userDetails(name, email) {
//     await User.create({
//             name : name,
//             email : email

//     });
// }
// userDetails()
// userDetails("Praveen Mehta", "praveen@gmail.com")