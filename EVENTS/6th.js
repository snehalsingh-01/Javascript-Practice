let btn1 = document.querySelector('#btn1');

btn1.onclick = () => {
    onclick="console.log('The button was clicked.')";
    alert('helloooooooo');
    let a = 25;
    a++;
    console.log(a);
};

let btn2 = document.querySelector('#btn2');

btn2.ondblclick = (evt) => {
    console.log('This button was clicked 2x.');
    console.log(evt);
    console.log("Event Type =",evt.type);
    console.log("Event Target =",evt.target);
};

let div = document.querySelector('div');
div.onmouseover = () => {
   console.log('YOU ARE TOUCHING DIV!');
};