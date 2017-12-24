var express = require('express');
var app=express();
/**
 *添加一个中间件 
 */
app.use(function(req,res,next){
	console.log('use');
	res.setHeader('Content-Type','text/plain;charset=utf-8')
    next();
})
app.get('/index',function(req,res){
	console.log(req.path)//路径pathname
	console.log(req.query)//查询字符串对象
	console.log(res.send)//发送方法
	console.log(res.host)//发送方法
	res.send({name:'你好'});
	res.end('index');
});
app.get('/home',function(req,res){
	console.log('你好');
	
	res.end('你好')
})
app.get('*',function(req,res){
	res.end('404')
})
app.listen(8080)
