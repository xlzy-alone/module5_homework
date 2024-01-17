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
