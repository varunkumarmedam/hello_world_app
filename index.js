var express = require('express');
var app = express();
var port = process.env.PORT || 80;
 
 app.get('/', function(req, res){
 	console.log("Server started successfully");
	res.send("Hello Wolrd");
 })

 app.listen(port);
