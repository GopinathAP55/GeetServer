const mongoose = require('mongoose');
const passport = require('passport');
const UserDetails = mongoose.model('userDetails');
const _ = require('lodash');
//Implemenation of the register funstion and exporting it.
module.exports.register = (req,res,next)=>{
    console.log('insert user')
    var newUser = new UserDetails();
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.phoneNumber = req.body.phoneNumber;
    newUser.password = req.body.password;
    newUser.geetValue = req.body.geetValue;
    console.log(req.body);
    newUser.save((err , doc)=>{
        console.log('inside insert fn');
        if(!err){
            return res.status(200).json({"message":'Make way for'+ req.body.username})  ;     
        }else{
            console.log(err);
            return res.status(400).json({"message":'MONGO thinks the EMAIL ID already exists'});
        }
    }); 
}
//Implemenation of the login function and exporting it.

module.exports.login = (req,res, next)=>{
    console.log(req);
    console.log('inside login fn');
     UserDetails.findOne({_id:req._id}, function(err, UserDetails) {
        if (!UserDetails) {
            res.status(404).json({status:false,message:'sorry no user..'});
        }else{
            res.status(200).json({status:false,UserDetails : _.pick(UserDetails,['username','email'])});
        }
      });  
}

module.exports.authenticate = (req,res,next)=>{
    console.log('authenticate error');
    passport.authenticate('local',(err,userDetails,info)=>{
        console.log('authenticate');
        if(err){
            return res.status(400).json(err);
        }else if (userDetails){
            return res.status(200).json({"token": userDetails.generateJwt()});
        }else{
            return res.status(404).json(info);
        }
    }) (req,res);
}


module.exports.allGeet = (req,res,next)=>{
    console.log('inside all geet');
    return res.status(404).json(info);
}

module.exports.geet = (req,res,next)=>{
    console.log('inside geet');
    console.log(req.body.geetBox);
    console.log(req);

}