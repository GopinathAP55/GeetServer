require('./config/config');
require('./models/db');
require('./config/passportConfig');
//Required frameworks for the task
 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 const passport = require('passport');

 var app = express();

 app.use(bodyParser.json());
 app.use(cors());


 const FastSpeedtest = require('fast-speedtest-api');
 
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
}).catch(e => {
    console.error(e.message);
});
 app.use(passport.initialize());
 const routerConst = require('./routes/index.route');
 app.use('/api',routerConst);
//My node is now listening to the port number 3000.
 app.listen(3000,() => console.log("server started..."))