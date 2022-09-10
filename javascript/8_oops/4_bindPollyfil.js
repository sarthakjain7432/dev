let person1 = {
    name : 'sartak',
    age : 21
}
function showDetails(city,car){
    console.log(this.name +" "+ this.age + " " + city +" "+ car);
}
// let showDetailsBind = showDetails.bind(person1,"new delhi"," ","bmw");
// showDetailsBind();

Function.prototype.myBind = function(...args){
    let obj = this;
    let params = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}
let showDetailsBind = showDetails.myBind(person1,"new delhi");
showDetailsBind("bmw");
