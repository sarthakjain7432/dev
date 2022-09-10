// strings
let a = 10;
// let str = "Hello I am a \nstring " + a;
//console.log(str);

// str = 'Hello I am also a \nstring' + a;
// console.log(str);

// template string it is enclosed inside backtick  
// let str = `Hello_I_am a template string ${a}`;
// console.log("Actual str:", str);

// let charAt4 = str.charAt(4);
// console.log("char At 4", charAt4);

// starting index,ending-1
// let slicedStr = str.slice(4, 10);
// console.log("sliced ", slicedStr);

// toLowerCase(), toUpperCase()

// string -> array of string on the basis of delimeter
// let ArrayStr = str.split("a");|
// console.log("Array of String", Arraystr);

//  get length
// let length = str.length;
// console.log(length);

let str = " Hello How Are You";
let trimmedstr = str.trim();
console.log(trimmedstr);
let arrString = trimmedstr.split(" ");
console.log("arr string", arrString);
// convert array of string into string on the basis of delimeter 
let ans = arrString.join("+");
console.log(ans);
