//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
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

const divisibleByFive = numbers.filter(function(num){
    return num % 5 ===0 ;
});
//console.log(divisibleByFive);


/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

const squared = numbers.map(function (num){
return num **2 ;
});
//console.log(squared);

const multiplied = numbers.map(function (num){
    return num *2 ;
    });
   // console.log(multiplied);

   /*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

const graterThan = numbers.filter(function (num) {
    return num >= 20;
  }).map(function (num){
    return num **2 ; });
    


  //console.log(graterThan);
  const divisibleByFivee = numbers.filter(function (num) {
    return num % 5 ==0;
  }).map(function (num){
    return num *3 ; });
    console.log(divisibleByFivee);