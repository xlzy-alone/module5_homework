let myMap = new Map();
myMap.set('apple', 3);
myMap.set('banana', 5);
myMap.set('orange', 7);

for (let [key, value] of myMap) {
  console.log(`Ключ - ${key}, значение - ${value}`);
}
