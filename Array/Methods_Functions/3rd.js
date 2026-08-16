function myF(){//func define
    console.log("Hello everyone");
    console.log("I am practicing Javascript");
}
myF();//func call

function Func(msg){//parameter
    console.log(msg);
}
Func("Hiiiiiiiiiiiiiiii:)");//arguement

//Function for calculating the sum of 2 no.s 
function sum(x,y){// x,y are local variables
    s = x + y;
    return s;
}
let val = sum(3,7);
console.log(val);

//arrow function
const arrowMul = (a,b) =>{
    console.log(a*b);
}
arrowMul(7,5);

//Q1.Create a function using the `function` keyword that takes a **String as an argument** and returns the **number of vowels in the string**.

let count = 0;
function countVowels(str){
    for(const char of str){
        if(char === "a"||char === "e"||char === "i"||char === "o"||char === "u"){
            count ++;
        }
    }
    return count;
}
console.log(countVowels("sweety"));
//Q2.Create an **arrow function** to perform the **same task**.

let count1=0;
const countV = (str) =>{
    for(const char of str){
        if(char === "a"||char === "e"||char === "i"||char === "o"||char === "u"){
            count1 ++;
        }
    }
    return count1;
}
console.log(countV("apple"));

//foreach loop in array
let arr = ["Pune","Mumbai","Delhi","Hyderabad"];
arr.forEach((val, idx, arr) => {
    console.log(val, idx, arr);
});

//Q. For the given array of no.s, print the square of each value.
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach((num) =>{
    console.log(num*num);
});

//alternative method to write
let squareN = arr1.forEach((num) =>{
    console.log(num*num);
});

console.log(squareN);

//Array Methods
//map

let nums = [1,2,3,4,5];
let newArr = nums.map((val) => {
    console.log(val * 2);
});

//filter

let newA = nums.filter((val) => {
    return val % 2 === 0;
});
console.log(newA);

//reduce

const output = nums.reduce((prev,curr) => {
    return curr + prev;
})
console.log(output);

//finding the max/biggest num
const outputt = nums.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
})
console.log(outputt);