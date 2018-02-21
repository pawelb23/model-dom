'use strict'; // trzeb użyć ctrl + s

console.log (window);
console.log (window.innerHeight);
console.log (window.outerHeight);

console.log(document);

var parFirst = document.getElementById('parFirst');
console.log(parFirst);

var linki = document.getElementsByClassName('superlink');
console.log(linki);

//for each --- nie działa na HTMLCollection

var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

var divPoID = document.querySelector('#parSecond');
console.log(divPoID);

var pierwszyLinkPoSelektorze =
    document.querySelector('.superlink');
console.log(pierwszyLinkPoSelektorze);

var linkiPoSelektorze =
    document.querySelectorAll('.superlink');
console.log(linkiPoSelektorze);

