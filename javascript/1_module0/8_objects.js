// represent
// empty object create

let obj = {}

// key :value pair
// key -> string, number
// value -> can be anything

let cap = {
name: "Steve",
lastName: "Rogers", 
friends: ["Peter", "Bruce", "Tony"], 
isAvenger: false, 
age: 34, 
sayHi: function () { console.log("cap say's Hi");},
address:{
    state:"Ney York",
    city:"NY",
}
}

// print-> console.log(cap);

//get
//. notation 
console.log("name", cap.name);
console.log("friends" ,cap.friends [1]); 
console.log("Age", cap.age); 
// if not present
console.log("movies", cap.movies);
cap.sayHi();

// [] operator
let varName = "address";
console.log("address",cap[varName]);
console.log("address",cap.varName);

//loop
for(let key in cap)
{
    console.log(key,":",cap[key]);
}

// add new key
cap.movies = ["first avenger","winter soldier","civil war"];

// update
cap.age = 45;

// delete
delete cap.address.city;