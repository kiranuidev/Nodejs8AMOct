var productCtrl = require("./productCtrl.js");
function productRoute (app){
    app.get("/products",productCtrl.get);
    app.post("/api/search",productCtrl.search)
}
module.exports= productRoute;