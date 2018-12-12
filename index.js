var http = require('http');
var port = process.env.PORT || 8080;

http.createServer(function(req, res){
	console.log("Hurray!! Server Started");
	res.write("Hello World");
	res.end("Done");
}).listen(port);