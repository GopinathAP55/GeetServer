const mongoose = require('mongoose');

const UserDetails = mongoose.model('userDetails');

module.exports.register = (req,res,next)=>{
    console.log('insert user')
    var newUser = new UserDetails();
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.phoneNumber = req.body.phoneNumber;
    newUser.password = req.body.password;
    console.log(req.body);
    newUser.save((err , doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('error');
        }
    });
    
}

module.exports.login = (req,res)=>{
    console.log('inside login fn');
    UserDetails.find((err,docs)=>{
        if(!err){
            res.send(docs);
            console.log(res);
        }
    });
}