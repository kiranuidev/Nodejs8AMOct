var userDetailModel = require('mongoose').model('userDetail');
var registerCtrl ={};

registerCtrl.get=function(req,res){
        //res.send("<h1>Hello Register</h1>");
        res.render("register");
    };

    registerCtrl.post=function(req,res){
        console.log(req.body);
        var user = new userDetailModel(req.body);
        user.save({firstName:1,lastName:0},function(err,data){
            if(err){
                console.log(err);
                res.send(err);
            }
            res.send(data);
        });
       // res.send("<h1>Form posted successfully<h1>");
    };


module.exports=registerCtrl;