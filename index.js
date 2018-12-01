var express = require('express');
var app = express();
var port = process.env.PORT || 80;
 
 app.get('/', function(req, res){
	res.send("Hell Wolrd");
 	res.end("Done :)");
 	console.log("Server started successfully");
 })

 app.listen(port);