//slice
//used through index we can get the value that we want 
/*The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (not inclusive) given end.
The slice() method does not change the original array. */

const fruits  = ["Apple ","Mango ","Orange","Grape"];
// const sl = fruits.slice(0,4)
// console.log(sl);

//splice
/*
The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.
*/

fruits.splice(1,0,"haai",6666)
const newfruit= fruits.toSpliced(2,0,"LEmon","Kiwi");
console.log(fruits);
console.log(newfruit);
//splice index,howmuch delete,values to add

