function a(a,b,c){
    return a+b+c;
} //normal method 
console.log(a(1,2,3));

//Currying
function b(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(b(1)(2)(3));

function c(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
