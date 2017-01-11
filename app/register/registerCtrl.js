var userDetailModel = require('mongoose').model('userDetail');
var registerCtrl = {};
var crypto = require('crypto');

registerCtrl.get = function(req, res) {
    //res.send("<h1>Hello Register</h1>");
    if (req.session.authenticated) {
        console.log("user authenticated");
    } else {
        console.log("User didnot authenticated");
    }
    res.render("register");
};

registerCtrl.post = function(req, res) {
    console.log(req.body);
    var user = new userDetailModel(req.body);
    user.save(function(err, data) {
        if (err) {
            console.log("eror");
            res.json({ result: false });
        }
        console.log("abcd");
        res.json({ result: true });
    })


    // // userDetailModel.find({ userName: req.body.userName },
    // function(err, data) {
    //     if (err) {
    //         res.send("error occureed");
    //     }
    //     console.log(data);
    //     if (data.length == 0) {
    //         console.log("YYYY")
    //         user.save(function(err, data) {
    //             if (err) {
    //                 console.log(err);
    //                 res.send(err);
    //             }
    //             res.json({ data: data });
    //         });
    //     } else {
    //         console.log("xxx");
    //         res.json({ data: "Username exists" });
    //     }
    // });


};

registerCtrl.login = function(req, res) {
    res.render("login");
};
registerCtrl.authenticate = function(req, res) {
    console.log(req.body);
    userDetailModel.findOne({ userName: req.body.userName },
        function(err, data) {
            if (err) {
                res.send("error occureed");
            }
            if (!data) {
                res.send("user doesnot exist");
            } else {
                if (data.password == getEncryptedPassword(req.body.password)) {
                    console.log(req.session);
                    req.session.authenticated.status = true;
                    //console.log(req.session);
                    //res.send("User Authenticated");
                    res.render("default");
                } else {
                    res.send("Pasword mismatch");
                }
            }
        });
};

function getEncryptedPassword(password) {
    var md5 = crypto.createHash('md5');
    password = md5.update(password).digest('hex');

    return password;
}
module.exports = registerCtrl;