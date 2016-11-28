

var fs = require("fs");

// fs.readFile("demo.txt",function(err,data){
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// fs.writeFile("demo.txt","Hello I am good",function(err,data){
//        if(err){
//         console.log(err);
//     }
    
// })

fs.appendFile("demo.txt","\n hey I am too",function(err,data){
    if(err){
        console.log(err);
    }
})