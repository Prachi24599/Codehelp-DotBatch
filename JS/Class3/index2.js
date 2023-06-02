//spread operator
let first = [1, 2, 3];
let second = [4, 5, 6];

let combined = [...first, ...second];
console.log(combined);

//copying array using spread operator
let copyied = [...combined];
console.log(copyied);

//Iterating an Array
// let marks = [10, 20, 30, 40, 50];
// //for of loop
// for (let value of marks) {
//   console.log(value);
// }
// //for each loop - in js it's diff
// marks.forEach(function (mark) {
//   console.log(mark);
// });

// //coverting into arrow function
// marks.forEach((mark) => console.log(mark));

//joining Arrays
let numbers = [10, 20, 30, 40, 50];
const joined = numbers.join(" ");
console.log(joined);

//breaking a string into split arrays
let msg = "This is a first message";
let ar = msg.split(" ");
console.log(ar);

let j = ar.join("-");
console.log(j);

//Sorting Arrays
let myarray1 = [30, 5, 90, 1, 45];
// myarray1.sort();
myarray1.sort(function (a, b) {
  return a - b;
});
console.log(myarray1);

//Filtering arrays
let digits = [1, -5, 6, -7, 2, 0];
// let filteredArray = digits.filter(function (value) {
//   return value >= 0;
// });

let filteredArray = digits.filter((value) => value >= 0);
console.log(filteredArray);

//Mapping arrays
let n = [5, 6, 7, 8];
// let items = n.map(function (value) {
//   return "Student_No " + value;
// });
let items = n.map((value) => "stud_no " + value);
console.log(items);

//mapping with obj
let a = [1, 9, -4, -3];
let filtered = a.filter((value) => value >= 0);
console.log(filtered);

// let res = filtered.map(function (num) {
//   // let obj = { value: num };
//   // return obj;
//   return { value: num };
// });

//Arrow function
// let res = filtered.map((num) => {
//   value: num;
// });

//chaining - filtering and mapping at the same time
let res = a
  .filter((value) => value >= 0)
  .map((num) => {
    value: num;
  });

console.log(res);
