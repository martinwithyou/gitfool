console.log('hello');
//console.log(global);
let fs = require('fs');
//fs.readFile();
//可以异步读取文件里面的内容
//无阻赛IO操作
var a=fs.readFileSync('./new_file.html','utf-8');
console.log(a);
//设置立即执行
setImmediate(()=>{});
//等待队列的顶部
process.nextTick(()=>{});
//在主任务队列的最底部执行
//这个process.nextTick会在setImmediate之前执行
//能用异步不要用同步，优化性能，分减压力
//事件驱动
//到达某个时候做一些事情
//promise()在服务器端运用更多
//process 
