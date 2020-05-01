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

//to get the speed
router.get('/speed',function(req,res){

    const FastSpeedtest = require('fast-speedtest-api');
    console.log('sppe')
    let speedtest = new FastSpeedtest({
        token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
        verbose: false, // default: false
        timeout: 10000, // default: 5000
        https: true, // default: true
        urlCount: 5, // default: 5
        bufferSize: 8, // default: 8
        unit: FastSpeedtest.UNITS.Mbps// default: Bps
    });

    speedtest.getSpeed().then(s => {
        console.log(`Speed: ${s} Mbps`);
        res.send(`Speed: ${s} Mbps`)
        res.sendStatus(200)
    }).catch(e => {
        console.error(e.message);
    });

    console.log('final')
})




module.exports = router;