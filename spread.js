//when use the spread operator in array object it creates its copy not reference
//always create copy
const globalPlayer = {
    id : 701,
    name : "Jango",
  
    powerLevel : 100,
};
const player1 = {...globalPlayer}; //copying not referncing the value not will change
// const player1 = Object.assign({},globalPlayer); object method

player1.powerLevel = 50;

console.log(globalPlayer);
console.log(player1);

// concatinaation and push  using spread
 const globalPlayers = ["dilu","nihan","althu"];
 const globalPlayers1 = ["riya","sana","ayshu","ruwa"];

 console.log(globalPlayers);
 console.log(globalPlayers1);

// const player = globalPlayers.concat(globalPlayers1) doing this using spread operator
// console.log(player);

const player = [...globalPlayers,...globalPlayers1]; /// we can push array or a value in easy and simple using spread
console.log(player);



