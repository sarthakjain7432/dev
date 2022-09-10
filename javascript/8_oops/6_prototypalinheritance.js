//kya humne kbhi socha hai ki kis tarike se hum JS me array,object,Fn ye saari cheeze create karte hai to hmare pass 
//array ke liye kuch in built methods k access hote hai jese map,filter,reduce use kar skte hai or bhi bhot saare
//in built methods humko array k milte hai, uske baad hum array ki properties ko bhi access kar skte hai jese array
//length,index. uske baad hum objects ko string me badal skte hai is tarike se hume objects k liye bhi kaafi saare 
//in built methods milte hai
//ye saari cheeze aati kaha se hongi

//ek hoti hai classical inheritance, vha pr hum classes bnate the or unki child classes bnate the or un child classes
//k pass me parent classes me jo bhi hum methods define karte the unka access hota tha 
//lekin ye prtotypal ineritance classical inheritance se kaafi alag hai

//prototype
//let array = [1,2,3,4];
//agar isko hum browser pe chlate hai or arr. likhte hai to hum bhot saare methods show hone lagte hai jese ki push,
//length,map.. etc to ye sare methods aa kha se rhe hai ? ye aa rhe hmare prototype object se
//agar hum vha arr.__proto__ ya Array.prototype likh k enter press karte hai to hume ek ARRAY return hota hai jiske 
//ander saare k saare Fns mojuud hai
//isi ko hum kehte hai prototype, to prototype ek object jo kya karta hai jitne bhi hmare in built methods hai jo 
//hum hmare array,object k saath use kar skte hai unki list ko mantain karke rkhta hai taaki hum un Fns ko jb call
//kare to hume un Fns ka access ho

//or agar hum arr.__proto__.__proto__ likh k enter karte hai to hume ek OBJECT return hota hai or is object k ander 
//hume object vaali properties milti hai jo hum object k liye access kar skte hai

//to kya hum isse ye baat bol skte hai ki array bhi ek object hi hai ? somewhat ye baat hum keh skte hai kyuki yha hum
//dekh skte hai array ka prototype or uska prototype kya hai object hai, agar hum Object.prototype enter karte hai to
//hum yhi same object return hota hai jo arr.__proto__.__proto__ enter karne pr hota hai

//prototypal inheritance
let person1 = {
    name : 'adam',
    age : '25',
    showDetails : function(){
        console.log(this.name +' '+ this.age)
    }
}
//person1.showDetails();
let person2 = {
    name : 'steve'
}
//ab hum person2 k prototype me chedkhaani karna chahte hai
person2.__proto__ = person1
//console.log(person2.name); output -> steve
//console.log(person2.name+' '+person2.age); output -> steve 25
//jabki person2 k pass age to thi hi nhi,similarly person2 se showDetails to bhi call karenge to vo bhi chal jaega.

//yhi hai PROTOTYPAL INHERITANCE
//basically yha pr hua kya jese hi humne person2 k prototype ko person1 pe assign kiya to person2 jo hai saari ki saari
//properties person1 se access karne lag gya, isko allow ho gya ki agar apke pass koi cheez nhi hai to usse person1
//me bhi dhund skte ho
//jab aap ek object k prototype me dusre object ka prototype daal de or us object ko allow karde ki aap kisi dusre object
//se cheeze inherit kar skte hai that is known as PROTOTYPAL INHERITANCE