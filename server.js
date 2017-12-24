var express=require('express');
var fs=require('fs');
var bodyParser = require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
	fs.createReadStream('./post/index.html').pipe(res)
})

app.post('/login_form',function(req,res){
	console.log(req.body);
//	res.send(req.body);
	if(req.body.username){
		fs.createReadStream('./post/home.html').pipe(res)
	}else{
		fs.createReadStream('./post/index.html').pipe(res)
	}
})
app.get('/home',function(req,res){
	fs.createReadStream('./post/login.html').pipe(res)
})
app.listen(9090)
