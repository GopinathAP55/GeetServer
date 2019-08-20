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
 app.use(passport.initialize());
 const routerConst = require('./routes/index.route');
 app.use('/api',routerConst);
//My node is now listening to the port number 3000.
 app.listen(3000,() => console.log("server started..."))