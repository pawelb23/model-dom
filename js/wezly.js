'use strict';

var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);

console.log(pierwszyDiv.childNodes);                
//wyświetli ilość elementów liczoną także jako przerwy
//console.log(pierwszyDiv.childNodes[3]);
console.log(pierwszyDiv.children);
//liczy wszystkie znaczniki
//
console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);

var pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.nextSibling);

var childNodesDiva = pierwszyDiv.childNodes;

childNodesDiva.forEach(function (element) {
    if(element.nodeType == 8) {
        console.log(element);
    }
});