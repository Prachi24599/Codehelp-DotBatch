'use strict';

function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}
const prachi = new Person('Prachi', 1999);
console.log(prachi);

//This is what happens when we call a constructor function with new keyword
// 1. New {} - Empty Object is created
// 2. function is called, this = {} - this points to empty object
// 3. {} linked to a prototype
// 4. function automatically return {}
