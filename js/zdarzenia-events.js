'use strict';

//if (e == null) //(!e) 
//{
//    var e = window.event;
//}

var secondLink = document.getElementsByTagName('a')[1]; //tworzymy zmienną z drugim linkiem

var thirdLink = document.getElementsByTagName('a')[2]; //tworzymy zmienną z trzecim linkiem

function alarm(e) {
    e.preventDefault(); //zapobiegamy domyślenj akcji

    console.log('kliknięto kolejny link');
    thirdLink.style.backgroundColor = 'red';
    console.log(e.type);
}

secondLink.onclick = alarm; //wywołujemy funkcję alarm() na drugim linku po kliknięciu



thirdLink.addEventListener('click', alarm);

thirdLink.removeEventListener('click', alarm);

//Efekt powiększenia napisu po najechaniu
var mainHeader = document.getElementById('main-header');
//Przypisujemy nagłówek strony do zmiennej

function resize(e) { //przekazujemy zdarzenia jako parametr funkcji
    if (e.type == 'mouseover') { //sprawdzanie typu zdarzenia 
        mainHeader.style.fontSize = '70px'; // przywróć domyślną wielkość po zjechaniu
    } else {
        mainHeader.style.fontSize = 'inherit' // przywrócenie domyślnej wielkości po zjechaniu
    }

}

mainHeader.onmouseover = resize;
mainHeader.onmouseout = resize;

function klikHeader() {
    console.log('kliknąłeś w header');
}

document.getElementsByTagName('header')[0].onclick = klikHeader;
//wywołaj funckję na elemencie header

function klikH1(e) {
    e.stopPropagation(); //odkomentować, żeby pokazać zatrzymanie propaginacji
    console.log('Kliknąłęś w h1');
}

document.getElementsByTagName('h1')[0].onclick = klikH1; //wywołaj
// funkcję na elemencie H!
