const mongoose = require('mongoose');

const { Schema } = mongoose;

const trainerData = new Schema({
    tname: { type: String, required: true },
    tcontac: {
        phone: String,
        insta: String,
    },
    trating: { type: String },
    images: [String],
    bio: String,
    expertise: [String],
})