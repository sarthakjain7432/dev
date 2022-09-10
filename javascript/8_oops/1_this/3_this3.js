//this keyword in browser and in non-strict mode

//console.log(this); //returns window object -> Window
// alert: ƒ alert()
// atob: ƒ atob()
// blur: ƒ blur()
// btoa: ƒ btoa()
// caches: CacheStorage {}
// cancelAnimationFrame: ƒ cancelAnimationFrame() and so on .... kaafi bda object hai ye

//2) function showThis(){
//    console.log(this);
// }
// showThis(); returns window object again

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
// obj.f(); returns window object again

//to run this in browser make a html file and in body add <script src = "file path"></script>

//this keyword in browser and in strict mode

//1) returns window object
//2) returns undefined
//3) returns object itself
//4) returns undefined

//pic of summary of this is in my phone