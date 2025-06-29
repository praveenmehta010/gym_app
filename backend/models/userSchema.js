const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    userName : {type : String, required : true},
    name : {type : String, required : true},
    emailId : {type : String, required : true},
    phoneNumber : {type: String, required : true},
    password : {type : String, required : true},
    userType : { type: String, enum: ['admin', 'trainer', 'user'], required: true }
},{
    timestamps : true
});

module.exports = mongoose.model('User', UserSchema);