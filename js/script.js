// append title hello world into the body
const title = 'Hello World';
const main = document.getElementById('main');

// create a new element
const h1 = document.createElement('h1');
h1.innerText = title;

// append the new element to the body
main.appendChild(h1);



