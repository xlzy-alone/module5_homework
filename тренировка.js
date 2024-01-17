//Задание 1
let value = prompt("Введите значение:");
let numberValue = +value;

if (isNaN(numberValue)) {
  console.log("Упс, кажется, вы ошиблись");
} else {
  if (numberValue % 2 === 0) {
    console.log("Число четное");
  } else {
    console.log("Число нечетное");
  }
}
//Задание 2
let x;

if (typeof x === "number") {
  console.log(x + " - это число");
} else if (typeof x === "string") {
  console.log(x + " - это строка");
} else if (typeof x === "boolean") {
  console.log(x + " - это логический тип");
} else {
  console.log("Тип x не определен");
}
//Задание 3
let string = "Hello world"
let result;

if(string.includes ("Hello")){
  result = "olleh"
}
else {
  result = "Hello"
}
console.log(result)
//Задание 4
let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber)
//Задание 5
let array = [3, 7, 12, 5, 9, 2];

console.log("Количество элементов в массиве: " + array.length);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
//Задание 6
function areAllElementsEqual(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
}

let array1 = [1, 1, 1, 1];
let array2 = [1, 2, 1, 1];

console.log(areAllElementsEqual(array1));
console.log(areAllElementsEqual(array2));
//Задание 7
function countEvenOddZero(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;

  arr.forEach(function(element) {
    if (typeof element === 'number' && !isNaN(element)) {
      if (element === 0) {
        zeroCount++;
      } else if (element % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  });

  console.log('Чётных элементов: ' + evenCount);
  console.log('Нечётных элементов: ' + oddCount);
  console.log('Нулевых элементов: ' + zeroCount);
}

let array = [1, 2, 3, 0, 'a', null, 4, 5, 6];
countEvenOddZero(array);
//Задание 8
let myMap = new Map();
myMap.set('apple', 3);
myMap.set('banana', 5);
myMap.set('orange', 7);

for (let [key, value] of myMap) {
  console.log(`Ключ - ${key}, значение - ${value}`);
}


