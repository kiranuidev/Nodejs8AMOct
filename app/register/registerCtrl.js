
var userDetailModel = "./register.model";
var registerCtrl ={};

registerCtrl.get=function(req,res){
        //res.send("<h1>Hello Register</h1>");
        res.render("register");
    };

    registerCtrl.post=function(req,res){
        console.log(req.body);
        var user = new userDetailModel(req.body);
        user.save(function(err,data){
            if(er){
                res.send("error occurred");
            }
            res.send(data);
        })
       // res.send("<h1>Form posted successfully<h1>");
    };


module.exports=registerCtrl;