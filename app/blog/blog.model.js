var mongoose = require("mongoose");

var blogSchema = mongoose.Schema({
  blogContent:{type:String,require:true},
  createdDate:{type:Date,default: Date.now}
});

mongoose.model("blog",blogSchema);