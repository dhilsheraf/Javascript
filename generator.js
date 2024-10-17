function* greeting(name){
          yield "hai"
          yield "how  are you bru"
          yield name
}
const greet = greeting("adam");
console.log(greet.next().value);
console.log(greet.next().value);
console.log(greet.next().value);

function* gen(name){
    yield "hai"
    yield "haloo"
    yield name
}
const printn = gen("Jango");
console.log(printn.next().value);


