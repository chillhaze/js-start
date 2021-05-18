// Задание 6 ------------------------------------------
// function Storage(items) {
//   // console.log(items);

//   this.items = items;

//   Storage.prototype.getItems = function () {
//     return this.items;
//   };

//   Storage.prototype.addItem = function (name) {
//     items.push(name);
//   };

//   Storage.prototype.removeItem = function (name) {
//     let values = Object.values(items);
//     for (const value of values) {
//       console.log(value);
//       if (value === name) {
//         items.splice(items.indexOf(value), 1);
//       }
//     }
//     return items;
//   };
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems());
// // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems());
// // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems());
// // ["Нанитоиды", "Антигравитатор", "Дроид"]

// console.log(Storage.prototype.hasOwnProperty("getItems"));
// console.log(Storage.prototype.hasOwnProperty("addItem"));
// console.log(Storage.prototype.hasOwnProperty("removeItem"));

// console.log(storage);

// Задание 7 ------------------------------------------
// function StringBuilder(baseValue) {
//   this.value = baseValue;

//   StringBuilder.prototype.getValue = function () {
//     return this.value;
//   };

//   StringBuilder.prototype.padStart = function (str) {
//     this.value = str + baseValue;
//     return this.value;
//   };

//   StringBuilder.prototype.padEnd = function (str) {
//     this.value = this.value + str;
//     return this.value;
//   };

//   StringBuilder.prototype.padBoth = function (str) {
//     this.value = str + this.value;
//     this.value = this.value + str;
//     return this.value;
//   };
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

// Классы ------------------------------------------
// переделываю задачу 7 под класс
// class StringBuilder {
//   // объявление статических свойств

//   static name = "Cat face";

//   // объявление статических методов класса
//   static getInfo(builder) {
//     console.log("Obj info", builder);
//   }

//   // объявление конструктора класса
//   constructor(baseValue = {}) {
//     this.value = baseValue;
//   }

//   // объявление методов класса
//   getValue() {
//     return this.value;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//     return this.value;
//   }

//   padEnd(str) {
//     this.value = this.value + str;
//     return this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value;
//     this.value = this.value + str;
//     return this.value;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

// console.dir(StringBuilder);
// console.log(StringBuilder.name);

// StringBuilder.getInfo(builder);

// Задача 12 ------------------------------------------
// class Storage {
//   // console.log(items);
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(item) {
//     let values = Object.values(this.#items);
//     for (const value of values) {
//       console.log(value);
//       if (value === item) {
//         this.#items.splice(this.#items.indexOf(value), 1);
//       }
//     }
//     return this.#items;
//   }
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems());
// // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems());
// // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems());
// // ["Нанитоиды", "Антигравитатор", "Дроид"]

// console.log(Storage.prototype.hasOwnProperty("getItems"));
// console.log(Storage.prototype.hasOwnProperty("addItem"));
// console.log(Storage.prototype.hasOwnProperty("removeItem"));

// console.log(storage);

// Задача 13 ------------------------------------------
// class StringBuilder {
//   // объявление конструктора класса

//   #value;

//   constructor(baseValue = {}) {
//     this.#value = baseValue;
//   }

//   // объявление методов класса
//   getValue() {
//     return this.#value;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value = this.#value + str;
//     return this.#value;
//   }

//   padBoth(str) {
//     this.#value = str + this.#value;
//     this.#value = this.#value + str;
//     return this.#value;
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

// console.dir(StringBuilder);
// console.log(StringBuilder.name);

// Геттеры ми Сеттеры ------------------------------------------
// class Storage {
//   constructor(items) {
//     this._items = items;
//   }

//   // Getter
//   // ----------------------------------------------------------start
//   getItems() {
//     return this.items;
//   }
//   // Создаю геттер на замену getItems
//   // Геттеры и Сеттеры не могут называться так же, как и имя того, что они описывают
//   // Поетому добавляем нижнее подчеркивание _items типа внутренее свойство

//   get items() {
//     return this._items;
//   }
//   // ----------------------------------------------------------end

//   // Setter
//   // ----------------------------------------------------------start
//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   set items(newItem) {
//     return this.items.push(newItem);
//   }
//   // ----------------------------------------------------------end

//   removeItem(item) {
//     let values = Object.values(this.items);
//     for (const value of values) {
//       console.log(value);
//       if (value === item) {
//         this.items.splice(this.items.indexOf(value), 1);
//       }
//     }
//     return this.items;
//   }
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems());
// // ["Нанитоиды", "Пролонгер", "Антигравитатор"]

// // Геттер
// console.log("Это Геттер  - ", storage.items);
// // ["Нанитоиды", "Пролонгер", "Антигравитатор"]

// storage.addItem("Дроид");
// console.log(storage.getItems());
// // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]

// // Сеттер
// storage.items = ["ssss", "wwww", "bbb"];
// console.log("Это Сеттер  - ", storage.items);

// storage.removeItem("Пролонгер");
// console.log(storage.getItems());
// // ["Нанитоиды", "Антигравитатор", "Дроид"]

// // Еще один быстрый пример
// const anyObj = {
//   _anyProp: 100,

//   get anyProp() {
//     return this._anyProp;
//   },

//   set anyProp(newProp) {
//     this._anyProp = newProp;
//   },
// };

// console.log(anyObj.anyProp);
// anyObj.anyProp = 150;
// console.log(anyObj.anyProp);

// Задача 14 ------------------------------------------
// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// Задача 15 ------------------------------------------
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > this.#price && newPrice < Car.MAX_PRICE) {
//       return (this.#price = newPrice);
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// Задача 16 ------------------------------------------
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//       if (Car.#MAX_PRICE < price) {
//         return 'Внимание! Цена превышает допустимую.'
//       }
//        return 'Всё хорошо, цена в порядке.'
//     }

//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// Задача 17 ------------------------------------------
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки
// class Admin extends User {
//   AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };

//   constructor(AccessLevel) {
//     super();
//     console.log(AccessLevel);
//   }
// }

// // const Slavik = new Admin({ email: "sdsdsdsd", AccessLevel: "basic" });
// console.log(Admin);
// Admin.AccessLevel.BASIC;

// Задача 19 ------------------------------------------
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  accessLevel;
  blacklistedEmails;

  constructor({ email, accessLevel, blacklistedEmails = [] }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = blacklistedEmails;
  }

  blacklist(email) {
    console.log(email);
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) {
      return true;
    }
    return false;
  }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted("mango@mail.com")); //  false
console.log(mango.isBlacklisted("poly@mail.com")); // true
