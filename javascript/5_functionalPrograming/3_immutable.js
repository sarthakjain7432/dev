//mutability
//agar hum kisi value ko declare kar rhe hai or vo declare karne ke baad change ho jaye ya hum usko change kr paye
//so functional programing always suggest us to write immutable code.
// const person1 = {
//     name:'adam',
//     age:25
// }
//const person2 = person1;
//console.log(person1); output -> adam,25
//console.log(person2); output -> adam,25
//person2.name = 'steve';
// console.log(person1); output -> steve,25
// console.log(person2); output -> steve,25
// humne khaali person2 ke name ko change kiya pr dono ke name change ho gye
// basically yhi hota hai hmare reference data type me,ki vo ek object k liye ek hi reference ko store kar k rkhta hai
// ab aap us object ko kisi or object pe assign karenge to us dusre object pe bhi vhi reference chla jaega
// isliye jab humne change kiya person2 ke name ko to sirf person2 pr nhi change hua uske reference pe change hua 
// jha pr person1 or person2 dono point kar rhe hai, dono ka ek single reference tha vha pr

// to yha is problem ko solve karne k liye hum object.assign ka use karenge
// ye as a argument pehle leta hai ek empty object jisko vo nye tarike se create karega 
// iske baad vo leta hai ek source object jisse vo properties ko copy karta hai
// const person1 = {
//   name: "adam",
//   age: 25,
// };
//const person2 = Object.assign({},person1);
//ab person1 ki jo bhi property hogi vo is empty object me pass ho jaegi or humko ek naya reference milega is 
//particular object k lie
//person2.name = 'steve';
//console.log(person1); //output -> { name: 'adam', age: 25 }
//console.log(person2);// putput -> { name: 'steve', age: 25 }

// there is another way of doing this,by using spread operator
//const person2 = {...person1};
