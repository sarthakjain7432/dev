//let say ek function jo dusre function ko as a parameter leta hai jese ki call back function, hum vha pr kya karte 
//hai set of desired elements pass karte hai or un elemnts ke hisab se hume vo Fn desired result nikal kar de deta hai

//image related to this is in my phone

//map
let myArr = [1,2,3,4,5];
// let newArr = myArr.map(function (x) {
//     return x*x;
// });
//console.log(myArr);//output -> [ 1, 2, 3, 4, 5 ]
//console.log(newArr);//output -> [ 1, 4, 9, 16, 25 ] map ki madad se newArr ne myArr k elements ko use kiya hai or 1 by 1
//unko us function k (x) vale parameter pr lekr gya hai or vo function un (x) ko square krke hume return kar rha hai

//Filter
// let filteredArr = myArr.filter(function (x) {
//   return x % 2 === 0;
// });
// console.log(filteredArr);//output -> [ 2, 4 ]

//Reduce
//it will return only single value
let sumArr = myArr.reduce(function(accumulator,x){
    return accumulator + x;
},0);
console.log(sumArr);//output -> 15
//here 0 is the value of accumulator
//jab x 1 tha tab accu yaani 0 + 1 -> 1 ho gya or accumulator 0 se change hoke 1 ho gya
//similarly jab x 2 tha tab accu yaani 1 + 2 -> 3 ho gya or accu bhi 1 se change hoke 3 ho gya
//similarly accu(3) + x(3) = 6 , accu = 6
// accu(6) + x(4) = 10, accu = 10
// accu(10) + x(5) = 15.