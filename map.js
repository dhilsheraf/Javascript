const globalPlayer = [
    {id : 0,
     name :"althaf",
     age : 17
    },
    {id : 1,
        name :"dhilsheraf",
        age : 18
       },
       {
        id : 3,
        name :"Nihan",
        age : 19
       },
];


const newArray = globalPlayer.map(((value)=>value.name));

console.log(newArray);
