// variable shadowing

let value = 10

function example() {
    let value = 5
    console.log(value)
}
example()
console.log(value);
