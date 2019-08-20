const express = require('express');

const router = express.Router();
var userDetailscontroller = require('../controller/userDetails.controller');
var jwtHelper = require('../config/jwtHelper');
//Post function for the registeration details.
router.post('/register',userDetailscontroller.register);
//Login function 
router.get('/login',jwtHelper.verifyJwtToken,userDetailscontroller.login);
//Exporting the router details using module.exports. This can be used in app.js
router.post('/authenticate',userDetailscontroller.authenticate);
module.exports = router;