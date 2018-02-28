'use strict';

var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
//var pierwszyDiv = document.getElementById('parFirst').parentNode;//to ten sam zapis co w powyższych linijkach tylko trochę dalej mniej linijek zostało użytych po tym należy jeszcze oczywiście zrobić //console.log(pierwszyDiv);
console.log(pierwszyDiv.parentElement);

console.log(pierwszyDiv.childNodes);                
//wyświetli ilość elementów liczoną także jako przerwy
//console.log(pierwszyDiv.childNodes[3]);
console.log(pierwszyDiv.children);
//liczy wszystkie znaczniki
//
console.log(pierwszyDiv.firstChild);//pusta przestrzeń czyli #tekst
console.log(pierwszyDiv.lastChild);//pusta przestrzeń czyli #tekst

var pierwszyChild = pierwszyDiv.childNodes[0];//wyświetli w konsoli napis #text --- tak naprawdę oznacza on pustą przestrzeń pomiędzy div'em, a <p onclick...
console.log(pierwszyChild);// to odnosi się do powyższego komentarza
console.log(pierwszyChild.nextSibling);//kolejny będzie element p onclick... (to się wyświetli jak następne rodzeństwo pustego pola)

var childNodesDiva = pierwszyDiv.childNodes;

childNodesDiva.forEach(function (element, indeks) {
    if(element.nodeType == 8) {
        console.log('Numer indeksu --- ' + indeks + '; oraz element, którego szukamy (w tym wypadku 8 - czyli komentarz)' + element);
         console.log(element, indeks, 'ten sam zapis jeszcze raz (komentarz + indeks)');
    }
});