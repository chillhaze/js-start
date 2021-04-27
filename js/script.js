// --------------------------------Модуль 2/9
// let array = [5, 3, 4, 5, 78, 9];
// console.table(array);

// let fE = array[0];
// console.log(fE);
// let lE = array[array.length-1];
// console.log(lE);
// const newArr = [fE,lE]
// console.log(newArr);

// let array = ['Mango', 'Poly', 'Ajax'];

// function getExtremeElements(array) {
//   let newArray = [array[0],[array.length-1]];
//   console.log(newArray);

// }
// console.log(array[0]);
// console.log(array.length);

// console.table(array);

// --------------------------------Модуль 2/13
// let title = 'Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ';
// console.log(title);
// let arr = title.toLocaleLowerCase();
// console.log(arr);
// let slugTitle = arr.split(' ');
// console.log(slugTitle);
// slugTitle = slugTitle.join('-')
// console.log(slugTitle);

// let title = 'Десять секретов JavaScript';
// function slugify(title) {
//   // Пиши код ниже этой строки
//   const normalzeTitle = title.toLowerCase();
//   console.log(normalzeTitle);
//  return title;
//   // Пиши код выше этой строки
// }

// --------------------------------Модуль 2/16
// function makeArray(firstArray, secondArray, maxLength) {

// let newArr = [];

// newArr = firstArray.concat(secondArray);

//   if (newArr < maxLength) {
//     return newArr;
//   }
//     return newArr.slice(0,maxLength);
// }

// let firstArray = ['Манго', 'Поли'];
// let secondArray = ['Аякс', 'Челси', 'Поли', 'Хьюстон'];
// let maxLength = 4;
// console.table(firstArray);
// console.table(secondArray);

// let call = makeArray(firstArray,secondArray,maxLength);
// console.table(call);

// function findLongestWord(string) {
//   let longestWord = '';
//   const arr = string.split(' ');
//   // console.log(arr);

//   for (let elem of arr) {
//   	if (elem.length > longestWord.length)
//       longestWord = elem;
//   }
// 	return longestWord;
// }
// // console.log(findLongestWord('a, aa, aaa, aaaa, aaaaa, aaaaaaaa')); - быстрый вызов функции

// let string = 'The quick brown fox jumpedddd over the lazy dog';
// console.log(string);
// const fn = findLongestWord(string);

// findLongestWord(string);
// console.log(fn);

// --------------------------------Модуль 2/18
// function calculateTotal(number) {
//   // Пиши код ниже этой строки
// let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
// 	sum += i;
//   }
// 	return sum

//   // Пиши код выше этой строки
// }

// --------------------------------Модуль 2/20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
// for (let i = 0; i <= order.length-1; i +=1) {
// 	total += order[i];
// }
//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([1, 1, 5]));

// --------------------------------Модуль 2/21

// const string = ['Mango', 'Polymer', 'Ajax'];

// let string = 'Google do a roll';
// console.log(string);
// console.log(typeof(string));

//   let longestWord ='';

//   string = string.split(' ');
//   console.table(string);
//   console.log(typeof(string));

//   for (let i = 0; i < string.length; i += 1) {

//     let anyWord = string[i];
//   	if (anyWord.length > longestWord) {
//     	longestWord = anyWord;
//     }
//   }

//   console.log(longestWord);

// --------------------------------Модуль 2/22
// let min = 3;
// let max = 10;

//   let numbers = [];
//   console.log(numbers);

//   for (let i = 0; i <= max; i += 1) {
//       numbers.push(i);
//   }

// console.table(numbers);

// --------------------------------Модуль 2/23
// 1. создать новый массив

// 2. узнать какие элементы больше чем value

// 3. добавить их в новый масив

// let numbers = [10, 20, 30, 11, 6, 8, 9, 14];
// let value = 9;
// console.table(numbers);

// let newArr = [];

// for (let number of numbers) {

//   if (number > value && number < 50) {
//     newArr.push(number);
//   }
// }
// console.table(newArr);

// --------------------------------Модуль 2/25

