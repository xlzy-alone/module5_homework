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
