// const promise = new Promise((resolve,reject) => {
//     return resolve("error shaheerka")
// } )


// promise.then((message)=>{
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
    
// } )
/*
const promise1 = new Promise((resolve,reject) => {
    return resolve("error shaheerka1")
} )
const promise2 = new Promise((resolve,reject) => {
    return reject("error shaheerka2g")
} )

Promise.allSettled([promise,promise1,promise2]).then((message) =>{
    console.log(message);
    
} )
*/

//promise race


const promiser = new Promise((resolve,reject) => {
    setTimeout(() =>{
        return resolve("error shaheerka0")
    })  
},3000 )

const promiser1 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        return resolve("error shaheerka1")
    })  
},3000 )
const promiser2 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        return  resolve("error shaheerka2")
    })  
},4000 )

Promise.race([promiser,promiser1,promiser2]).then((message) =>{

      console.log(message);
      
})

