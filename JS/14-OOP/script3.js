'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //Person(firstName, birthYear); //This wont work because this is regular function call and so this keyword points to undefined
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//Linking Prototypes

// Student.prototype = Person.prototype; - This is wrong because It will point student constructor
// to person.prototype object

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My Name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 1999, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); //true
console.log(mike instanceof Person); //true
console.log(mike instanceof Object); //true

console.dir(Student.prototype.constructor); //points to person
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // now points correctly to student
