const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userDataModel = require('../models/userSchema');
const gymDataModel = require('../models/gymDetailsSchema')
const TrainerDetails = require('../models/trainerSchema')
const productDataModel = require('../models/productSchema')


// @desc Register the user
// @route POST api/user
// @access public
const registerUser = asyncHandler(async (req, res) => {
    // console.log(req.body)
    const { name, email, password, userType} = req.body;
    if (!name || !email || !password || !userType) {
        res.status(400);
        throw new Error("Registration Field are mandetory")
    }

    const emailAlreadyExist = await userDataModel.findOne({ email });
    if (emailAlreadyExist) {
        res.status(400);
        throw new Error("User email is already exist");
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    // console.log(hashedPassword);

    const user = await userDataModel.create({
        name,
        email,
        userType,
        password: hashedPassword
    })
    // console.log(`user created : ${user}`)

    if (user) {
        res.status(201).json({ "user id": user.id, "user email ": user.email })
    }
    else {
        res.status(400);
        throw new Error("User data not valid")
    }
});


// @desc Login the user
// @route POST api/user
// @access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("Loging Fields are mandetory");
    }

    const user = await userDataModel.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        const accessToken = jwt.sign(
            {
                user: {
                    userName: user.name,
                    userEmail: user.email,
                    id: user.id
                },
            },
            process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "10m"
        }
        );
        res.status(200).json({ AccessToken: accessToken, userType : user.userType });
    } else {
        res.status(401);
        throw new Error("Access denied")
    }

    // res.json({ message: 'Login the user' })

});

// @desc Saving Gym Details
// @route POST api/user
// @access public
const gymCreate = asyncHandler(async (req, res) => {
    const { gymName, gymLocation, gymImage, gymDescription, gymContact, gymTestimonial, gymRating } = req.body;
    if (!gymName || !gymLocation || !gymImage || !gymDescription || !gymContact || !gymTestimonial || !gymRating) {
        res.status(400);
        throw new Error("Gym Fields are mandetory");
    }
    // console.log(req.body)
    const gymDetails = await GymDetails.create({
        gymName,
        gymLocation,
        gymImage,
        gymDescription,
        gymContact,
        gymTestimonial,
        gymRating
    });
    if (gymDetails) {
        res.status(201).json({ "gym id": gymDetails.id, "Gym contact ": gymDetails.gymContact.phoneNumber })
    }
    else {
        res.status(400);
        throw new Error("Gym data not valid")
    }
})

// @desc Saving Trainer Details
// @route POST api/user
// @access public
const trainerDetails = asyncHandler(async(req, res)=>{
    // console.log(req.body)
    const {tName, tImage, tContact, tRating, tBio, tExpertise} = req.body;

    if (!tImage || !tRating || !tBio || !tExpertise){
        res.status(400);
        throw new Error("Trainer details field can not be empty");
    }

    const trainerDetails = await TrainerDetails.create({
        tName,
        tImage, 
        tContact, 
        tRating, 
        tBio, 
        tExpertise
    })

    if(trainerDetails){
        res.status(201).json({"Trainer details created with ID" : trainerDetails.id,})
    }
    else{
        res.status(400);
        throw new Error("Trainer Details saving Failed")
    }
});

// @desc Get Trainer Data from Database
// @route GET api/user
// @access public
const trainerList = asyncHandler(async(req, res)=>{
    const trainerDetailsForList = await TrainerDetails.find({},  "name specialization rating")
    if (trainerDetailsForList) {
        res.status(200).json(trainerDetailsForList);
    }else{
        res.status(404);
        throw new Error('Trainer data for list was not found')
    }
});

// @desc Get Gym Details List
// @route GET api/user
// @access public
const gymList = asyncHandler(async(req, res)=>{
    const gymDetailsForList = await gymDataModel.find({},  "Title Desc Rating image");
    if (gymDetailsForList) {
        res.status(200).json(gymDetailsForList);
    }else{
        res.status(404);
        throw new Error('Trainer data for list was not found')
    }
});


// @desc Get Products List
// @route GET api/
// @access public
const productsData = asyncHandler(async(req, res)=>{
    const productsDataList = await productDataModel.find({}, "id name price image category brand rating description");
    if(productsDataList){
        res.status(200).json(productsDataList)
    }else{
        res.status(404);
        throw new Error('Products data was not found')
    }
});
module.exports = { registerUser, loginUser, gymDetails: gymCreate, trainerDetails, trainerList, gymList, productsData}