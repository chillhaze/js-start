// ------------------------------------- Модуль 5

// ForEach -----------------------------------------
// const numbers = [1, 2, 3];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// // Функциональный forEach
// numbers.forEach((num) => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// Map -----------------------------------------

// const users = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true },
// ];
// console.log(users);

// // Для каждого элемента коллекции (user) вернем значение поля name
// const names = users.map((user) => user.name);

// console.log(names); // ["Mango", "Poly", "Ajax"]

// // Для каждого элемента коллекции (user) вернем значение поля isActive
// const status = users.map((userStatus) => userStatus.isActive);

// console.log(status); // [true, false, true]

// Filter -----------------------------------------

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// const activeUsers = users.filter((user) => user.isActive);
// console.log("Active users are: ", activeUsers);
// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно false, то текущий элемент (user) будет записан в результирующий массив.
// const inactiveUsers = users.filter((user) => !user.isActive);
// console.log("Inactive users are: ", inactiveUsers);

// Find -----------------------------------------
// Для каждого элемента коллекции (user) проверим поле name.
// Если оно совпадает с искомым идентификатором, то find прекратит
// выполнение и вернет текущий элемент (user) как результат выполнения
// const findUser = users.find((user) => user.name === "Poly");

// console.log(findUser);

// Создадим функцию которая будет возвращать нам пользователя по id
// const getUserByName = (arr, name) => arr.find((x) => x.name === name);

// console.log(getUserByName(users, "Ajax"));
// console.log(getUserByName(users, "Slavik"));

// Every|Some -----------------------------------------
// Функция которая проверяет величину значения, возвращает true или false.
// const isBigEnough = (val) => val >= 10;

// Допустим нам нужно узнать достаточно ли большие ВСЕ числа в коллекции.
// Все что нам нужно это буль true/false. Метод every вернет true только тогда,
// когда все элементы коллекции будут удовлетворять условию в callback-функции.

// console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false, тк есть числа меньше 10
// console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

// Допустим нам нужно узнать ЕСТЬ ЛИ в коллекции числа больше 10, хотя бы одно
// или больше. Все что нам нужно это буль true/false. Метод some вернет true
// только тогда, когда хотябы 1 или более элементов коллекции будут
// удовлетворять условию в callback-функции.

// console.log([2, 5, 8, 1, 4].some(isBigEnough)); // false
// console.log([12, 5, 8, 1, 4].some(isBigEnough)); // true

// Еще пример
// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// every вернет true только если всех фруктов будет больше чем 0 штук
// const allAvailable = fruits.every((fruit) => fruit.amount > 0); // false

// some вернет true если хотябы одного фрукта будет больше чем 0 штук
// const anyAvailable = fruits.some((fruits) => fruits.amount > 0); // true

// Every|Some -----------------------------------------
// const integerNum = [1, 2, 3, 4, 5, 6, 7, 8];

/*
 * Фильтруем четные числа. Далее, на результате метода filter,
 * вызываем map и множим на 2. После чего на результате
 * метода map вызываем reverse.
 */

// const result = integerNum
//   .filter((x) => x % 2 === 0)
//   .map((y) => y * 2)
//   .reverse();
// console.log(result);

// const odd = integerNum
//   .filter((x) => x % 2 !== 0)
//   .map((y) => y * 1) //этот можно удалить результат будет тот же
//   .reverse();
// console.log(odd);

