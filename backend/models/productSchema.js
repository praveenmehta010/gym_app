const mongoose = require('mongoose');
const { Schema } = mongoose;

const productDataModel = new Schema(
    {
        id : {type:String},
        name :{type:String, required: true},
        price : {type:String},
        image : {type:String},
        category : {type:String},
        brand :{type:String},
        description :{type:String},
        Rating: { type: String},
    },
    {
        timestamps : true
    }
);

module.exports = mongoose.model('productsdata', productDataModel);

/*
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