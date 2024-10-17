const arr = [11,22,34,56,75]
const Myset = new Set(arr)
console.log(Myset);
Myset.add(100);
Myset.delete(11)
console.log(Myset.size);

Myset.forEach(function (val){
    console.log(val)
})

//map
// let WeakSet = new WeakSet();

// let car1 = {
//     make :  "Honda",
//     model : "Civic"
// }
