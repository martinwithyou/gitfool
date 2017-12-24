//  function({url="",type='get',dataType="json"}){
//      return new Promise((resolve,reject)=>{
//      let xhr = new XMLHttpRequest();
//      xhr.open(type,url,true);
//      xhr.onload = function(){//响应成功时 xhr.readystate == 4
//          if(/^2\d{2}$/.test(xhr.status)){
//              let data = xhr.response;
//              resolve(data);
//              console.log('111111')
//          }else{
//              reject("失败了");
//          }
//      }
//      xhr.onerror = function () {
//          reject("失败了");
//      }
//      xhr.send(null);
//    })
//  }
//node中提供的管理进程的属性
//console.log(global.process.env);
//console.log(global.process.env.Path);
//let val = process.env.NODE_ENV;
//console.log(process.env.NODE_EVN);
//console.log(val);
//if(val === 'DEV'){
	//开发环境
//}else{
	//生产环境
//}
