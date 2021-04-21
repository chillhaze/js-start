// const productName = "Mango";
// const pricePerItem = 150;
// const isOnSale = false;
// const error = null;

// let quantity;

// console.log(typeof error);
// console.log(typeof quantity);
// ================================================
// const apples = 45;
// const grapes = 135;

// const result = apples + grapes;

// console.log(result);
// ================================================
// let result = 108 + 223 - 2 *5;
// console.log(result);
// ================================================

// let radius = 10;

// const sqr = Math.PI * Math.pow(radius, 2);
// console.log(sqr);
// ================================================

// const name = "Gotra";
// const age = "28";
// const hobby = "fishing";

// const result = `Здравствуйте, меня зовут ${name}, мне ${age} лет , мне нравится ${hobby}.`;
// console.log(result);
// ================================================

// console.log('2' >= '23'); 

// // true
// // ищет true, если не нашел - false

// console.log('2'.charCodeAt(0));
// console.log('1'.charCodeAt(0));

// console.log('Ёнанас' < 'ёжик');

// console.log(undefined === null);
// ================================================

// const question = prompt("Какое официальное название JavaScript?")

// let answer = "Ecmascript";

// if (question === answer) {
//   console.log("Верно!");
// } else {
//   console.log("Не знаете? Ecmascript");
// }

// ================================================

// const a = 1;
// const b = 4;
// let result;

// a + b < 4 ? (result = "not enough") : (result = "too much");

// console.log(result);// ================================================

// const min = 14;
// const max = 90;
// let age = 27;

// if (age >= min && age <= max) {
//   console.log(age + " лет. " + "Верно!");
// }else {
//   console.log("НЕ ВЕРНО!");
// }
// ================================================

// общее количество минут
// const globalNinutes = 70;
// // узнаем сколько это часов
// const hours = Math.floor(globalNinutes / 60);
// // добавляем 0 перед часами
// const modifiedHours = String(hours).padStart(2, 0);
// // узнаем количество минут
// const minutes = globalNinutes % 60;

// const modifiedMinutes = String(minutes).padStart(2, 0);

// // выводмим в консоль
// const time = `${modifiedHours}:${modifiedMinutes}`

// console.log(time);
// ================================================
// цикл for от min до max
// const min = 10;
// const max = 100;

// for (let i = min; i <= max; i = i++) {
//   console.log(i);
// }
// ================================================

// цикл for от min до max
// const min = 10;
// const max = 100;

// for (let i = max; i >= min; i = i--) {
//   console.log(i);
// }
// ================================================

// const num1 = 2;
// const num2 = 20;
// // version 1
// for (let i = num1; i <= num2; i +=2) {
//   console.log(i);
// }
// // version 2
// for (let i = num1; i <= num2; i++) {
//   if (i % 2 === 0) {
//       console.log(i);
//   }
// }
// ================================================

let input = prompt('введите число выше 100');
let check = false;

// do {
//   if (Number(input) <= 100) {
//     check = true;
//     input = prompt('введите число выше 100');
//   } else if (Number(input) > 100){
//     check = true;
//     input = prompt('спасибо, вы ввели число выше 100');
//   } else if (input !== Number) {
//     check = true;
//     input = prompt('!!! введите число а не строку');
//   } else  {
//     check = false;
//   }
// } while(check);

do {
  if (input = Number(input)) {
    if (input <= 100) {
      input = prompt('введите число выше 100');
      check = true;
    } else {
      input = prompt('спасибо! вы ввели число выше 100');
      check = false;
    }
  } else {
    input = prompt('!!!введите число!!!');
    check = true;
    }
} while (check);




// !!!!!!!!!!добавить проверку на null и проверку на number
// ================================================
// !!!!!!!!!!задача 5 переписать на switch, или н а if + на тернартый

