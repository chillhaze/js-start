const Storage = function (items = {}) {
  console.log(items);

  Storage.prototype.getItems = function () {
    return items;
  };

  Storage.prototype.addItem = function (name) {
    items.push(name);
  };

  Storage.prototype.removeItem = function (name) {
    for (const item of items) {
      if (name === item) {
        items.splice(name, 1);
      }
    }
    return items;
  };
};

// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems());
// ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems());
// ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems());
// ["Нанитоиды", "Антигравитатор", "Дроид"]

console.log(Storage.prototype.hasOwnProperty("getItems"));
console.log(Storage.prototype.hasOwnProperty("addItem"));
