
var port =4000;
var http = require("http");
var Time = require('time-diff');
var server =http.createServer(function(req,res){
    /*console.log(typeof req);
    console.log(typeof res);*/
   
var time = new Time();
 
// create a start time for `foo` 
time.start('foo');

for(var i=0;i<10000000000;i++){

}

 res.setHeader('Content-Type', 'text/plain');
    res.end("<h1>Hello World</h1>")
 
// call `end` wherever the `foo` process ends 
console.log(time.end('foo'));
   
   
});
server.listen(port);

console.log("Server listening on port"+port);