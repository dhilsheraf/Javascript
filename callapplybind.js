function getName(a,b,c){
    // console.log(a,b,c);
    console.log(this.name);
    console.log(this.place);
    console.log(this.age);
    
}
function getName2(){
    console.log(this.name);
    console.log(this.place);
    console.log(this.age);
    
}
const person1 = {
    name : "Jango ",
    place : "kallingal",
    age : 18
};
const person2 = {
    name : "althaf ",
    place : "parayangad",
    age : 17
};

// getName.call(person1);
// getName.apply(person2);


// const newGetName = getName2.bind(person1);
// newGetName();
// getName.call(person1,"1","2","3");
// // comma seperated string
// getName.apply(person1,["1" , "2" , "3"]);
// // array 

function printName(a){
    console.log(a);
    
    console.log(this.name);
    console.log(this.place);    
}

// printName.apply(person1,["haai"])

const val = printName.bind(person1,"Good Morning")

val()
