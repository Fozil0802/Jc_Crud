// 2-masala
let arr1 = [4, 10, 88, 99, 120, 77, 111];

let min = arr1.sort((a, b) => a - b)[0];
let max = +arr1
  .sort((a, b) => a - b)
  .slice(-1)
  .join();
console.log(max);

// 2-masala

let arr = ["olma", "banan", "nok", "olma", "nok", "tarvuz"];

const deleteMeva = (meva) => {
arr = arr.filter( fruit => fruit !== meva );
};
deleteMeva("nok");
console.log(arr);