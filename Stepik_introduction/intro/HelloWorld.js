"use strict";
var message = 'Hello, world!';
var heading = document.querySelector('h1');
heading.textContent = message;
var numbs = ['one', 'two', 'three'];
var list = document.createElement('ul');
numbs.map(function (el) { return list.insertAdjacentHTML('beforeend', "<li>".concat(el, "</li>")); });
document.body.append(list);
