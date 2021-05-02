// -----------------------Создаем объект
// const playlist = {
//   name: "The best of Soundcloud",
//   rating: 9,
//   tracks: [
//     "трек-1",
//     "трек-2",
//     "трек-3",
//     "трек-4",
//   ],
//   trackCount: 4,
//   durationTime: 120,
// };

// console.log(playlist);

// const trackList = "tracks";

// console.log(playlist.trackList); // так не будет работать!
// console.log(playlist[trackList]); // а так - будет!

// -----------------------Короткая запись свойств
// const userName = "Mango";
// const email = "mango@gmail.com";

// const signUpData = {
//   userName,
//   email,
// };

// console.log(signUpData);

// -----------------------Вычисляемые свойства
//<input name="color" value="tomato">
// const inputName = "color";
// const inputValue = "tomato";

// const colorPickerData = {
//   [inputValue]: inputValue, //когда значение ключа хранится в переменной - используем []
// };

// console.log(colorPickerData);

// -----------------------Методы объектов
// const playlist = {
//   name: "The best of Soundcloud",
//   rating: 9,
//   tracks: [
//     "трек-1",
//     "трек-2",
//     "трек-3",
//     "трек-4",
//   ],
//   trackCount: 4,
//   durationTime: 120,
//   changeName(newName) {
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//     this.trackCount = this.tracks.length;
//   },
//   updateRating(ratingName) {
//     this.rating = ratingName;
//   },
// };

// console.table(playlist);

// playlist.changeName("новое имя");

// console.table(playlist);

// playlist.addTrack("новый трек");

// console.table(playlist);

// playlist.updateRating(6);

// console.table(playlist);

// -----------------------Доступ к ключам и их свойствам в объекте
// const playlist = {
//   name: "The best of Soundcloud",
//   rating: 9,
//   trackCount: 4,
//   durationTime: 120,
//   tracks: [
//     "трек-1",
//     "трек-2",
//     "трек-3",
//     "трек-4",
//   ],
// };
// console.table(playlist);

// const playlistKeys = [];
// const playlistKeysValues = [];

// for (const key in playlist) {
//   playlistKeys.push(key);
//   playlistKeysValues.push(playlist[key]);
//   // выводим все названия ключей
//   console.log(key);
//   // выводим все названия свойств ключей
//   console.log(playlist[key]);
// }
// // выводим все названия ключей в массиве
// console.log(playlistKeys);
// // выводим все названия свойств ключей в массиве
// console.log(playlistKeysValues);
// // тоже самое через существующие в языке свойства, for-in не нужен
// console.log(Object.keys(playlist));
// // тоже самое через существующие в языке свойства, for-in не нужен
// console.log(Object.values(playlist));

// -----------------------Общее количество отзывов
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.table(feedback);
// let totalFeedbacks = 0;

// for (const elem in feedback) {
//   console.log(elem);
//   console.log(feedback[elem]);

//   totalFeedbacks += feedback[elem];
// }
// console.log(
//   "Total amount of  feedbacks: ",
//   totalFeedbacks
// );

// -----------------------Общее количество отзывов через Objec.values

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedbacks = 0;

// const values = Object.values(feedback);
// let valuesArr = [];

// for (const value in values) {
//   valuesArr.push(values[value]);
//   totalFeedbacks += values[value];
// }
// console.log(valuesArr);
// console.log(totalFeedbacks);

// -----------------------Массив объектов
// const friends = [
//   { name: "Mango", outline: false },
//   { name: "Kiwi", outline: true },
//   { name: "Poly", outline: true },
//   { name: "Ajax", outline: false },
// ];
// console.table(friends);

// ----------------------- Модуль №3 - Объекты (Репета)
// -------------------------------------------------------------------------------------
// добавляем 'Mock' из faker.js

// function createUserMock() {
//   return {
//     country: faker.address.country(),
//     city: faker.address.city(),
//     zipcode: faker.address.zipcode(),
//   };
// }
// const users = [];

// for (let i = 0; i < 10; i++) {
//   const user = createUserMock();
//   users.push(user);
// }
// console.log(users);

// ---------------------------------выносим имена в отдельный массив
// создаем декомпозицию - план работы, решения задачи.
// коммиты можно писать по пунктам декомпозиции
// const friends = [
//   { name: "Mango", outline: false },
//   { name: "Kiwi", outline: true },
//   { name: "Poly", outline: true },
//   { name: "Ajax", outline: false },
// ];
// console.table(friends);

// const allFriendsNames = [];
// for (const friend of friends) {
//   console.log(friend.name);
//   allFriendsNames.push(friend.name);
// }

// console.table(allFriendsNames);

// const vehicles = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     price: 24045,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     price: 22455,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     price: 24195,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     price: 31520,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     price: 34210,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     price: 45560,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     price: 24320,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     price: 27110,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     price: 22120,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     price: 31660,
//   },
// ];
//--------- Получить список моделей
// function getModels(cars) {
//   console.table(cars);
//   const models = [];
//   for (const car of cars) {
//     models.push(car.model);
//   }

