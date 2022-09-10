//this keyword in nodejs and in non strict mode

//first of all let see the difference between strict and non strict mode
//for example
// a = 3
// console.log(a); output -> 3 jabki humne (a) ko let,var,const kisi se bhi initialise nhi kiya tha
// now if we use mode use strict then -
// 'use strict'
// a = 3;
// console.log(a); output -> reference error : a is not defined
//now if we initialise a with let then it will give 3 as a output
//so this is how strict and non strict mode works

//1) console.log(this); output -> {} empty object return ho rha hai

//2) function showThis(){
//     console.log(this);
// }
// showThis();
//output -> return global object - Object [global] {
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
//   }
// }

//3) let obj = {
//     name : 'sarthak',
//     f : function(){
//         console.log(this);
//     }
// }
// obj.f(); output -> object itself - { name: 'sarthak', f: [Function: f] }

//4) let obj = {
//     name : 'sarthak',
//     f : function(){
//         function g(){
//             console.log(this);
//         }
//         g();
//     }
// }
// obj.f(); output -> global object