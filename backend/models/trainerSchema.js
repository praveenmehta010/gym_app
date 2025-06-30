const mongoose = require('mongoose');

const { Schema } = mongoose;

const trainerDetails = new Schema({
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tName : {type:String, required:true},
    tImage: { type: String, required: true },
    tContact: {
        phone: String,
        insta: String,
    },
    tRating: { type: String },
    tBio: String,
    tExpertise: String,
})

module.exports = mongoose.model("TrainerDetails", trainerDetails)


/* Body 
{
    "tImage": "Trainer image URL",
    "tContact": {
        "phoneNumber": "1234567",
        "insta": "Trainer insta URL"
    },
    "tRating": "5 Star",
    "tBio": "I an a good trainer",
    "tExpertise": "me body ko boodie bol sakta hu 🤣😂"
}
*/