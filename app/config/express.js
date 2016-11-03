var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

module.exports=function (){
var app = express();
console.log(__dirname);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//setup the view engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

//route registration.
require("../register/register.route.js")(app);
require("../products/products.route.js")(app);
require("../default/default.route.js")(app);
return app;
};
