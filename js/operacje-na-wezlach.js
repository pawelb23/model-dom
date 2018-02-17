'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[3]; //przypisz do zmiennej istniejący węzeł

var newElement = document.createElement('p'); //stwórz nowy element;

console.log(newElement);

var newElementContent = document.createTextNode('To jest nowy paragraf'); //stwórz nowy tekst dla elementu p

newElement.appendChild(newElementContent); //dodaj tekst do elementu p

istniejacyWezel.appendChild(newElement);