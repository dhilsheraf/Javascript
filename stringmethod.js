let str = " Hai assalamu alaikum";
let str2 = "Va alaikumussalam varahmathullahi vabarakathu"
let stlength = str.length;
console.log(stlength); //string length

let char = str.charAt(2);
console.log(char);   //letter will get that we pass from where

//convert the string to uppercase lowercaser
let up = str.toUpperCase();
let low = str.toLowerCase();

console.log(up);
console.log(low);

//trim method will remove the space of the start and end from the string

let tr = str.trim();
console.log(tr);

//split it will split the all words to an array 
let sp = str.split(", ");
console.log(sp);

//concat - to merge strings
let con = str.concat(" ",str2);
console.log(con);

//substring = in a string there 20 letters if we need letters from 5to 15 here we use substring
let sub = str.substring(0,10);
console.log(sub);



