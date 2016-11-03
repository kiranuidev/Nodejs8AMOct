

var registerCtrl ={};

registerCtrl.get=function(req,res){
        //res.send("<h1>Hello Register</h1>");
        res.render("register");
    };

    registerCtrl.post=function(req,res){
        console.log(req.body);
        res.send("<h1>Form posted successfully<h1>");
    };


module.exports=registerCtrl;