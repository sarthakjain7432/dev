//why we need call apply bind ? let understand by taking an example
let person1 = {
  name: "adam",
  age: 25,
  //showDetails : function(){
  //console.log(this.name + " is " + this.age + " years old");
  //}
};
//person1.showDetails(); output -> adam is 25 years old
let person2 = {
  name: "steve",
  age: 20,
};
//suppose we have to do the same thing for multiple objects(person2,3,---) to kya hum sab me baar baar showDetails
//vaala Fn bnate rhe
//to kyu na hmare pass kuch ese Fn hote ki humne ek object me ek Fn define kiya or usse me multiple objects me call
//kar pau
//isi liye hmare call apply bind hai

//we can do this with call like this ->

//person1.showDetails.call(person2); output -> steve is 20 years old

//person1 se showDetails vala Fn humne le liya or person2 ke liye call kar diya

//And isi concept ko hum kehte hai Fn BORROWING

//lekin kya mujhe zaroori hai ki me ek hi object ko zada importance du or ussi se saare Fn borrow karu
//to hum kya kar skte hai, is showDetail Fn ko GLOBALLY bhi define kar skte hai

// let showDetails = function(){
//     console.log(this.name + " is " + this.age + " years old");
// }
// showDetails.call(person2);

//ab agar hume is Fn me koi or arguments pass karne hai jese , or hum kuch esa dikhana chahte hai ki person ka naam
//hai adam vo itne saal ka hai ,is city me rehta hai or uspe ye gaadi hai to ->
let showDetails = function (city, car) {
  console.log(
    `${this.name} is ${this.age} years old , he lives in ${city} and he drives ${car}`
  );
};
//showDetails.call(person1,"new delhi",'BMW'); output -> adam is 25 years old , he lives in new delhi and he drives BMW

//APPLY and BIND bhi isi tarah kaam karte hai bus usnme thoda sa difference hota hai

//APPLY
//showDetails.apply(person1, "new delhi", "BMW"); output -> TypeError: CreateListFromArrayLike called on non-object
//apply ka use karne ke liye hume in external arguments ko ek array me daalna hoga
//showDetails.apply(person1, ["new delhi", "BMW"]); output -> adam is 25 years old , he lives in new delhi and he drives BMW

//BIND
//isko bhi hum isi tarah se use to kar skte hai pr vo hume koi instant output nhi dega jese ->
//showDetails.bind(person1, ["new delhi", "BMW"]); no output
//kyuki bind ne ab tak koi output return kiya hi nhi hai
//bind naam se hi jese hume pta chl rha hai ,ye khi na khi us Fn ko jod kar k khi rkh de rha hoga
//to bind basically ek Fn ka hi Fn bna de rha hai or usse khi rkh le rha hai apne pass or ab hum jab chahe usse call
//kar skte hai
let showDetailsBind = showDetails.bind(person1, "new delhi", "BMW");
//console.log(showDetailsBind); output -> [Function: bound showDetails], ek Fn return hua hai jisse bound kiya gya hai
//showDetails Fn se
//matlab ye jo showDetails Fn hai isko bind ne bound kar k rks diya hai , ki ye mere pass abhi hai lekin esa Fn hi hai
//me turant call nhi karunga, jab aap chahoge usse call karna to aap usse khi store kr k rkhlo fir aap jab chaho usse
//usse call kar lena
//showDetailsBind(); output -> adam is 25 years old , he lives in new delhi and he drives BMW
