const mongoose = require('mongoose')

const loginData = mongoose.Schema({
    email : String,
    password : String
});

module.exports = mongoose.model('Loging', loginData); 