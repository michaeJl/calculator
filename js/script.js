'use strict';

let li = document.getElementsByTagName('li'),
    menu = document.querySelector('.menu'),
    body = document.getElementById('body'),
    title = document.getElementById('title'),
    column = document.getElementsByClassName('column'),
    adv = document.getElementsByClassName('adv'),
    prom = document.getElementById('prompt');

    prom.textContent = prompt("Как Вы относитесь к технике apple?", '');

let five = document.createElement('li');
    five.classList.add('menu-item');
    five.textContent ='пятый пункт';
menu.appendChild(five);

for (let i =0; i < li.length; i++){
    li[i].style.borderColor = 'red';
}

document.body.style.backgroundImage = "url('img/apple_true.jpg')";
title.innerHTML = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv[0]);

