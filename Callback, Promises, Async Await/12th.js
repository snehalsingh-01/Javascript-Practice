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

//callback hell
function getData(dataId, getNextData){
    setTimeout(() => {
    console.log("Data",dataId)
    if(getNextData){
        getNextData();
    }
  },5000);
}

getData(1, ()=> { //callback hell
    getData(2, () => {
        getData(3);
    });
});