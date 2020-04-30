const express = require('express');

const router = express.Router();
var userDetailscontroller = require('../controller/userDetails.controller');
var jwtHelper = require('../config/jwtHelper');
//Post function for the registeration details.
router.post('/register',userDetailscontroller.register);

router.post('/geet',userDetailscontroller.geet);

//Login function 
router.get('/login',jwtHelper.verifyJwtToken,userDetailscontroller.login);

router.get('/allGeet',jwtHelper.verifyJwtToken,userDetailscontroller.allGeet);

//Exporting the router details using module.exports. This can be used in app.js
router.post('/authenticate',userDetailscontroller.authenticate);


//Appiness project





module.exports = router;