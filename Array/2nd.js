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