// this
// console.log(this);

// function getName(){
//     console.log(this);
    
// }
// getName();

function getName(){
    console.log(this.name);
    console.log(this.age);
    
}

const person = {
    name : "Dhilsheraf",
    age : 18 ,
    method : getName,
}


const person2 = {
    name: "dilu",
    age : 18 ,
    method : getName ,
}
person.method();
person2.method();