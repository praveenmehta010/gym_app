const mongoose = require('mongoose');
const { Schema } = mongoose;

const gymAdmin = new Schema(
    {
        gymName : {type:String, required:true},
        gymLocation : {type:String, required:true},
        gymImage : {type:String, required:true},
        gymDescription :{type:String, required: true},
        gymContact:{
            insta:String,
            phoneNumber:String,
            email:String
        },
        gymTestimonial :{type:String},
        gymRating: { type: String},
    },
    {
        timestamps : true
    }
);

module.exports = mongoose.model('GymDetails', gymAdmin);

/* Gym Body
{
    "gymName" : "Praveen's Gym & Spa Center",
    "gymLocation" : "GK",
    "gymImage" : "Image Url here",
    "gymDescription" :"Best Gym",
    "gymContact":{
        "insta":"Insta URL",
        "phoneNumber":"1234567",
        "email":"gym@gmail.com"
    },
    "gymTestimonial" :"Testimonial of peoples here",
    "gymRating": "5 Star"
}
*/