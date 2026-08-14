console.log('hello sweety');
let z = "hello";
console.log(z+123);

//making an object (student)
const student  = {
    name : "Sweety",
    theClass : 12,
    age : 19,
    // key : value (pair)
};

student ["age"] = student ["age"] + 1;
console.log(student.age);

const Product = {
    name : "Parker Jotter Standard CT Ball Pen(Black)",
    rating : 4,
    isDeal : true,
    price : 270,
    offer : 5,
};
console.log(Product);

// Arithmetic Operators

let a = 5;
let b = 2;

console.log("a = ", a, "& b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b); // 5^2

//Comparision operator
console.log("5 != 2", a != b);
console.log("a == b ",a == b);
console.log("a !== b",a !== b);

//logical operator
// Logical Operators

let a1 = 6;
let b1 = 5;

let cond1 = a1 < b1; // false
let cond2 = a1 === 6; // true

console.log("cond1 && cond2 = ", a1 < b1 && a1 === 6);
console. log ("! (6<5) =",! (a1 < b1)); //false

// Terenary Operators

let age = 25;

let result1 = age >= 18 ? "adult" : "not adult";
console.log(result1);
