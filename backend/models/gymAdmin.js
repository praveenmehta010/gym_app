const mongoose = require('mongoose');
const { Schema } = mongoose;

const gymAdmin = new Schema(
    {
        ownerName:{type:string,required:true},
        gymName : {type:String, required:true, unique:true},
        gymLocation : {type:String, required:true, unique:true},
        gymImage : {type:String, required:true},
        gymDescription :{type:String, required: true},
        gymContact:{
            insta:String,
            phoneNo:String,
            email:String
        },
        gymTestimonial :{type:string},
        gymRating: { type: Number, default: 0 },
    }
);

module.exports = mongoose.model('GymAdmin', gymAdmin);