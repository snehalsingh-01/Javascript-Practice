//Attributes

/*let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let myclass = document.querySelector(".myclass");
console.log(myclass);

let id2 = myclass.getAttribute("class");
console.log(id2);

console.log(myclass.setAttribute("class","newClass"));

//style
div.style.fontSize = "25";
console.dir(div.style);
//div.innerText = "THIS IS A DIV";

//inserting elements

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

let div1 = document.querySelector("div");
//div1.append(newBtn);
//div1.prepend(newBtn);
//div1.before(newBtn);
div1.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerText = ("Javascript");;
console.log(newHeading);

document.querySelector("body").prepend(newHeading);

//to remove elements
newHeading.remove();
*/


//Q1. Create a new button element. Give it a text “click me”, background color of red & text color of white. Insert the button as the first element inside the <body> tag.
let newBtn = document.createElement("button");
newBtn.style.background = ("red");
newBtn.style.color = ("white");
newBtn.innerHTML = ("Click me!") ;
console.log(newBtn);
document.querySelector("body").prepend(newBtn);

//Q2. Create a <p> tag in HTML, give it a class & some styling. Now create a new class in CSS and try to append this class to the <p> element. Did you notice, how you overwrite the class name when you add a new class? Solve this problem using classList.
let para = document.querySelector("p");
para.classList.add("newClass");
para.classList.remove("newClass");
