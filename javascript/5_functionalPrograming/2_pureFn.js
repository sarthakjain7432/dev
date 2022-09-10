//impure function
// let a = 4;
// function addNum(b){
//     console.log("the sum is" , a+b);
// }
// addNum(2);
//hum a ki value kuch bhi change kr skte hai (4,5,6--) to output bhi change hota rahega
// matlab hum function me same argument pass kr rhe(2) hai magar vo hume different results de rha hai
// isliye ye ek impure function hai
// kyuki ye ek external factor pr depend kr rha hai jese ki (a)

//pure function
function addNum(a,b){
    console.log("the sum is", a+b); //side effect
}
addNum(3,7);
//pure fn - esa function jisko jab hum call kare with same argument to hume same result vaps kare
// a pure fn will always return a same result for the same set of argument

// here we can consider console.log as an side effect bcoz fuctional programing add one more thing 
// ki hamari state mutate nhi honi chahiye - matlab us function ke result k alava apke kisi bhi external factor me 
//koi change nhi aana chahiye lekin console.log jab hum kbhi karte hai to vo hmari external screen use kar rha hai
// or vha pe hamare result ko output karega
// to us function ka bs vhi tak daira nhi rha,usne koi external factor ko bhi change kr diya

// side effects esa nhi hai ki hamesha bure hote hai, kai baar hme side effect vaale code bhi likhne pdte hai
// pr zadatar hum ye chahte hai ki inhe hum ignore kare.

//so we can remove upper side effect by doing this ->
function addNum(a, b) {
  return (a + b);
}
console.log(addNum(3,7));
//is function jo bhi value return hogi vo console.log hogi magar is function k scope k bahr,humne us function me koi
//change nhi kiya