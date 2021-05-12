// ------------------------- Стрелочные функции
// ----------обычная функция
// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

// console.log(add(5, 10, 15));

// ----------стрелочная функция
// const addArrow = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// console.log(addArrow(2, 3, 4));

// // ---------- учим This
// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//   },
// };

// console.log(user);

// -----------присваиваем метод
// console.log("присваиваем метод");

// const showName = function () {
//   console.log("showName -> this", this);
//   console.log("showName -> this.name", this.name);
// };

// const unit = {
//   name: "Slavik",
// };

// unit.showUnitName = showName;
// console.log("unit", unit);

// unit.showUnitName();
// --------------------------------------------------
// ---------------- метод call
// есть два объекта, в которых используется одинаковый метод
//   - поиск цвета и его изменение.выносим в отдельную
// функцию метод изменения цвета и применяем с помощью
// вызова функции в контексте опредиленного объекта с помощью call
// const changeColor = function (color) {
//   console.log("changeColor -> this", this);
//   this.color = color;
// };

// const hat = {
//   color: "black",
// };
// console.log(hat.color);

// const sweater = {
//   color: "green",
// };
// console.log(sweater.color);

// changeColor.call(hat, "orange");

// console.log(hat);
// --------------------------------------------------
// ---------------- метод bind
// создаёт КОПИЮ функции привязанную к опредиленному объекту.
// const changeColor = function (color) {
//   console.log("changeColor -> this", this);
//   this.color = color;
// };

// const hat = {
//   color: "black",
// };
// console.log(hat.color);

// const sweater = {
//   color: "green",
// };
// console.log(sweater.color);

// const changeHatColor = changeColor.bind(hat);
// changeHatColor("pink");
// console.log(hat);

// const changeSweaterColor = changeColor.bind(sweater);
// changeSweaterColor("red");
// console.log(sweater);
// ---------------------------------------------------------
// ------------пример с увеличением и уменьшением
// чисел на странице с помощью кнопок
const counter = {
  value: 0,

  increment() {
    console.log("increment -> this", this);
    this.value += 1;
  },

  decrement() {
    console.log("increment -> this", this);
    this.value -= 1;
  },
};

console.log(document);

const decrementBtn = document.querySelector(".js-decrement");
const incrementBtn = document.querySelector(".js-increment");
const valueEl = document.querySelector(".js-value");

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

decrementBtn.addEventListener("click", function () {
  console.log("Click on decr btn");

  counter.decrement();
  console.log(counter);

  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  console.log("Click on incr btn");

  counter.increment();
  console.log(counter);

  valueEl.textContent = counter.value;
});
