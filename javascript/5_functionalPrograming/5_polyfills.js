//polyfills -> jese ki purane browsers jo hai, jo inbuilt function ab hume es6 k baad milne lge hai jese ki map,filter,
//reduce is tarah k Fns ko vo support nhi karte to kbhi kbhi hume kya krna pdta hai ki is sare Fns ko likhne k liye
//hume imperative approach ko use krna pdta hai hume hamari own implementation krni pdti hai, procedural implementation
//krni pdti hai in functions ki , un Fns ko hum jab likhenge imperatively to hume un fns ki kaafi achi insight mil
//jaegi

// Map
let myArr = [1,2,3,4,5];
// let newArr = myArr.map(function (x) {
//     return x*x;
// });
//console.log(newArr);

function myPolyfillMap(arr,cb){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(cb(arr[i]));
    }
    return newArr;
}

function square(x){
    return x*x;
}

//console.log(myPolyfillMap(myArr,square));

//Filter
let fArr = [2,4,6,7,9,13,14,16];
let evenArr = fArr.filter(function(x){
    return x%2===0;
})
//console.log(evenArr);

function myPolyfillFilter(arr,cb){
    let filteredArr = [];
    for(let i=0; i<arr.length; i++){
        if(cb(arr[i])){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

function isEven(x){
    if(x%2===0){
        return x;
    }
}

//console.log(myPolyfillFilter(fArr,isEven));

//Reduce
let sumArr = myArr.reduce(function (accumulator, x) {
  return accumulator + x;
}, 0);

function myPolyfillReduce(arr){  // may be wrong, written by me
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(myPolyfillReduce(myArr));