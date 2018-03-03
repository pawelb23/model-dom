'use strict';

var mainHeader = document.getElementById('main-header'); //przypisujemy nagłówek strony do zmiennej

mainHeader.innerHTML = 'Treść nagłówka'; //dodajemy treść do nagłówka

mainHeader.innerText = 'Treść nagłówka'; //podobnie jak w przypadku innerHTML
console.log(mainHeader.innerHTML);//powinno podawać wszystko np.<p>Treść nagłówka</p> (ale tu, u mnie tak nie robi) --- niżej działający przykład z divem
console.log(mainHeader.innerText);//wyświetli samo 'Treść nagłówka'
//mainHeader.outerHTML = '<p> Treść nagłówka </p>'; // zamienia header na zwykły paragraf

var link = document.getElementsByClassName('link')[0]; //przypisujemy pierwszy link do zmiennej 

link.href = 'http://akademia108.pl'; //nadpisujemy atrybut href w linki

link.className = 'nowa-klasa'; //nadpisujemy nazwę klasy w linku

console.log(link.classList); //nadpisujemy nazwę klasy w linku

link.classList.add('nowa-nowa-klasa'); //dodajemy kolejną klasę

mainHeader.style.backgroundColor = 'yellow';

//=======================
document.getElementById('parSecond').style.color = 'red';
//document.getElementById('parSecond').getElementsByTagName('p').style.color = 'blue';// tak się nie da, ale dlaczego ???

//=========================

//dodane sprawdzenie jak działa innerHTML
var divDwa = document.getElementById('parSecond');
console.log(divDwa.innerHTML);//tutaj w konsoli, elegancko wyświetla całość razem z paragrafem