// let array1 = [10, 20, 40, 11];
// let array2 = [ 40, 11, 6, 8, 9];
// console.log(array1);
// console.log(array2);

// let newArray = [];

// for (let i = 0; i < array1.length; i += 1) {
//   if (array2.includes(array1[i])) {
//     newArray.push(array1[i]);
//   }
// }
// console.log(newArray);

// --------------------------------Модуль 2/25+практика
// const result = function findSameNumbers(array1, array2) {
//   let newArray = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
//   console.table(newArray);
// }

// let array1 = [10, 20, 40, 11];
// let array2 = [ 40, 11, 6, 8, 9];
// console.log(array1);
// console.log(array2);

// const r1 = result (array1, array2)
// console.log('Same numbers are: ', r1);

// array1 = [1, 2, 4, 11];
// array2 = [ 4, 11, 6, 8, 9];
// const r2 = result (array1, array2)
// console.log('Same numbers are: ', r2);

// --------------------------------Модуль 2/29
// function getEvenNumbers(start, end) {

//   let newArray = [];

//   for (let i = start; i <= end; i +=1) {
//     if (i % 2 === 0) {
//       newArray.push(i)
//     }
//   }
//   return newArray
//   console.log(newArray);
// }

// let start = 1;
// let end = 6;
// console.log('Начало c: ',start);
// console.log('Конец до: ',end);

// let task29Function = getEvenNumbers(start, end);
// console.log(task29Function);

// start = 10;
// end = 34;
// task29Function = getEvenNumbers(start, end);
// console.log(task29Function);

// // --------------------------------Модуль 2/32
// function includes(array, value) {
//   // Пиши код ниже этой строки
//   let res1;

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//         res1 = true;
//         break;
//       } else {
//         res1 = false;
//       }
//   }
//     return res1;
//     // Пиши код выше этой строки
// }

// let array = [1, 2, 4, 11];
// let value = 3;
// let findValue = includes(array, value);
// console.log(typeof(findValue));
// console.log(findValue);

// // --------------------------------Модуль 2/ функции практика
// const findSameNumbers = function (
//   array,
//   ...args
// ) {
//   console.log("array items: ", array);
//   console.log("args items: ", args);

//   let sameNumrers = [];

//   for (const elem of array) {
//     if (args.includes(elem)) {
//       sameNumrers.push(elem);
//     }
//   }
//   return sameNumrers;
// };

// console.log(
//   findSameNumbers(
//     [1, 2, 3, 4, 5],
//     10,
//     15,
//     2,
//     3,
//     22
//   )
// ); // 2, 3
// console.log(
//   findSameNumbers(
//     [10, 15, 2, 3, 22],
//     10,
//     15,
//     20,
//     30,
//     22
//   )
// ); // 10, 15, 22
// console.log(
//   findSameNumbers(
//     [100, 200, 300, 400, 500],
//     10,
//     15,
//     200,
//     300,
//     22
//   )
// ); // 200, 300

// --------------------------------Модуль 2/ функции практика
// const findSameNumbers = function (
//   array,
//   ...args
// ) {
//   // console.log("array items: ", array);
//   // console.log("args items: ", args);

//   let sameNumrers = [];

//   for (const i of array) {
//     for (const j of args) {
//       if (j === i) {
//         sameNumrers.push(j);
//       }
//     }
//   }
//   return sameNumrers;
// };

// console.log(
//   "Unique elements are: ",
//   findSameNumbers(
//     ["mango", "poly", "adam"],
//     "poly",
//     "chain",
//     "slava",
//     "edik"
//   )
// ); // 2, 3
// console.log(
//   "Unique elements are: ",
//   findSameNumbers(
//     ["chain", "slava", "adam"],
//     "pedro",
//     "chain",
//     "slava",
//     "vitya"
//   )
// ); // 10, 15, 22
// console.log(
//   "Unique elements are: ",
//   findSameNumbers(
//     ["vitya", "java", "katka"],
//     "pedro",
//     "java"
//   )
// ); // 200, 300
