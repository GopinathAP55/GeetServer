const mongoose  = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//MongoDb table scheme for the userdetails collection
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
    geetValue :{
        type : Array
    },
    saltSecret : String
});


//Salt script to encrypt the password for security reasons.
userDetailsSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash;
            this.saltSecret = salt;
            next();
        });
    });
});



userDetailsSchema.methods.verifyPassword = function(password){
    console.log('verify password');
    return bcrypt.compareSync(password,this.password);
}

userDetailsSchema.methods.generateJwt = function(){
    console.log('inside genereate jwt');
   return jwt.sign({_id : this._id},process.env.JWT_SECRET);
}

mongoose.model('userDetails',userDetailsSchema);

