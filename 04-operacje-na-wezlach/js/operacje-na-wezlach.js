'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[3]; //przypisz do zmiennej istniejący węzeł --- children 3 to pusty div (wksazujemy przez children, gdyż ta metoda liczy tylko elementy html - nie liczy komentarzy, przerw, itp.)

var newElement = document.createElement('p'); //stwórz nowy element;

console.log(newElement);

var newElementContent = document.createTextNode('To jest nowy paragraf'); //stworzy nowy tekst (w następnej linijce dodany on zostanie do nowego elementu 'p')

newElement.appendChild(newElementContent); //stworzony wcześniej tekst doda do stworzonego wcześniej paragrafu

istniejacyWezel.appendChild(newElement);//ustalona wcześniej ścieżka "istniejacyWezel" sprawi, że paragraf i tekst w tym paragrafie pojawią się w pustym dotychczas divie (czyli <p>To jest nowy paragraf</p>)

istniejacyWezel.removeChild(newElement);//usuwa element

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
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);//umieści br po ostatnim a (dzięki nextSibling)
    //dodaj br po każdym linku
    allLinks[i].removeAttribute('class'); //usuń atrybut klasy
//=============== do funckji
//    allLinks[i].parentNode.insertBefore(br, allLinks[i].previousSibling);//umieści br przed pierwszym a (dzięki previousSibling)
}


//var link = document.getElementsByClassName('link')[0];//to jest prawidłowy zapis wzięty z innego przykładu


//========================= bez funkcji br
//var brNew = document.createElement('br'); 
//document.getElementById('parSecond').insertBefore(brNew);
//==========================
//                       próba dodania argumentu
//var proba = document.getElementsByTagName('[onclick]');
//
//console.log(proba);
//
//proba.setAttribute('href', 'abc');