// Практика с Репетой - массив с урока для тренировок -----------------------------------------
// const vehicles = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// Задача 1 -----------------------------------------
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
//   orderedItems.forEach((price) => {
//     totalPrice += price;
//   });

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// Задача 2 -----------------------------------------
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach((number, idx) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// Задача 3 -----------------------------------------
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach((number) => {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]

// Задача 6 -----------------------------------------
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };

// console.log(calculateTotalPrice([164, 48, 291])); // 503

// Задача 7 -----------------------------------------
// function changeEven(array, value) {
//   // Пиши код ниже этой строки
//   const newArray = [];

//   array.forEach((number) => {
//     if (number % 2 === 0) {
//       number = number + value;
//     }
//     newArray.push(number);
//   });

//   return newArray;

//   // Пиши код выше этой строки
// }
// const numbers = [1, 2, 3, 4, 5];
// const numberPlus = changeEven(numbers, 10);

// console.log(numbers);
// console.log(numberPlus);

// console.log(changeEven(numbers, 10)); //[1, 12, 3, 14, 5]
// console.log(numberPlus); //[17, 124, 168, 31, 142]

// Задача 10 -----------------------------------------
// const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

// Задача 11 -----------------------------------------
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const titles = books.map((books) => books.title);
// console.log(titles);

// Задача 12 -----------------------------------------
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика"],
//   },
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap((books) => books.genres);
// console.log(genres);

// Задача 13,14 -----------------------------------------
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// console.log(users);
// //Упрощенный вариант записи, не проходит автопроверку
// const getUserNames = users.map((users) => users.name);

// console.table(getUserNames);

// //Проходит автопроверку
// const getUserEmails = (users) => {
//   return users.map((users) => users.email);
// };
// console.table(getUserEmails(users));

// Задача 21 -----------------------------------------
// Пиши код ниже этой строки
// const getFriends1 = users.reduce((friends, user) => {
//   return [...friends, ...user.friends];
// }, []);
// // Пиши код выше этой строки
// console.log("getFriends1 contains: ", getFriends1);

// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);

//   const uniqueFriends = allFriends.filter(
//     (friend, idx, arr) => arr.indexOf(friend) === idx
//   );

//   return uniqueFriends;
// };
// console.log(getFriends);

// Задача 22 -----------------------------------------
// const getActiveUsers = (users) => {
//   return users.filter((user) => {
//     if (user.isActive) {
//       return user;
//     }
//   });
// };

// console.log(getActiveUsers(users));

// Задача 23 -----------------------------------------
// const getInactiveUsers = (users) => {
//   return users.filter((user) => {
//     if (!user.isActive) {
//       return user;
//     }
//   });
// };
// console.log(getInactiveUsers(users));

// Задача 24 -----------------------------------------
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
// ];
// const BOOK_TITLE = "Сон смешного человека";
// const AUTHOR = "Роберт Шекли";
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// Задача 25 -----------------------------------------
// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

// Задача 26 -----------------------------------------
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((number) => number % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((number) => number % 2 !== 0);

// console.log(eachElementInFirstIsEven, eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every(
//   (number) => number % 2 === 0
// );
// const eachElementInSecondIsOdd = secondArray.every(
//   (number) => number % 2 !== 0
// );
// console.log(eachElementInSecondIsEven, eachElementInSecondIsOdd);

// const eachElementInThirdIsEven = thirdArray.every((number) => number % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((number) => number % 2 !== 0);
// console.log(eachElementInThirdIsEven, eachElementInThirdIsOdd);

// Задача 27 -----------------------------------------
// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive);
// };

// Задача 28 -----------------------------------------
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((number) => number % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((number) => number % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((number) => number % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((number) => number % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((number) => number % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((number) => number % 2 !== 0);

// Задача 29 -----------------------------------------
// const isAnyUserActive = (users) => {
//   return users.some((user) => user.isActive);
// };

// Задача 29 -----------------------------------------
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, time) => acc + time);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// Задача 30 -----------------------------------------
// const players = [
//   { name: "Манго", playtime: 1270, gamesPlayed: 4 },
//   { name: "Поли", playtime: 469, gamesPlayed: 2 },
//   { name: "Аякс", playtime: 690, gamesPlayed: 3 },
//   { name: "Киви", playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// Задача 31 -----------------------------------------
// const calculateTotalBalance = (users) => {
//   return users.reduce((acc, user) => acc + user.balance, 0);
// };

// console.log(calculateTotalBalance(users));

// Задача 32 -----------------------------------------
// const getTotalFriendCount = (users) => {
//   return users.reduce((acc, user) => {
//     return acc + user.friends.length;
//   }, 0);
// };

// console.log(getTotalFriendCount(users));

// Задача 33 -----------------------------------------
