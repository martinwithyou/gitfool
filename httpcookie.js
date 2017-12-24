var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function(req,res){
	var urlObj= url.parse(req.url,true);
	res.setHeader('Set-Cookie','name="zfpx');
    res.end('over')
}).listen(8080);

