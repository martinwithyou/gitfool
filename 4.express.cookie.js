var express = require('express')
var cookieParser = require('cookie-parser')
var app=express();
app.use(cookieParser());
app.get('/',function(res,req){
	console.log('Cookies: ', req.cookie)
//	var isVisited = req.cookies;
//	if(req.cookies){
//		res.send('欢迎老朋友')
//	}else{
//		res.cookie('isVisisted','1',{maxAge:20*1000})
//		res.sand('欢迎新朋友')
//	}
//  if(req.cookie == undefined){
// 	   res.cookie('isVisisted','1',{maxAge:20*1000})
//     res.send('欢迎新朋友')
//  }else{
////  	res.end('欢迎老朋友')
//  }
})
app.listen(8080)
