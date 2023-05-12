'use strict';
//Constructor Function
//func declaration or function expression can be used to create constructor function

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
// 3. {} - new obj linked to a constructor func prototype property
// 4. function automatically return {}

const pinku = new Person('Pinku', 1998);
const om = new Person('Om', 2004);
console.log(pinku, om);
console.log(prachi instanceof Person); //true

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

prachi.calcAge();
pinku.calcAge();
om.calcAge();

console.log(prachi.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(prachi)); //true
console.log(Person.prototype.isPrototypeOf(pinku)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

// .prototypeOfLinkedObjects

Person.prototype.species = 'Human';
console.log(prachi.species, pinku.species);

console.log(prachi.hasOwnProperty('firstName')); //true
console.log(prachi.hasOwnProperty('species')); //false

//Prototypal Inheritance on Built-in Objects
console.log(prachi.__proto__); //Person Prototype
console.log(prachi.__proto__.__proto__); //Object.prototype - top of prototype chain
console.log(prachi.__proto__.__proto__.__proto__); //null
console.dir(Person.prototype.constructor); //point back at cf Person

const arr = [3, 4, 5, 4, 7, 2, 3, 8, 9]; // [] === new Array
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
console.log(arr.__proto__);
console.log(Array.prototype);

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);
