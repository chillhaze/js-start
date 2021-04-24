// let array = ['Mango', 'Poly', 'Ajax'];

// function getExtremeElements(array) {
//   let newArray = [array[0],[array.length-1]];
//   console.log(newArray);

// }
// console.log(array[0]);
// console.log(array.length);

// console.table(array);

// let title = 'Десять секретов JavaScript';
// function slugify(title) {
//   // Пиши код ниже этой строки
//   const normalzeTitle = title.toLowerCase();
//   console.log(normalzeTitle);
//  return title;
//   // Пиши код выше этой строки
// }

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

let numbers = [10, 20, 30, 11, 6, 8, 9, 14];
let value = 9;
console.table(numbers);

let newArr = []; 


for (let number of numbers) {

  if (number > value && number < 50) {
    newArr.push(number);
  }
}
console.table(newArr);





