var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
 
 app.get('/', function(req, res){
	res.send("Hell Wolrd");
 	res.end("Done :)");
 })

 app.listen(port);