//   return models;
// }

// console.log(getModels(vehicles));

// ----------Заменить название модели
// let oldModelName = "F-150";
// let newModelName = "Hello World";

// // 1.перебираем массив поэлементно
// for (const vehicle of vehicles) {
//   if (vehicle.model === oldModelName) {
//     vehicle.model = newModelName;
//   }
// }
// console.table(vehicles);

// function changeModel(
//   cars,
//   oldModelName,
//   newModelName
// ) {
//   for (const car of cars) {
//     if (car.model === oldModelName) {
//       car.model === newModelName;
//     }
//   }
// }

// changeModel(
//   vehicles,
//   "Mazda 6",
//   "AAAAAAAAAAAAAAAAAAAA"
// );
// console.table(vehicles);

// changeModel(
//   vehicles,
//   "Fusion",
//   "BBBBBBBBBBBBBBBBBBBB"
// );
// console.table(vehicles);

// ---------- посчитать общую цену всех машин.
// const vehicles = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     price: 24045,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     price: 22455,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     price: 24195,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     price: 31520,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     price: 34210,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     price: 45560,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     price: 24320,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     price: 27110,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     price: 22120,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     price: 31660,
//   },
// ];

// function getTotalPrice(cars) {
//   let totalPrice = 0;
//   console.log(cars);
//   for (const car of cars) {
//     totalPrice += car.price;
//   }

//   return totalPrice;
// }

// console.log(getTotalPrice(vehicles));
// console.log(
//   "Total price is :",
//   getTotalPrice(vehicles)
// );
// ---------------------------------Модуль 3-12
// function countProps(object) {
//   // console.log(object);

//   let propCount = 0;

//   for (const elem in object) {
//     console.log(elem);
//     if (object.hasOwnProperty(elem)) {
//       propCount += 1;
//       console.log(propCount);
//     }
//   }
//   return propCount;
// }

// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
// countProps({ name: "Mango", age: 2 });
// countProps({});

// ---------------------------------Модуль 3-13
// const apartment = {
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки

// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   values.push(apartment[key]);
//   console.log(values);
// }

// ---------------------------------Модуль 3-14
// function countProps(object) {
//   // Пиши код ниже этой строки
//   // console.log(object);
//   let propCount = 0;

//   const keys = Object.keys(object);
//   // console.log(keys);

//   for (const key of keys) {
//     propCount = keys.length;

//     console.log(propCount);
//   }

//   return propCount;
//   // Пиши код выше этой строки
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// ---------------------------------Модуль 3-16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   const workerName = Object.keys(salaries);
//   const workerSalary = Object.values(salaries);

//   for (const sum of workerSalary) {
//     totalSalary += sum;
//   }
//   // Пиши код выше этой строки
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// ---------------------------------Модуль 3-17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// console.table(colors);

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(rgbColors);
// console.log(hexColors);

// ---------------------------------Модуль 3-18
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// console.table(products);

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   let productPrice = null;

//   for (const product of products) {
//     console.log(product);
//     if (product.name === productName) {
//       productPrice = product.price;
//     }
//   }

//   return productPrice;
//   // Пиши код выше этой строки
// }

// console.log(getProductPrice("Радар"));
// console.log(getProductPrice("Захват"));
// console.log(getProductPrice("Сканер"));
// console.log(getProductPrice("Дроид"));
// console.log(getProductPrice("Двигатель"));

// ---------------------------------Модуль 3-19
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];
// console.table(products);

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   let propArray = [];

//   for (const product of products) {
//     // console.log(product);
//     let keys = Object.keys(product);
//     // console.log(keys);
//     for (const key of keys) {
//       // console.log(product[key]);
//       // console.log(key);
//       if (key === propName) {
//         propArray.push(product[key]);
//       }
//     }
//   }
//   return propArray;
// }
// // Пиши код выше этой строки
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// ---------------------------------Модуль 3-19
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;

//   for (const product of products) {
//     // console.log(product.price);

//     let keys = Object.keys(product);
//     for (const key of keys) {
//       // console.log(product[key]);
//       if (product[key] === productName) {
//         totalPrice = product.price * product.quantity;
//         // console.log(product.quantity);
//       }
//     }
//   }
//   return totalPrice;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Радар")); //5200

// ---------------------------------Модуль 3-25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Пиши код ниже этой строки
// const {
//   lowToday,
//   highToday,
//   todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
// } = forecast.today;
// console.table(forecast.today);
//
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log();

//--------------------------- Корзина товаров
// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//     console.log(this.items);
//   },

//   add(product) {
//     const { productName, productPrice } = product;
//     return this.items.push(product);
//     console.log(productName);
//   },

//   //доделать remove!
//   remove(productName) {
//     const { ...objects } = this.items;
//     // const values = Object.keys(this.items[itemName]);
//     console.log(objects);

//     // for (const value of values) {
//     //   if (value === productName) {
//     //     removeItemIndex = indexOf(value);

//     //     return this.items.splice(removeItemIndex, 1);
//     //   }
//     // }
//   },

