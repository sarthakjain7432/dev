//this keyword in nodejs and in strict mode
'use strict'
//1) console.log(this); returns a empty object

//2) function showThis(){
//    console.log(this);
// }
// showThis(); returns undefined

//3) let obj = {
//     name : 'sarthak',
//     f : function(){
//         console.log(this);
//     }
// }
// obj.f(); returns object itself

//4) let obj = {
//     name : 'sarthak',
//     f : function(){
//         function g(){
//             console.log(this);
//         }
//         g();
//     }
// }
// obj.f(); returns undefined
