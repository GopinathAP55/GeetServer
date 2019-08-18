const express = require('express');

const router = express.Router();
var userDetailscontroller = require('../controller/userDetails.controller');
router.post('/register',userDetailscontroller.register);

router.get('/login',userDetailscontroller.login);

module.exports = router;