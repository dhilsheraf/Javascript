const arr= [1,2,3,2,3,44,32,3,43,21,12,44];
const sorted = arr.sort((a,b)=> a - b );
console.log(sorted);

const unique = new Set(arr)
console.log(unique);