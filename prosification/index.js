console.log('Start');
function inc(v,cb){
    setTimeout(function(){
        cb(v+1);
    });
    console.log('End inc',v);
}

inc(0,function(v){
    inc(v,function(v){
        inc(v,function(v){
            inc(v,function(v){
                console.log('Traditional 4=',v);
            })
        })
    })
});
console.log('End v0');