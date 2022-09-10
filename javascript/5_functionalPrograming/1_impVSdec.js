// imperative VS declarative programing
 
// is the square of a number is even

//imperative way
// const x = 5;
// const xSquared = x*x;
// let isEven;
// if(xSquared % 2 === 0){
//     isEven = true;
// }else{
//     isEven = false;
// }
// console.log(isEven);

//declarative way
const isSquareEven = (x)=>((x*x)%2===0?true:false);
console.log(isSquareEven(5));