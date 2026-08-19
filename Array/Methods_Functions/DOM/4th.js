console.log(document.body);
console.log(document.head);
console.log(window.document);
console.log(document.body.childNodes[1]);

document.body.childNodes[2].innerText = "abcd";
console.log(document.body.childNodes[2]);

//DOM Manipulation (accessing elements of html pg)

//selecting with id
let heading = document.getElementById("Heading");
console.dir(heading);

//selecting with class
let classs = document.getElementsByClassName("context");
console.dir(classs);
console.log(classs);

//Query Selector

//selecting with tag
let para = document.getElementsByTagName("p");
console.dir(para);
console.log(para);

let elements = document.querySelector("p"); //access 1st element
console.dir(elements);

let allelements = document.querySelectorAll("p"); //access all elements
console.dir(allelements);

let a = document.querySelector(".context"); //access 1st element
console.dir(a);

let b = document.querySelectorAll(".context"); //access all elements
console.dir(b);

//In tag, it cannot access all elements
let c = document.querySelector("#Heading"); //access 1st element
console.dir(c);

console.dir(document.body.firstChild);
console.dir(document.querySelector("div").children);

//Q.Create a h2 element and append "xyz" to the text using JS.
let h2 = document.querySelector("h2");
console.dir(h2);
console.dir(h2.innerText + "I am Sweety.");

//Q.Create 3 divs with common class name.Access and add some text in it.
let divs = document.querySelectorAll(".box");
console.dir(divs);
divs[0].innerText = ("I");
divs[1].innerText = ("am");
divs[2].innerText = ("Pretty :)");

//OR
let idx = 0
for(div of divs){
    div.innerText = "New value is ${idx}";
    idx++;
}