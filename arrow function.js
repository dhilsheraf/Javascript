const person = {
    name : "Dhilsheraf ummer",
    age : 18,
    method(){
        const getName = ()=>{
            return this;
        };
       return getName;
        }
    }
const newGetName = person.method();
console.log(newGetName());

//arrow
const func = () => {
       console.log("hello goodmorning");
       
};
const funs = x => x+5;

func();
console.log(funs(5));
 