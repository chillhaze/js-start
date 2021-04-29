"use strict";

//-------------- Модуль №3 - Практика-2
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// function sumSalaries(objSalaries) {
//   if (!objSalaries) return 0; // проверяем на обратное. null - это пустой объект
//   // если пустой (здесь тру)- верни 0, если не пустой (фолс)  - продолжай выполнение.
//   let sum = 0;

//   for (const value of Object.values(objSalaries)) {
//     // console.log(value);
//     sum += value;
//   }
//   return sum;
// }
// console.log(sumSalaries(salaries));
// console.log(sumSalaries({}));

//-------------- Модуль №3 - Практика-3
// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone["name"] === stoneName) {
//       return stone["price"] * stone["quantity"];
//     }
//   }
// }

// console.log(calcTotalPrice(stones, "Сапфир"));

//-------------- Модуль №3 - Практика-4
// const calculattor = {
//   read(a, b) {
//     this.value1 = a;
//     this.value2 = b;
//   },
//   sum() {
//     return !this.value1 || !this.value2 ? false : this.value1 + this.value2;
//   },
//   mult() {
//     return !this.value1 || !this.value2 ? false : this.value1 * this.value2;
//   },
// };

// calculattor.read(2, 7);
// console.log(calculattor.mult());

//-------------- Модуль №3 - Практика-5
//удаление по ключу
// const updateObj = (obj, ...removeKeys) => {
//   //тут ...rest
//   let newObj = { ...obj }; // тут ...spread

//   for (const key of removeKeys) {
//     delete newObj[key];
//   }

//   return newObj;
// };

// console.log(updateObj({ a: 1, b: 2, c: 4 }, "b", "c"));

//-------------- Модуль №3 - Практика-6
//массив мвссивов
// const objData = {
//   name: "John",
//   surName: "Stones",
//   age: 25,
//   hobby: "football",
//   merried: false,
// };

// function changeObj(obj) {
//   const newObj = Object.entries(obj);
//   console.log(newObj);
// }

// changeObj(objData);

//-------------- Модуль №3 - Практика-7
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
const transactionID = 0;
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(type, amount) {
    return {
      id: transactionID++,
      type,
      amount,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта
   * транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта
   * транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи
   * сообщение
   * о том, что снятие такой суммы не возможно,
   *  недостаточно средств.
   */
  withdraw(amount) {
    if (amount > balance) {
      return "Недостаточно средств.";
    } else {
      this.balance -= amount;
      const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
      this.transaction.push(transaction);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction["id"] === id) {
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории
   * транзакций
   */
  getTransactionTotal(type) {},
};

account.deposit(3000);
account.withdraw(1000);

console.log(account.getBallance());
