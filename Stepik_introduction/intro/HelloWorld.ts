const message: string = 'Hello, world!';
const heading = document.querySelector('h1');
heading.textContent = message;

let numbs: string[] = ['one', 'two', 'three'];
const list = document.createElement('ul');
numbs.map(el => list.insertAdjacentHTML('beforeend', `<li>${el}</li>`));

document.body.append(list);