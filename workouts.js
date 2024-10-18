// let arr = [1,2,3,4,5,6,67,8];


// let value = arr.sort( (a,b) =>  a-b ); 

// console.log(value);

// let arr = [1,2,34,5,242,12,21,5]

// let sorted = arr.sort((a,b)=> a-b)


// let mult5 = arr.map(item=> item % 5 === 0)

// console.log(mult5)

// currying

// function currying(a){
//     return function(b){
//         return a+b;
//     }
// }

// console.log(currying(10)(15))


//callback find sum of two numbers

// function higherOrder(callback,a,b){
//    return callback(a,b);
// }

// function callback(a,b){
//            return a+b;
// }


// console.log(higherOrder(callback,5,10));


//find smallest odd number using reduce
// let arr = [2,3,4,5,5,6,7,1,8,9,10,3];

// let smodd = arr.reduce((small,item)=>{
//    if(item%2 !== 0 ){
//     if(small === null||item<small){
//         return item;
//     }
//    }
//     return small
// })


// let smodd = arr.reduce((acc,item)=>{
//     if(item %2 !== 0){
//         if(acc == null || item<acc)
//             return item
//     }
//     return acc
// })


// console.log(smodd);

// sum with promise ;

// const promise = new Promise((resolve,reject)=>{
//     resolve(10+15);
// })

// console.log(promise);

// const promise = new Promise((resolve,reject)=>{
//     resolve(10+5)
// })
// console.log(promise);

// const promise = new Promise((resolve,reject)=>{
//         resolve([10,15]);
//     })
    
//     promise.then(([a,b])=>{
//         console.log(a+b);
        
//     })
// const promise = new Promise((resolve,reject)=>{
//     resolve([10,4])
// })

// promise.then(([a,b])=> {
//     console.log(a+b)
    
// })

// const fs = require('fs')

// let arr = [1,2,3,4,4,5,6,78,6]


// const promise = new Promise((resolve,reject)=>{
//     if(arr.includes(5)){
//         resolve(5);
//     }else{
//         reject("Rejected")
//     }
// }).then((data)=>{
//     fs.writeFile("file.txt",data.toString(),(err)=>{
       
        
//     })
// })
// const promise = new Promise((resolve,reject)=>{
//     if(arr.includes(3)){
//         resolve(3)
//     }else{
//         reject("rejected")
//     }
// })

// promise.then((data)=>{
//            fs.writeFile("file.txt",data.toString())
// })


// function sumPromise(a,b) {
//     return new Promise((resolve,reject)=>{
//         if(typeof a !== 'number' || typeof b !== 'number'){
//             reject("Both must be arguments ")
//         }else{
//             const sum = a+b;
//             resolve(sum)
//         }
//     })
// }


    
// sumPromise(5,10)

// .then(result=>{
//     console.log("sum:",result)
// })
// .catch(err=>{
//     console.error("ERror: ",err)
// })

//find a person aged less than 54 in a object

// const people = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 55 },
//     { name: "Charlie", age: 45 },
//     { name: "David", age: 60 },
//     { name: "Eve", age: 50 }
// ];

// const peopleUnder54 = people.filter(item => item.age<54)

// console.log(peopleUnder54)


//



// second largest number using forloop


// let arr = [1,3,4,5,2,3,4,5,3,10 ,7];

// let max = arr[0];
// let smax 

// for(let i = 1 ; i<arr.length ; i++){
//     if(max < arr[i]){
//         smax = max 
//         max = arr[i];
//     }else if(smax<arr[i]&&max>arr[i]) smax = arr[i]
// }

// console.log(max,smax)

//using reduce 
// let max = arr.reduce((accu,item)=> {
//     return item > accu ? item:accu
// },arr[0])

// console.log(max);



//  factorial
// function factorial(n){
//     let result = 1;
//     for(let i =2 ;i<=n ; i++){
//         result *=i
//     }
//     return result;
// }

// console.log(factorial(5));


//average
// const arr = [3,5,7,2,8,1]

// const sum = arr.reduce((acc,item) => acc+item ,0)

// console.log(parseFloat(sum/arr.length))

//count even numbers in array

// let arr = [1,211,3,4,5,6,7,8,0];

// let count = arr.filter((item)=> item%2 == 0 )
// console.log(count.length)


//sum of array in an object

// let arr = [{ab:[1,2,3,4,5,1]}]

// let sum = arr[0].ab.reduce((accu,item)=>{
//     return accu += item
// },0)
// console.log(sum);

// let sum = arr[0].ab.reduce((acc,item)=>{
//     return acc+item
// },0)
// console.log(sum);

// for(let i =0 ;i<arr[0].ab.length ; i++){

// }


//array flating and finding the sum

// let nestedArray = [
//     [1, 2, 3],            
//     [4, 5, 6],            
//     [7, 8, 9, 10],        
//     [11, 12],             
//     [13, 14, [15, 16]]    ];
// let arr = nestedArray.flat(2);
// console.log(arr);
// let sum = arr.reduce((acc,item)=>{
//     return acc+=item
// },0)

