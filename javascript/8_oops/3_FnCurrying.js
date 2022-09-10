//1) Fn Currying with bind
// function add(a,b){
//     console.log(a+b);
// }
//add(2,4); output -> 6
//now we want to constant one parameter
//let addWith2 = add.bind(this,2); here this refer to add Fn and 2 is the first param of add Fn
//addWith2(5); output -> 7
//This is known as Fn currying

//alternative
// let addWith2 = add.bind(this);
// addWith2(2,4); output -> 6

//alternative 2
// let addWith2 = add.bind(this,2,3);
// addWith2(); output -> 5

//2) Fn Currying with closures
// function add(x){
//     return function(y){
//         console.log(x+y);
//     }
// }
// let addWith2 = add(2);
// addWith2(3); output -> 5
//humne ek Fn bnaya add jo ek Fn return kar rha hai, to jab hum addWith2 pe add ko assign kar rhe hoge to ye add ek 
//Fn return kar rha hoga or is add ka paramemeter (x) bhi humne yha pass kiya hua hai (2), to ab Fn return hone k 
//baad humne returned Fn me pass kar diya (3) , to ye hume 2 or 3 ko add kar k de dega 5

//to Currying me humne dekha ki , kis tarike se hum Fn ki copy bnate hai usko hum alag alag parameter se call lga skte
//hai