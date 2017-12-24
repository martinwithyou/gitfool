var express = require('express')
var fs = require('fs')
var app=express();
var db='./users.json';
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
	fs.createReadStream('./post/login.html').pipe(res)
});
app.get('/users',function(req,res){
	console.log('/users');
	fs.createReadStream('./user.json').pipe(res);
});
app.get('/users/:id',function(req,res){
	var id = req.params.id;
	var users=require('./user.json')
	var user=users.filter(function(user){
		return user.id==id;
	})[0];
	if(user){
		res.send(user);
	}else{
		res.send("这个用户不存在");
	}
	
});
app.post('/users',function(req,res){
	var user=req.body;
	var users = require('./user.json');
	console.log(users);
	user.id = users[users.length-1].id+1;
	users.push(user);
	fs.writeFile(db,JSON.stringify(users),function(err){
		res.send(user)
	})
})
app.listen(9090)
