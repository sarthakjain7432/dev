// Q1 --> reverse a array
// input - 1,2,3,4,5
// output - 5,4,3,2,1

// let arr = [1,2,3,4,5];

// let lo = 0;
// let hi = arr.length-1;

// while(lo < hi)
//     {
//         let temp = arr[lo];
//         arr[lo] = arr[hi];
//         arr[hi] = temp;

//         lo++;
//         hi--;
//     }
// console.log(arr);

// Q2 -> array union
// input = arr1[1,2,3] arr2[100,1,2,10]
// output = arr[1,2,3,10,100]

// let arr1 = [1,2,3];
// let arr2 = [100,2,1,10];
// let ans = arr1;
// for(let i=0; i<arr2.length; i++)
// {
//     for(let j=0; j<arr1.length; j++)
//     {
//         if(arr2[i]!=arr1[j])
//         {
//             ans.push.arr2[i]
//         }
//     }
// }
// console.log(ans);

//Q3 -> first and last index
// input = 1,5,10,15,22,33,33,33,33,33,40,42,55,66,77
// output = 5,9

let arr = [1, 5, 10, 15, 22, 33, 33, 33, 33, 33, 40, 42, 55, 66, 77];
// let arr = [1, 5, 10, 15, 22, 33, 33, 33, 33, 33];
// let arr = [33, 33, 33, 33, 33];
// let arr = [1, 5, 10, 15, 22, 33];
let fidx = 0;
let lidx = 0;
// while(lidx<arr.length)
// {
// if (arr[fidx] == arr[lidx]) 
// {
//   lidx++;
// } else 
// {
//   fidx++;
//   lidx++;
// }
// }
let i=0; 
while(i < arr.length) 
{
    fidx = i;
    lidx = i;
    if (lidx < arr.length - 1 && arr[lidx] == arr[lidx + 1]) 
    {
      fidx = i;
      while (lidx < arr.length - 1 && arr[lidx] == arr[lidx + 1]) 
      {
        lidx = lidx + 1;
      }
      break;
    }
    i++;
}


console.log(fidx);
console.log(lidx);




