const mongoose  = require('mongoose');
var productSchema = new mongoose.Schema({
    productName : {
        type :any      
    },
    productCategory :{
        type : Array
    }
});


mongoose.model('product',productSchema);
