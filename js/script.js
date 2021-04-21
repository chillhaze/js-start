
// for (let i = 0; i <= 50; i +=5) {
//   console.log(i);
// }
// console.log("gfgfgsds");

// ---------------------Цыкл FOR-------------------
// задача №1
// 1 сделать вары
// const minSalary = 500;
// const maxSalary = 5000;
// const emploees = 12;
// let totalSalary = 0;

// // 2 перебрать работников в цикле
// for (let i = 0; i <= emploees; i += 1) {
//   // 3 сгенерить случайную зп
//   const salary = Math.round(
//     Math.random() * (maxSalary-minSalary) + minSalary,
//     );
//   console.log(`ЗП работника № ${i} - ${salary}`);

//   // 4 прибавить к тоталу
//   totalSalary += salary;
// }
// // 5 лог
// console.log("totalSalary: ", totalSalary);

// задача №2 решение 1
// 1 сделать вары
// const min = 4;
// const max = 18;
// let total = 0;

// // 2 создать цыкл for с начальным min и конечным max и шагом 1

// for (let i = min; i <= max; i += 1) {
//   console.log(i);

// // проверяем остаток от деления
//   if (i % 2 === 0) {
//     console.log('чётное: ', i);

//     total += i;
//   }
// }
// // пишем сумму
// console.log('total:',total);

// задача №2 решение 2
// 1 сделать вары
// const min = 4;
// const max = 18;
// let total = 0;

// // 2 создать цыкл for с начальным min и конечным max и шагом 1
// for (let i = min; i <= max; i += 1) {
//   console.log(i);

// // проверяем остаток от деления
//   if (i % 2 !== 0) {
    
//   console.log('Не чётное: ', i);
//   continue;
//   }

//   console.log('чётное: ', i);
//   total += i;
// }
// // пишем сумму
// console.log('total:',total);

// задача №3
// let balance = 3300;
// const payment = 41500;

// console.log(`Общая стоимость заказа ${payment} кредитов, проверяем доступное количество средств на счету...`);

// if (payment <= balance) {
//   balance -= payment;
//   console.log(`На счету осталось ${balance} кредитов`);

// } else {
//   console.log('На счету недостаточно средств для проведения операции!');
// }
//   console.log('Операция завершена');

  // задача №4

  const totalSpent = 220;
  let payment = 500;
  let discount = 0;

  if (totalSpent < 100) {
    console.log(`Не партнер, скидка ${discount}%`);

  } else if (totalSpent >= 100 && totalSpent < 1000) {
    discount = 0.02;

  } else if (totalSpent >= 1000 && totalSpent < 5000) {
    discount = 0.05;

  } else {
    discount = 0.1;
  }

  console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount*100}%`);