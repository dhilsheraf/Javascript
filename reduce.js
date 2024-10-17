const number = [1,2,42,21,32,15];

// for (let i=0 ;i<number.length;i++){
//     total += number[i];
// }
// console.log(total)

const newnum = number.reduce((total,value)=>total+value ,0);
console.log(newnum);