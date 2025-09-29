const express = require('express');
const router = express.Router();
const {registerUser, loginUser, logoutUser, userProfile} = require('../controller/userController');
const {isLogged} = require("../middleware/isLogged");

//Route to register a new user
router.post('/register', registerUser);

//Route to login users
router.post('/login',loginUser);

//Route to logout users
router.post('/logout',logoutUser);

//Route to get a user
router.get("/profile", isLogged,userProfile);

module.exports = router;