const mongoose = require('mongoose');

const signUpData = mongoose.Schema({
    UserName : String,
    Email : String,
    Password : String,
    UserType : String
})

module.exports = mongoose.model('SignUp', signUpData)