const express = require('express');

const router = express.Router();
const {registerUser, loginUser, gymDetails, trainerDetails, trainerList, gymList} = require('../controller/userController');
router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/gym/create',gymDetails)
router.post('/trainer/create', trainerDetails)
router.get('/trainer/list', trainerList)
router.get('/gym/list', gymList)

module.exports = router;