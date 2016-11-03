var registerCtrl = require("./registerCtrl.js");

function registerRoute (app){
    app.get("/register",registerCtrl.get);
    app.post("/register",registerCtrl.post);
}

module.exports= registerRoute;