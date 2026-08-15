let marks = [87, 86, 94, 77, 99];
console.log(marks);
console.log(marks.length);
let sum = 0;

//finding the average of the marks
for(let i = 0; i < marks.length; i++){
    sum += marks[i];
}
let avg = sum / marks.length;
console.log(avg);

let sum1 = 0;
//for-of-loop
for(let val in marks){
    sum1 += val;
}
let avg1 = sum / marks.length;
console.log(avg1);

//using for loop to print all the array
for(let i = 0; i < marks.length; i++){
    console.log(marks[i]);
}

//using for-of-loop
for(let val of marks){
    console.log(val);
}

let avengers = ["ironman","hulk","spiderman","thor","captain america"];
for(let val of avengers){
    console.log(val.toUpperCase());
}

//Q. For a given array with prices of 5 items - [250, 645, 300, 900, 50].
//All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let array = [250,645,300,900,50];
let offer = 0;
for(i = 0; i < array.length; i++){
    offer = array[i] / 10;
    array[i] -= offer;
}

for(let val of array){
    console.log(val);
}

// array methods
let food = ["tomato","potato","onion","palak"];
//push
console.log(food);
food.push("gobhi");
console.log(food);

//pop
food.pop();
console.log(food);

//covert to string
console.log(food.toString());

let fruit = ["apple","litchi","kiwi"];
//concat - adds array
console.log(food.concat(fruit));

//unshift
fruit.unshift("mango");
console.log(fruit);

//shift
fruit.shift("mango");
console.log(fruit);

//slice
console.log(food.slice(2,));

let arr = [1,2,3,4,5,6,7,8];
//splice
arr.splice(3,1,100)
console.log(arr);