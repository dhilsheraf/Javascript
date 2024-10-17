const globalPlayer = [ 
    {
    id:77,
    name : "Althaf",
    position : "CEO"
},
{
    id:66,
    name : "Nihan",
    position : "CEO"
},
{
    id:55,
    name : "Dhilsheraf",
    position : "Employee"
},
];
/*if we need to print it we print it using for loop each element
so here we use for each and we can print it simply
*/ 
//Normal method that we use 
/*
for (let i=0;i<globalPlayer.length;i++){
    console.log(globalPlayer[i]);
                                can simplify it using foreach
}
    */
   //using foreach
//  globalPlayer.forEach(function(value,index,array){
//     console.log(value.name);
//     console.log(index);
//     console.log(array);
//  })

 //foreach using arrow method
 globalPlayer.forEach((value,index,array)=>{
         console.log(value.name);
         
 });