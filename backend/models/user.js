const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    username : {type : String, required : true, unique: true},
    emailId : {type : String, required : true, unique : true},
    phoneNum : {type: int, required : true, unique : true},
    password : {type : String, required : true},
    userType : { type: String, enum: ['admin', 'trainer', 'user'], required: true }
});

module.exports = mongoose.model('User', UserSchema);