// function scope
// function calculate(a,b){
//     let result = a+b;
//     return result;
// }
//console.log(calculate(2,3));  // output -> 5
//console.log(result); //output -> result is not defined
// means anything which is declared inside the function we can not use it outside the function
// And this is called function scope

// lexical scope
// function add(){
//     let a = 4;
//     addChild();
//     function addChild(){
//         console.log(a + 5)
//     }   
// }
// add();
// output -> 9
// means we can access the variable in the function which is inside the function where the variable is declared
// And this is called lexical scope of a function

function add(){
    let a = 4;
    addChild();
    function addChild(){
        console.log(a + 5)
    }
    return addChild;   
}
let catchAdd = add(); 
console.log(catchAdd); //output -> [function:addChild]
catchAdd();//output -> 9
//matlab ek function ke andar se humne uske child ko return bhi kar diya, vo function stack se khatam ho chuka hai
//lekin uske baad bhi jo add child function hai uske pass uske parent ke andar jo variable define the uska access 
//abhi bhi hai
// And isi poore concept ko hum kehte hai closures
// closures - a function always bundled with its lexical scope forms a closure