// console.log(sum);

//find unique numbers in array

let arr = [1,2,3,4,5,10,14,11,1,2,3,4]

let narr = []

// for(let i = 0 ; i < arr.length ; i++){
//     let num = arr[i]
//     if(arr.indexOf(num) === arr.lastIndexOf(num)){
//              narr.push(num)
//     }
// }

// console.log(narr);


// let unique = arr.reduce((accu,item)=>{
//         if(!accu.includes(item)){
//              accu.push(item)
//         }
//             return accu
// },[]) 

// console.log(unique);


//35.FIND UNIQUE NUMBERS IN AN ARRAY
// CONST A=[1,2,4,10] FIND THE NUMBER DID NOT PRESENT IN THIS ARRAY
// EG:3,5,6,7,8

// const arr = [1,2,4,10]
// let max = Math.max(...arr)
// console.log(max);
// const narr = []

// for(let i = 1 ; i < max ; i++){
//     if(!arr.includes(i)){
//        narr.push(i)
//     }
// }

// console.log(narr);

//36.CONST NAME=['rasha','riza'] CONVERT THE r LETTER IN TO UPPERCASE

// const name = ['rasha','riza']

// let newname = name.map((item)=>{
     
//    return item.replace(/r/g ,'R')
// })

// console.log(newname);


//37. print numbers from ther array

// const arr = [1,'r',2,'a',5,'h','e','l',7]

// for(let i = 0 ; i < arr.length ; i++){
//     if(typeof arr[i]== 'number' ){
//         console.log(arr[i]);
        
//     }
// }

//38. remove null and undefined 

// const arr = [1, '', 'hello', null, 'world', undefined, 42, NaN, 0];

// const filteredarr = arr.filter(item => item !== null && item !== undefined && !Number.isNaN(item) )

// console.log(filteredarr)

// 51. Check if a number is fraction number or not

// function checkFraction(num){
//     return num % 1 !== 0
// }

// console.log(checkFraction(3.6))

//52.CHECK IF THE LETTER 'L' IS PRESENT IN THE STRING 'HELLO' AND RETURN
// THE RESULT IN A PROMISE.

// function checkTheLetter(){
//     return new Promise((resolve,reject)=>{
//         const str = "Hello"
//         const letter = "L"

//         if(str.includes(letter)){
//             resolve(`The letter '${letter}' is present in tthe string ${str}.`)
//         }
//         else{
//             reject("The letter is not present in inthe string")
//         }
//     })
// }

// checkTheLetter()
//       .then(result=>console.log(result))
//       .catch(err => console.error(err))

// 50.CONST arr=[1,-2,-4,2,4,-6,] CONVERT POSITIVE NUMBERS IN TO NEGATIVE
// AND NEGATIVE IN TO POSITIVE

// const arr = [1,-2,-4,2,4,-6]

// let narr = arr.map((item)=> -item) // '-item' flips the sign of each number
// console.log(narr)

// 40. print first 10 even numbers using generator function

// function *Generator(){
//    let num = 0
//     while(true){
//         yield num+=5 ;
         
//     } 
//    }

// const gen = Generator();

// for(let i = 1 ; i <= 10 ; i++){
//     console.log(gen.next().value)
// }

// const arr = ["shaheers","saurav"]

// const uparr = arr.map((item)=>item.replace(/s$/,'S'))

// console.log(uparr);


//53. Sum of the square in ann array

// let arr = [1,5,3,3,4,2]

// let sqsum = arr.reduce((acc,item)=>{
//     return acc += item*item 
// },0)

// console.log(sqsum)

// let changing = arr.map(item=> item === 4 ? 40 : item)

// console.log(changing);


// function * generator(){
//     for(let i = 1 ; i<= 10 ; i++){
//         yield i*5
//     }
// }
// const gen = generator()

// for(let i = 1 ; i<= 10 ; i++){
//     console.log(gen.next().value);
    
// }

// const arr = [1, '', 'hello', null, 'world', undefined, 42, NaN, 0];

// const filtered = arr.filter(item => item !== null & item !== undefined && !Number.isNaN(item))

// console.log(filtered);


// function* generator(){
//     let num = 105 ;   
//     while(num>5){
//         yield num -=5
//     }
// }

// const gen = generator();

// for(let value of gen){
//     console.log(value);
// }


// const arr = [1,2,3,4,4,5,6,10]

// const nonrepeatinf = arr.filter((item)=> arr.indexOf(item) === arr.lastIndexOf(item))
// console.log(nonrepeatinf)


// unique elements in a array  by frequency fayiz method
// let arr = [1,2,3,4,2,1,2,21,1,5,4]
// let b = {}

// for(let i = 0 ; i < arr.length ; i++){
//     if(b[arr[i]]){
//         b[arr[i]]+=1
//     }else{
//         b[arr[i]] = 1
//     }
// }
// console.log(b)
// for(let j in b){
//     if(b[j] === 1)
//         console.log(j)
// }

     let a = 10 ;
     console.log(a)

