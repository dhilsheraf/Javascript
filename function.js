// // functoin statement
// function myFunction(){
//     console.log("Hello world ");
// }
// myFunction();

// functioin expression
// const name = function name(naem){
// console.log("hello"+naem);
// };
// name("jango");

// function declaration
// function name(h){
//     console.log(h);
// }
// name("jango");


//anonymous function
// this function define immediately when it defined 
// (function() {                                                                       
//     console.log("This function runs immediately upon definition!");
// })();  // Output: This function runs immediately upon definition!

// (function(){
//  console.log("this is immediate ");
 
// })();

// const anon = function(name){
//     console.log("Hello "+name+"!");
    
// }
// anon("jango");

// named function expression                         
// const func = function namdexp(name){
//     console.log("how are you "+name);
// }
// func("Dhilsheraf");

//higher order function                     
// function callbackfunction(){                 
//     console.log("Hai its callback ");
    
// }
// function higherorder(callback){
//     callback();
// }
// higherorder(callbackfunction);
// example                                              const radius = [1,3,3,4,5];
const radius = [1,2,3,4,5];                             
const area = function (radius){                               
    return Math.PI*radius*radius;  
}                                                                                                                                                        
const diameter = (radius) => radius+radius;                    
const calculate = function (radius,logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,diameter));

 