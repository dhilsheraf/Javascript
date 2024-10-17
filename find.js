const globalPlayer = [
    {
       id : 1,
       name : "jangoo",
       age : 18 
    },
    {
        id : 1,
        name : "kunikunnan",
        age : 18 
     }
   ,{
    id : 1,
    name : "unnikuttan",
    age : 18 
 }   
]
const newObj = globalPlayer.find((value) => value.name === "jangoo")
console.log(newObj);