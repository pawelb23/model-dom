'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[3]; //przypisz do zmiennej istniejący węzeł

var newElement = document.createElement('p'); //stwórz nowy element;

console.log(newElement);

var newElementContent = document.createTextNode('To jest nowy paragraf'); //stwórz nowy tekst dla elementu p

newElement.appendChild(newElementContent); //dodaj tekst do elementu p

istniejacyWezel.appendChild(newElement);

istniejacyWezel.removeChild(newElement);

var parFirstDiv = document.getElementById('parFirst');
parFirstDiv.replaceChild(newElement, istniejacyWezel);

//Dodaj znacznik <br> po każdym linku i usuń z nich atrybut klasy
var allLinks = document.querySelectorAll('a'); //przypisz do zmiennej
//tablicę ze wszystkimi linkami
//var allLinks = document.getElementsByTagName('a'); //alternatywa

//console.log(allLinks);
//Array.form('nodeList');

for (var i = 0; i < allLinks.length; i++) { //iteracja po tablicy
    var br = document.createElement('br'); //stwórz element <br>
    console.log(allLinks[i].parentNode);
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling); //dodaj br po każdym linku
    allLinks[i].removeAttribute('class'); //usuń atrybut klasy
}

