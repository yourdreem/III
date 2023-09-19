let DoneRandome = [];


 function GeneratetRandom() {
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Рандом для первого числа
const rand1 = arr1[Math.floor(Math.random() * 9)];
const arr2 = arr1.filter(function(item) {
  return item !== rand1;
});

// Рандом для второго числа
const rand2 = arr2[Math.floor(Math.random() * 8)];
const arr3 = arr2.filter(function(item) {
  return item !== rand2;
  return item !== rand1;
});

// Рандом для третьего числа
const rand3 = arr3[Math.floor(Math.random() * 7)];
const arr4 = arr3.filter(function(item) {
  return item !== rand3;
});

// Рандом для четвертого числа
const rand4 = arr4[Math.floor(Math.random() * 6)];
const arr5 = arr4.filter(function(item) {
  return item !== rand4;
});

// формируем массив из полученого рандома
  DoneRandome = [
  rand1, rand2, rand3, rand4
]


// выводим в html поля для ввода данных 
console.log(DoneRandome);
const Done = document.querySelector('.done');
Done.innerHTML ='ИГРА НАЧАЛАСЬ!<br> У ТЕБЯ 10 ПОПЫТОК!<br> СТАРТУЙ!';

const Input = document.querySelector('.input');
Input.innerHTML =`<input id='number' type=number placeholder='введи 4х значное число' class="forplayer" required>
  <button class="send" onclick=GameStart()>GO</button>`;


  // очистка button start
  const Buttonend = document.querySelector('.wrap'); 
  Buttonend.remove();

};


// ПРОЦЕСС ИГРЫ
// ПРОЦЕСС ИГРЫ
// ПРОЦЕСС ИГРЫ

let i = 0;
let valueplayerhtml = '';

function GameStart() {
const Send = document.querySelector('.send');
const Value = document.getElementById("number").value;
const Game = document.querySelector('.game');

//  проверяем на заполненость инпут и ко_во символов
if((Value === '') || (Value.length < 4) || (Value.length > 4)) {
  alert("Не прокатит,дружок! Введи 4х значное число");
} else { 

  //  записываем ответ пользователя в переменную
let valueplayer = Value;

// переводим ответ пользователя в массив
let arrayPlayer = [...valueplayer.toString()].map(Number);

// Проверка массива на быки и коровы
let arrresalt =[];
let resalt1 ='';
let resalt2 ='';
let resalt3 ='';
let resalt4 ='';
  if(arrayPlayer[0] === DoneRandome[0]) { 
  resalt1 = 'B'
} else if (arrayPlayer[0] === DoneRandome[1] || arrayPlayer[0] === DoneRandome[2] || arrayPlayer[0] === DoneRandome[3]) {
  resalt1 = 'K'
} 
if(arrayPlayer[1] === DoneRandome[1]) { 
  resalt2 = 'B'
} else if (arrayPlayer[1] === DoneRandome[0] || arrayPlayer[1] === DoneRandome[2] || arrayPlayer[1] === DoneRandome[3]) {
  resalt2 = 'K'
} 
if(arrayPlayer[2] === DoneRandome[2]) { 
  resalt3 = 'B'
} else if (arrayPlayer[2] === DoneRandome[0] || arrayPlayer[2] === DoneRandome[1] || arrayPlayer[2] === DoneRandome[3]) {
  resalt3 = 'K'
} 
if(arrayPlayer[3] === DoneRandome[3]) { 
  resalt4 = 'B'
} else if (arrayPlayer[3] === DoneRandome[1] || arrayPlayer[3] === DoneRandome[2] || arrayPlayer[3] === DoneRandome[0] ) {
  resalt4 = 'K'
} 

arrresalt = [resalt1, resalt2, resalt3, resalt4]
console.log(arrresalt)
let countB = '';
let countK = '';

countB = arrresalt.filter(item => item === 'B').length 
countK = arrresalt.filter(item => item === 'K').length 

console.log(countB)
console.log(countK)

if (countB === 4) {
  document.location='win.html';
} 
// формируем айди для таблицы и выводим ее в html, очищаем поле инпут
i = ++i;

if (i === 10) {
  document.location='looser.html';
}

  valueplayerhtml += `<tr id='${i}'>
  <td>${i}</td>
  <td>${valueplayer}</td>
  <td>B:${countB} K:${countK}</td>
  </tr>`;

 const tablhtml =`<div class="game_text">ТВОИ ЖАЛКИЕ ПОПЫТКИ</div>
<table>
  <tr>
    <td>ПОПЫТКА</td>
    <td>ЗНАЧЕНИЕ</td>
    <td>РЕЗУЛЬТАТ</td>
  </tr>
    ${valueplayerhtml}`;

  Game.innerHTML = tablhtml;
  const Input = document.querySelector('.forplayer');
  Input.value = '';

 };
};





