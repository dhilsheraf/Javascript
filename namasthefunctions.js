//function statement
function a(){
    console.log("its a function statemetn ");
}
//function expression
const e = function (){
    console.log("its function expression");
}
// it means the function acts like a value hoisting can't be done

//function declaration - same as function statement both are same

//anonymous function - doesn't have their own identity
// function (){

// }
// it used as values when the function used as values it stored as variables

//Named function expression
const ex = function xyz(){
    console.log(xyz);
}
ex();
// xyz(); can't call the function using the functdion name 

//parameters and arguments
// const pa = function(parameter1,parameter2){
//     console.log("hae");
// }
// pa(argument1,argument2);

//first class functions - Ability to be used like values function ne nml callback aayi pass cheyum ath in munb vare athaan first class function
// higher order nte ullil value aay pass cheya function ne
//First class citizens - functions which have used to be like values
function h(){
    console.log("haai its first class");
}
function maain(m){
    m();
}
const first = h();
maain(first);

//pure function
function sum(a,b){
    return a+b;
}
console.log(sum(5,10));
//the function which pass the parameter as return value

//function composition example 

const  h = x => x*2 ; 
const  k = x => x+3 ;
                               
                               
const both = x=> k(h(x));
console.log(both(5));

const q = x => x*3;
const l = x => x+3;

const m = x => l(q(x));
console.log(m(3));