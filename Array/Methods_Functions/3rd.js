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