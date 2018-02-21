'use strict';

var mainHeader = document.getElementById('main-header'); //przypisujemy nagłówek strony do zmiennej

mainHeader.innerHTML = 'Treść nagłówka'; //dodajemy treść do nagłówka

mainHeader.innerText = 'Treść nagłówka'; //podobnie jak w przypadku innerHTML

//mainHeader.outerHTML = '<p> Treść nagłówka </p>'; // zamienia header na zwykły paragraf

var link = document.getElementsByClassName('link')[0]; //przypisujemy pierwszy link do zmiennej 

link.href = 'http://akademia108.pl'; //nadpisujemy atrybut href w linki

link.className = 'nowa-klasa'; //nadpisujemy nazwę klasy w linku

console.log(link.classList); //nadpisujemy nazwę klasy w linku

link.classList.add('nowa-nowa-klasa'); //dodajemy kolejną klasę

mainHeader.style.backgroundColor = 'yellow';
