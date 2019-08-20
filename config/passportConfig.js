const passport = require('passport');
const passportLocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var userDetails = mongoose.model('userDetails');

passport.use(new passportLocalStrategy({usernameField : 'email'},
    (username,password,done)=>{
        console.log('inside find one');
        userDetails.findOne({email:username}, function(err, userDetails) {
            if (err) {
                return done(err);
            }else if(!userDetails){
                return done(null,false,{message:'You must remember your mail ID to login...'});
            }else if(!userDetails.verifyPassword(password)) {
                return done(null,false,{message:'Did you forgot your password...'})
            }else{
                return done(null,userDetails);
            }        
          });
    })
    );


