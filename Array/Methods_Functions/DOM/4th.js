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

