
var mongoose = require('mongoose');
 var userDetailSchema =mongoose.Schema(
     {
         firstName:{type:String},
         lastName:{type:String}
     }
 );

 mongoose.model("userDetail",userDetailSchema);
     