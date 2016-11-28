
var request = require("request");
var config = require("../config/environment/development");
var _ = require("underscore");
var productCtrl ={};
console.log(config);
productCtrl.get=function(req,res){
        res.send("<h1>Hello Products</h1>");
    };

productCtrl.search=function(req,res){
var query = "&query=" + req.body.search;
 var url = config.wallMartUrl + query;
 request(url,function(err,response,body){
        if (!err && response.statusCode == 200) {
            var product = JSON.parse(body);
            var data = getFilteredData(product.items);
            res.send(data);

        } else {
            res.send(err);
        }
 })

 function getFilteredData(products) {
    var filteredOutput = [];
    //console.log(products);
    _.each(products, function (item) {

        var product = _.pick(item, 'salePrice',
            'shortDescription',
            "thumbnailImage",
            "name");
        filteredOutput.push(product);
    });
    return filteredOutput;
}
 //res.send(url);
}

module.exports=productCtrl;