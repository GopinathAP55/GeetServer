const mongoose  = require('mongoose');
require('./userdetails.model');
//mongoDB connection
mongoose.connect("mongodb://localhost:27017/Glitter",(err)=>{
    if(!err){console.log('Mongo Connected')}
    else{console.log('Mongo Not Connected'+JSON.stringify(err,undefined,2));}
});

