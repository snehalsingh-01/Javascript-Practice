console.log(document.body);
console.log(document.head);
console.log(window.document);
console.log(document.body.childNodes[1]);

document.body.childNodes[2].innerText = "abcd";
console.log(document.body.childNodes[2]);

//DOM Manipulation

//selecting with id
let heading = document.getElementById("Heading");
console.dir(heading);

//selecting with class
let classs = document.getElementsByClassName("context");
console.dir(classs);
console.log(classs);


