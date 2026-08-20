//Attributes

let div = document.querySelector("div");
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