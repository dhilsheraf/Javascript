/*
rest is same as spread operator logic in spread operaotr it will spread the wholr
in the destructuring we use if we need a value we will destructure it
we use rest for if we need only one value and another as object here we use rest operator
spread anaother balance values */

const  globalPlayer = {
    name : "Dhilsheraf",
    id : 7,
    place : "Vadakkekad",    
}
// const{id, ...rest} = globalPlayer;
// console.log(id);
// console.log(rest);

const number = [1,2,3,4,5,6,7,8,9,0,10];
const [first,second,third,fourth,...rest ] = number;
console.log(rest );




 

