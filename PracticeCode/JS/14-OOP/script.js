'use strict';
//Constructor Function
//func declaration or function expression can be used to create cf

function Person(firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
}
const prachi = new Person('Prachi', 1999);
// prachi is an instance of Person
console.log(prachi);

//This is what happens when we call a constructor function with new keyword
// 1. New {} - Empty Object is created
// 2. function is called, this = {} - this points to empty object
// 3. {} linked to a prototype
// 4. function automatically return {}

const pinku = new Person('Pinku', 1998);
const om = new Person('Om', 2004);
console.log(pinku, om);

console.log(prachi instanceof Person); //true
