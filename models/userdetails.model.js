const mongoose  = require('mongoose');
const bcrypt = require('bcrypt');

var userDetailsSchema = new mongoose.Schema({
    username : {
        type :String
        
    },
    email : {
        type: String,
        unique :true
    },
    phoneNumber : {
        type : String
       
    },
    password : {
        type : String
    },
    saltSecret : String
});



userDetailsSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash;
            this.saltSecret = salt;
            next();
        });
    });
});

mongoose.model('userDetails',userDetailsSchema);