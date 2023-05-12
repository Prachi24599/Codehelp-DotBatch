'use strict';

//class Expression
// const Person = class {};

//class Declaration
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  // greet() {
  //   console.log(`Hey ${this.firstName}`);
  // }
}

const jessica = new Person('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === Person.prototype);

Person.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// NOTE
// 1. Classes are not hoisted
// 2. Classes are first class citizens
// 3. Classes are executed in strict mode
