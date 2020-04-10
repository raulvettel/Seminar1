console.log('Start');
function pinc(v){
    var p = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(!isNaN(v)) resolve(v+1);
            else reject('not a number');
            console.log('End incp',v);
        });
    });
    return p;
}

pinc(0)
.then(pinc)
.then(pinc)
.then(pinc)
.then(function (v){console.log('! Promise ',v);})
.catch(function(err){console.log('CATCH'+err)})
.finally(function(){console.log('FINALLY ')});
console.log('End Promise');