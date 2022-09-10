//Javascript Engines -> JE basically ek browser k behind the scene kaam karti hai , us browser ko enable karti hai, us
//javascript code ko run karne k liye.
//har ek browser ka apna alag engine hota hai. jese ki chrome use karta hai v8 engine,nodeJs bhi v8 engine pr hi bna hai
//nodeJs isi engine ka use karta hai JS code ko run karne k liye.
//2) mozilla firefox use karta hai spiderMonkey engine ko

//prototype
//manlo ham chrome pr kaam kar rhe hai vha pr array k liye bhut saare functions hote hai jese map,filter,reduce,
//fill,find,indexof,slice,sort,splice.
//lekin kya ho skta hai ki agar hum kisi or browser k liye JScode likh diya ho or vo browser inme se
//kisi Fn ko support na karta ho to us browser me hamara code chal nhi paega
//tab hum use kar skte hai is prototype ka use,jisse hum khud k Fns implement kr skte hai, hum jesa bhi Fn chahe
//bna skte hai prototype ka use kar k

//agar hum is code ko chrome me likhenege is prototype object ka use karke hmare Fn ko prototype me entry kra denge
//Array.prototype.showName = function(){
    //console.log(this);
//}
//let arr = [4,5,6];
//to isse array ke prototypes me showName naam ka function bhi add ho jaega, jisse hum kisi bhi array k sath ye showName
//vala Fn use kar paenge

//lets take an example here
// Array.prototype.myFunction = function(){
//     console.log(this)
// }
// let arr = [1,4,7,9];
//arr.myFunction();//output -> [ 1, 4, 7, 9 ]

//ab prototype ko use karke map, filter ka polyfill likhte hai
//Map
// Array.prototype.myMap = function(cb){
//     let newArr = [];
//     for(let i=0; i<this.length; i++){
//         newArr.push(cb(this[i]));
//     }
//     return newArr;
// }
// function square(x){
//     return x*x;
// }

// let arr = [1,2,3,4];
// let mappedArr = arr.myMap(square);
// console.log(mappedArr); output -> [ 1, 4, 9, 16 ]

//Filter
Array.prototype.myFilter = function(cb){
    let newArr = [];
    for(let i=0; i<this.length; i++){
        if(cb(this[i])){
            newArr.push(this[i]);
        }       
    }
    return newArr;
}
function isEven(x){
    return x%2===0;
}

let arr = [1,2,3,4,16,9,17];
let filteredArr = arr.myFilter(isEven);
console.log(filteredArr);//output -> [2,4,16]
