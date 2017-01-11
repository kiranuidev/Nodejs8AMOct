var mongoose = require('mongoose');
var crypto = require('crypto');
var userDetailSchema = mongoose.Schema();

mongoose.model("userDetail", userDetailSchema);