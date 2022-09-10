// Q1 --> 
// input - i'm a little pot
// output - I'm A Little Pot

// let str = "i'm a little pot";
// let arr = str.split(" ");
// for(let i=0; i<arr.length; i++)
// {
//     let word = arr[i]; 
//     let uc = word.charAt(0).toUpperCase(); // upercase
//     let sstr = word.slice(1);  //slicedstring
//     stdout.write(uc + sstr); 
// }

// Q2 --> longest word
// input - the quick brown fox jumped over the lazy dog
// output - jumped

let str = "the quick brown fox jumped over the lazy dog";
let arr = str.split(" ");
let lw = arr[0];
for(let i=1; i<arr.length; i++)
{
    let word = arr[i]
    if(word.length > lw.length)
    {
        lw = word;
    }
}
console.log(lw);