var defaultCtrl={};

defaultCtrl.get =function(req,res){
    //res.send("<h1>Welcome</h1>")
    res.render("default");
};

module.exports=defaultCtrl;