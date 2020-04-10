function Class (parameter){
    this.variable = parameter;
    this.printVariable = function(){
        console.log(parameter);
    }
};

var instance = new Class('parameter');
instance.printVariable();