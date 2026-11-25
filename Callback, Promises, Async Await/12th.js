//Asynchronous
console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hello");
}, 4000); // timeout

console.log("three");
console.log("four");

//Callbacks
function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, sum);//callback , calling a function into another function

