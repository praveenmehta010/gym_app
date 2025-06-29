const express = require('express');

const router = express.Router();
const {registerUser, loginUser, gymDetails, trainerDetails} = require('../controller/userController');
router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/gym_details',gymDetails)
router.post('/trainer_details', trainerDetails)

module.exports = router;