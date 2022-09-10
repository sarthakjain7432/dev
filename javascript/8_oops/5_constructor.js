//let say ki hum ek car company me kaam karte hai or hmara kaam hai alag alag cars ki details ka obj bnana
// let car1 = {
//     brand : 'bmw',
//     model : 'x5',
//     color : 'white'
// }
// let car2 = {
//   brand: "mercedes",
//   model: "s class",
//   color: "black",
// }
//to ye kaam kaafi repetitive ho rha hai , ek object ko baar baar same properties k sath define karna
//to kyu na koi esa Fn hota jis Fn ko hum define karte or usme bs hum parameter paas kar dete or vo hume ek nya object 
//create kar k deta with the same exact properties
//usse hi hum kehte hai CONSTRUCTOR FN

function car(brand,model,color){
  this.Brand = brand;
  this.Model = model;
  this.Color = color;
  this.drive = function(){
    console.log("I am driving "+ this.Model);
  }
}//jab hum Fn ke ander this use karte hai to vo hume global object return karta hai lekin jab aap ek Fn ko as a 
//constructor Fn bna rhe hai or aap uske sath ek new keyword use kar rhe hai tab this hume ek empty object return
//karne lagta hai

let car1 = new car('BMW','X5','white');// new is the keyword for creating a new object
//console.log(car1); output -> car { Brand: 'BMW', Model: 'X5', Color: 'white' }
let car2 = new car("Mercedes", "S Class", "red");
//console.log(car2); output -> car { Brand: 'Mercedes', Model: 'S Class', Color: 'red' }

//in car1 or car2 se hum in properties ko bhi access kar skte hai or koi bhi ek dusre ki property ko overwrite nhi 
//krega ya mutate nhi karega 
//car1.Brand = 'Jaquar';
//console.log(car1); output -> car { Brand: 'Jaquar', Model: 'X5', Color: 'white' }

//individually bhi hum in properties ko access kar skte hai
//console.log(car2.Color); output -> red

//oject k ander ek Fn likhna ho to
//this.drive(uper Fn car me hai)
//car1.drive(); output -> I am driving X5