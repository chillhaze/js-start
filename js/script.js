// -------------------Задача 1
// const styles = ["Jazz", "Blues"];
// styles.push("Rock-n-roll");
// console.log(styles);

// styles.splice(1, 1, "Classic")
// console.log(styles);

// styles.shift();
// console.log(styles);

// styles.unshift("Rap", "Raggie")
// console.log(styles);

// -------------------Задача 2
// var.1
// function min (a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number'){
//     return "Arguments had to be numbers!";
//   }
//   return a > b ? b : a;
// }
// console.log(min(10, 8, [4, 5, 4]));

// -------------------Задача 3

// ['Mango', 'Poly', 'Ajax']

// function logItems(arr){
//   for(let i = 0; )
// }
// -------------------Задача 4
// const ex4 = [2, 1, 65, 89, 20];

// function bubbbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log("1", arr[i]);

//     for (let j = 0; j < arr.length; j++){
//       console.log("2", arr[j]);

//       if(arr[j] > arr[j + 1]) {
//         let tmp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbbleSort(ex4));

// -------------------Задача 5

// Дз как валидировать этот массив?

// const ex5 = [104, 67, 54, 89, 2, 19];

// function findSmallestNumber(numbers) {
//   console.log(typeof(numbers));
//   if (typeof numbers !== "array"){
//     return;
//       }

//   let min = numbers[0];

//   for (const number of numbers) {
//     if(min > number) {
//       min = number;
//     }
//   }
//   return min;
// }

// console.log(findSmallestNumber(ex5));

// -------------------Задача 6

// function calculateAvarege() {
//   const args = arguments;
//   let sum = 0;
//   let totalCount = 0;

//   for(const arg of args) {
//     if (typeof arg !== "number") {
//       continue;
//     } else {
//       sum +=arg;
//       totalCount += 1;
//     }
//   }
//   return sum/ totalCount;
// }

// calculateAvarege(2, 3, 9, )
// console.log(calculateAvarege(2, 3, 9, ));

// -------------------Задача 6