//   clear() {},
//   countTotalPrice() {
//     const totalPrice = 0;
//     for (const price of productPrice) {
//       totalPrice += price;
//     }
//     return totalPrice;
//   },
//   increaseQuantity() {},
//   decreaseQuantity() {},
// };

// console.table("Позиции в корзине: ", cart.getItems());

// cart.add({ name: "lemon", price: 30 });
// cart.add({ name: "orange", price: 60 });
// cart.add({ name: "peach", price: 70 });
// cart.add({ name: "tomato", price: 10 });

// console.table(cart.getItems());

// cart.remove("orange");
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity("peach");
// console.table(cart.getItems());

// cart.decreaseQuantity("peach");
// console.table(cart.getItems());

// console.log("Total: ", cart.countTotalPrice());
// --------------------------------------------------------Оператор Spread
// let x = [4, 5, 6];
// console.log(x);

// const numbers = [1, 2, 3, ...x, 7, 8, 9];
// console.log(numbers);
// console.log(Math.max(...numbers));

// ---------------------------------Модуль 3-30
// function makeTask(data) {
//   const completed = false;
//   const category = "Общее";
//   const priority = "Обычный";
//   // Пиши код ниже этой строки
//   const newData = {
//     category: "Общее",
//     priority: "Обычный",
//     ...data,
//     completed,
//   };
//   // в newData важен порядок добавления свойств!!
//   return newData;
//   // Пиши код выше этой строки
// }

// console.log(makeTask());
// console.log(
//   makeTask({ category: "Домашнее", priority: "Низкий", text: "Вынести мусор" })
// );

// ---------------------------------Модуль 3-33
// Пиши код ниже этой строки
// function findMatches(firstArray, ...secondArray) {
//   const matches = []; // Не изменяй эту строку
//   console.log(firstArray);
//   console.log(secondArray);

//   // решение №1 - через два цикла for
//   for (const elem of secondArray) {
//     if (firstArray.includes(elem)) {
//       matches.push(elem);
//     }
//   }
//   // решение №2 - через два цикла for
//   // for (const elem of secondArray) {
//   //   for (const item of firstArray) {
//   //     console.log("item is: ", item);
//   //     if (elem === item) {
//   //       console.log("equal elem is: ", elem);
//   //       matches.push(elem);
//   //     }
//   //   }
//   // }
//   // Пиши код выше этой строки
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); //[1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); //[17, 89, 2]

// ---------------------------------Модуль 3-40
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],

//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки

//     console.table(this.potions);
//     let valueIndex = 0;

//     const values = Object.values(this.potions);
//     // console.log(values);

//     for (const value of values) {
//       // console.log(value);

//       if (value === oldName) {
//         valueIndex = this.potions.indexOf(value);
//         // console.log(valueIndex);
//         this.potions.splice(valueIndex, 1, newName);
//       }
//     }
//     return this.potions;
//     // Пиши код выше этой строки
//   },
// };

// console.table(atTheOldToad.updatePotionName("Дыхание дракона", "Полиморф")); //['Зелье скорости', 'Полиморф', 'Каменная кожа']

// ---------------------------------Модуль 3-41

const atTheOldToad = {
  potions: [
    { name: "Зелье скорости", price: 460 },
    { name: "Дыхание дракона", price: 780 },
    { name: "Каменная кожа", price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },

  addPotion(addObject) {
    // console.log(addObject);

    this.potions.push(addObject);

    return this.potions;
  },

  removePotion(potionName) {
    // console.log(potionName);

    let obj = {};
    let objIndex;

    for (let i = 0; i < this.potions.length; i += 1) {
      obj = this.potions[i];
      // console.log(obj);
      objIndex = this.potions.indexOf(obj);
      // console.log(objIndex);

      const values = Object.values(obj);
      // console.log(values);

      for (const value of values) {
        if (value === potionName) {
          // console.log(objIndex);
          let deletedObj = this.potions.splice(objIndex, 1);
          // console.log(deletedObj);
        }
      }
    }
    return this.potions;
  },

  updatePotionName(oldName, newName) {
    // console.log(`Change '${oldName}' to '${newName}'`);

    let obj = {};

    for (let i = 0; i < this.potions.length; i += 1) {
      obj = this.potions[i];
      const { name, price } = obj;
      // console.log(name, price);

      if (obj.name.includes(oldName)) {
        obj.name = newName;
      }
    }

    return this.potions;
  },
  // Пиши код выше этой строки
};

console.table(atTheOldToad.getPotions());
console.table(atTheOldToad.addPotion({ name: "Невидимка", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Зелье силы", price: 270 }));
// console.table(atTheOldToad.getPotions());
// console.table(atTheOldToad.removePotion("Дыхание дракона"));
console.table(atTheOldToad.removePotion("Зелье скорости"));
console.table(atTheOldToad.updatePotionName("Дыхание дракона", "Полиморф"));
console.table(
  atTheOldToad.updatePotionName("Каменная кожа", "Зелье неуязвимости")
);
