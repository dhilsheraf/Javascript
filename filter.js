const ar = [
    {
        name : "althaf",
        age : 17,
        place : "Parayangad"
    },
    {
        name : "Nihan",
        age : 18,
        place : "Eramangalam"
    },
    {
        name : "Dhilsheraf",
        age : 21,
        place : "kallingala"
    }
]
const newArray = ar.filter((value) => value.age < 20);
console.log(newArray);

const newar = ar.filter((value) => {
           return value.age > 20
})

console.log(newar);
