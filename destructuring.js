// Rest 
//array and object destructuring
//array destructuring
const arr = ["althu","Niju","dilu"];
const [first,second,third] = arr;
console.log(arr[1])
console.log(first,second);
//obj destructure
const globalPlayer = {
    name : "jango",
    id : 7,
    powerLevel : 100,
    
}

const {name, ...rest} = globalPlayer;

console.log(name);
console.log(rest)






