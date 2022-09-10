// declare 2 // array is a collection of homogeneous data types -> Java,c++
// array is a collection of anything
let arr = [1,true,1.1,"string",null,[1, 2, 3, 4, 5], 
function fn() 
{
console.log("Hello i am a function inside an array"); 
return "rval from a fn";
}];
// get
// console.log("extract 3 from 2dArray", arr[arr.length-2][2]);

console.log("16", arr[arr.length-1])
let rArrVal = (arr[arr.length - 1]());
console.log("rArrVal",rArrVal)
// console.log(arr);
// function definition

function fn() 
{
    console.log("I am a function"); 
    return "Hello";
}
function fn1()
{
    console.log("i am fn 1")
}

//function invocation

// console.log("function", fn); 
// let rVal = fn();
// console.log("rval", "Val):

let tempArr = [1, 2, 3, 15, 5]
let templArr = tempArr;

//let arr[1,true,1.1,"string",null,templArr,fn];
// console.log(" 2dArray", arr[arr.length - 2]); 
// console.log("access the last element", arr[arr.length-1]);
// console.log("call the last element", arr[arr.length-1]());

let rVal = fn();
console.log("rVal",rval);
console.log("````````");
console.log("rVal",fn())