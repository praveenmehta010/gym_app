const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserDataModule = new Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    // phoneNumber : {type: String, required : true},
    password : {type : String, required : true},
    userType : { type: String, enum: ['admin', 'trainer', 'user'], required: true }
},{
    timestamps : true
});

module.exports = mongoose.model('userdata', UserDataModule);