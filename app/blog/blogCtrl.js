var blogModel = require("mongoose").model("blog");

var blogCtrl={};
blogCtrl.get=function(req,res){
    blogModel.find(function(err,data){
        if(err){
            res.render("blog",{errorData:"Something went wrong"});
        }
        else{
            console.log(data);
          res.render("blog",{blogs:data,errorData:false,title:"Blog"});
        }
    })
 
};

blogCtrl.create = function(req,res){
res.render("createBlog");
};

blogCtrl.post= function(req,res,next){
console.log(req);
var blog = new blogModel(req.body);
blog.save(function(err,data){
    if(err){
        res.send("Error Occurred");
    }
    else{
       next()
    }
});



};
blogCtrl.update= function(req,res){
  //console.log(req.body);
  var id=req.body._id;
blogModel.find({_id:id}, 
function (err, data) {
  if (err) return "something went wrong";
  
  data.blogContent = req.body.blogContent;
  data.save(function (err, updated) {
    if (err) return "Something went wrong";
    res.send(updated);
  });
});


  
  
};

module.exports=blogCtrl;