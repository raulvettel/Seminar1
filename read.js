var fs = require('fs');
console.log('Start');
fs.readFile('data.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log('Contents: ',data);
});
console.log('End');