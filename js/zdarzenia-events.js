'use strict';

if (e == null) //(!e) 
{
    var e = window.event;
}

var secondLink = document.getElementsByTagName('a')[1]; //tworzymy zmienną z drugim linkiem

function alarm(e) {
    e.preventDefeult(); //zapobiegamy domyślenj akcji
    
    console.log('kliknięto kolejny link');
    
    console.log(e.type);
}