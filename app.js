require('./config/config');
require('./models/db');

 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');

 var app = express();

 app.use(bodyParser.json());
 app.use(cors());
 const routerConst = require('./routes/index.route');
 app.use('/api',routerConst);

 app.listen(3000,() => console.log("server started..."))