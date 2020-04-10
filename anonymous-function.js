function sayHello (name){
    console.log("Hello " + name);
}
var sayBye = function (name){
    console.log("Bye " + name);
}
function toRichard(f){
    f('Raúl');
}
toRichard(sayHello);
toRichard(sayBye);