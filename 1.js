
//0不是立即执行
//5-6ms后再执行
setTimeout(()=>{
	console.log(1);
},10);
setTimeout(()=>{
	console.log(2);
},0);
console.log(3);
let s=new Date();
for (let i=0;i<10000000;i++) {}
////监听程序执行的时间
console.log(new Date()-s);
//console.time('for');
//for (let i=0;i<10000000;i++) {}
//console.timeEnd('for');
