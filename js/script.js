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
let min = 3;
let max = 10;

  let numbers = [];
  console.log(numbers);

  numbers.push(min);
  // numbers.push(max);

  console.table(numbers);

  // for (let i = 0; i < max -1; i += 1) {

  //     numbers.push(min += 1);
  // }

  for (let number of numbers) {
    if (numbers.length <= number && number < max) {
      numbers.push(number += 1);
    }
    
    
  }
console.table(numbers);

// рабочая
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
  
//   numbers.push(min);
//   for (let number of numbers) {
    
//     if (numbers.length <= number && number < max) {
//       numbers.push(number += 1);
//     }
//   }
  
//   // Пиши код выше этой строки
//   return numbers;
// }