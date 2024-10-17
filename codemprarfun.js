//foreach() find() filter() map() reduce()

const arr = [
    {
        name : "Jango",
        age : 18,
        place : 'kallingal'
    },
    {
        name : "kunnikunnan",
        age :17,
        place : "Parayangad"
    },
    {
        name :"niju",
        age : 18,
        place : "eramangalam"
    }
]
/*
let sum=0;
arr.forEach((item,index)=>{
    console.log(item.name);
    sum+=item.age;
    console.log(index);
    
    
})
console.log(sum); */
//find
// let found = arr.find((item) => {
//     // return item.name === "Jango";
//        return item.age <18
// })

// console.log(found);

//filter
/*
const check = arr.filter((item,index) => {
    // return item.name === "niju";
    return index<2
})
console.log(check); */


const mapp = arr.map((item) =>{
    // return item.name+"  "+ item.place;
    return {
        ...item,
        country : "India"
    }
})
console.log(mapp);

//reduce 
// const red = arr.reduce((accu,item)=>{
           
//            return accu + item.age ;
// },0);

// console.log(red);





