var express = require("express");
var multer = require('multer');
var app = express();
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads');
    },
    filename: function(req, file, callback) {

        callback(null, file.originalname + '-' + Date.now());
    }
});
var upload = multer({ storage: storage }).single('userPhoto');
//app.use(app.static())
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/api/photo', function(req, res) {
    console.log("file uploading");
    //console.log(req);
    upload(req, res, function(err) {
        if (err) {
            console.log("Error Occured")
            res.send("Error uploading file.");
        }
        console.log("File Uploaded");
        res.send("File is uploaded");
    });
});

app.listen(3000, function() {
    console.log("Working on port 3000");
});