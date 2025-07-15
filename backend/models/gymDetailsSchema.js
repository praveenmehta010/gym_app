const mongoose = require('mongoose');
const { Schema } = mongoose;

const gymDataModel = new Schema(
    {
        Title : {type:String, required:true},
        Desc :{type:String, required: true},
        Type : {type:String},
        BodyPart : {type:String},
        Equipment : {type:String},
        Level :{type:String},
        RatingDesc :{type:String},
        Rating: { type: String},
    },
    {
        timestamps : true
    }
);

module.exports = mongoose.model('gymdata', gymDataModel);






//   {
//         Title : {type:String, required:true},
//         // gymLocation : {type:String, required:true},
//         // gymImage : {type:String, required:true},
//         Desc :{type:String, required: true},
//         Type : {type:String},
//         BodyPart : {type:String},
//         Equipment : {type:String},
//         // gymContact:{
//         //     insta:String,
//         //     phoneNumber:String,
//         //     email:String
//         // },
//         Level :{type:String},
//         RatingDesc :{type:String},
//         Rating: { type: String},
//     },
//     {
//         timestamps : true
//     }
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