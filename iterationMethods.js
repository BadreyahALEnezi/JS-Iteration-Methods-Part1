const numbers = [10, 13, 20, 25, 38, 35, 40];
const newArry = numbers.filter(function (num) {
  return num >= 25;
});
//console.log(newArry);
//
// function newArray2() {
//   return numbers.filter(function (num) {
//     return num >= 25;
//   });
// }
// console.log(newArray2());

const divisibleByFive = numbers.filter(function (num) {
  return num % 5 === 0;
});
//console.log(divisibleByFive);

const squared = numbers.map(function (num) {
  return num ** 2;
});
//console.log(squared);

const multiplied = numbers.map(function (num) {
  return num * 2;
});
// console.log(multiplied);

const greaterThan = numbers
  .filter((num) => num >= 20
  )
  .map(function (num) {
    return num ** 2;
  });
console.log(greaterThan);
const divisibleByFivee = numbers
  .filter(function (num) {
    return num % 5 == 0;
  })
  .map(function (num) {
    return num * 3;
  });
//console.log(divisibleByFivee);