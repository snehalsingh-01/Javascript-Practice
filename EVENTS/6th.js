let btn1 = document.querySelector('#btn1');

/*btn1.onclick = () => {
    onclick="console.log('The button was clicked.')";
    alert('helloooooooo');
    let a = 25;
    a++;
    console.log(a);
};*/

//Event Listener
btn1.addEventListener("click", () => {
    console.log('The button was clicked.');
    let a = 25;
    a++;
    console.log(a);
});

const chai = (e) => {
    console.log(e);
};

btn1.addEventListener("click", chai);

btn1.addEventListener("contextmenu", () => {
    console.log('Right Clicked!');
});

//Removing Event Listener

btn1.removeEventListener("click", chai);

let btn2 = document.querySelector('#btn2');

/*btn2.ondblclick = (evt) => {
    console.log('This button was clicked 2x.');
    console.log(evt);
    console.log("Event Type =",evt.type);
    console.log("Event Target =",evt.target);
};*/

btn2.addEventListener("dblclick", () => {
    console.log('The button was clicked 2x.');
});


let div = document.querySelector('div');
div.onmouseover = () => {
   console.log('YOU ARE TOUCHING DIV!');
};