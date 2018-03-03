'use strict';
//
//if (e == null) //(!e) 
//{
//    var e = window.event;
//}

var secondLink = document.getElementsByTagName('a')[1]; //tworzymy zmienną z drugim linkiem

var thirdLink = document.getElementsByTagName('a')[2]; //tworzymy zmienną z trzecim linkiem

function alarm(e) {//funcje do elementó HTML przypisujemy poniżej
    e.preventDefault(); //zapobiegamy domyślenj akcji, tutaj bez tego po kliknięciu w Akapit Link2 od razu automatycznie kliknąłbysię Link 1 (ten niżej-czerwony) i zostalibyśmy przekierowani na stronę, która jest przypisana do tego linku czyli 'akademia 108'

    console.log('kliknięto kolejny link');
    thirdLink.style.backgroundColor = 'red';
    console.log(e.type);
}

secondLink.onclick = alarm; //wywołujemy funkcję alarm() na drugim linku po kliknięciu (funcka powyżej)



thirdLink.addEventListener('click', alarm);//sprawia, że pojawia się informacja kliknięto kolejny link oraz click --- ale nie zostajemy przekierowani na stronę 'Akademia 108' dopiero dzięki usunięciu tego zdarzenia (poniżej)przekierowani zostaniemy na tą stronę
thirdLink.removeEventListener('click', alarm);// po usunięciu dodanego wyżej enentu zostajemy przekierowani na stronę 'akademii 108'//nie da się usunąć funkcji anonimowej(bo trzeba podać dwa człony---na tym przykładzie [('click', alarm)]---gdzie click to co usuwamy, a alarm to nazwa funkcji, którą usuwamy)
//Wydaje mi się, że dwa powyższe zdarzenia nie są konieczne (bez nich wszystko funkcjonowałoby tak samo)

//Efekt powiększenia napisu po najechaniu
var mainHeader = document.getElementById('main-header');
//Przypisujemy nagłówek strony do zmiennej

//===Poniżej to co jest oddzielone znakami =, należy do jednej funkcji

function resize(e) { //przekazujemy zdarzenia jako parametr funkcji
    if (e.type == 'mouseover') { //sprawdzanie typu zdarzenia 
        mainHeader.style.fontSize = '70px'; // powiększenie tekstu
        mainHeader.style.color = 'red';//mój dopisek
    } else {
        mainHeader.style.fontSize = 'inherit' // przywrócenie domyślnej wielkości po zjechaniu
        mainHeader.style.color = 'inherit';//mój dopisek
    }

}

mainHeader.onmouseover = resize;
mainHeader.onmouseout = resize;

//====

function klikHeader() {
    console.log('kliknąłeś w header');
}

document.getElementsByTagName('header')[0].onclick = klikHeader;
//wywołaj funckję na elemencie header

function klikH1(e) {
    e.stopPropagation(); //sprawia, że np. w tym wypadku kod z klikHeader nie powiela się i tu, a także w konsoli pojawia się tylko informacja o ilości kliknięć, a nie są wypisywane wszystkie razy osobno (myślę - ale to tylko moje myślenie - , że warto dodać w każdej funkcji)
    console.log('Kliknąłęś w h1');
}

document.getElementsByTagName('h1')[0].onclick = klikH1; //wywołaj
// funkcję na elemencie H!