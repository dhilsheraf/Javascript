/*const arr= [
    
    { age: 28,
     name: "John Doe"
    },
    { age: 34,
     name: "Jane Smith" },
    { age: 29, name:
         "Alice Johnson" },
    { age: 42,
     name: "Bob Brown" }

]

const summ =arr.reduce((acc,item) => {
    return acc+item.age;
},0)


console.log(summ);



const ab = [
    {af:34},
    {af:34},
    {af:34},
    {af:34}]

const sum = ab.reduce((acc,item) => {
    return acc+item.af;
},0)

let sum = ab.reduce((acc,item)=>{
   return acc+item.ab},0)
console.log(sum);

let arra = [1, 2, 3, 4, 5];
const multi = arra.map((val,index,array) => {
    return val*index;
})
console.log(multi);

const ss = [1, 2, 3, 4, 5];
let max = ss[0];
for(let i=1;i<ss.length;i++){
     if(max<ss[i]){
        max = ss[i];
     }
}
console.log(max)

const odd = ss.filter((item,index,array) => {
            return item%2==1;
} )

console.log(odd);

const array = [1,2,3,4,5];
const hv = array.reduce((accu,item)=>{
    return item > accu ? item : accu;
},0)
console.log(hv);
const lv = array.reduce((accu,item) => {
    return accu+item;
},0)
console.log(lv);

*/

const objex = {
    id : "Jango",
    position :"CEO",
    ex : 5,
    object : {
        id : "agent Jamgo",
        name : "Dhilsheraf",
        place : "Vadakkekad"
    }
}

const newobj = {...objex}
// newobj.object.name = "Althaf"
console.log(objex);

// console.log(newobj);

const deep = JSON.parse(JSON.stringify(objex));

deep.object.name = "Althaf";
console.log(deep);

const arra = [
    {
        age : 20,
        name : "Althaf",
        
    },{
        age : 25,
        name : "nihan"
    },
    {
        age : 30,
        name : "dilu",
    }
]

const sum = arra.filter(item => item.age<30).reduce((accu,item)=> accu+item.age,0)

console.log(sum);
const q1 = [{af:34},{af:34},{af:34},{af:34}]
const summ = q1.reduce((acc,item)=>acc+item.af,0)
console.log(summ);
const q4 = [1,2,3,4,5];
const sum4 = q4.map((item,index) => item*index);
console.log(sum4);
const filtered = q4.filter(item => item%2==1 )
console.log(filtered);
const smv = q4.reduce((accu,cval) => cval>accu ? cval:accu ,-Infinity)
console.log(smv);

let promise = new Promise(resolve,reject){
    
}













