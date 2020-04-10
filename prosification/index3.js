function time(){
    var p = new Promise(function(resolve,reject){
    var v = Math.trunc(Math.random()*1000);
    console.log('Before TimeOut ',v);
    setTimeout(function(){
        console.log('After Timeout ',v);
        resolve(v);
    },v);    
    });
    return p;
}

var promises = [time(),time(),time(),time(),time()];
Promise.all(promises)
.then(function(res){console.log('End',res);});