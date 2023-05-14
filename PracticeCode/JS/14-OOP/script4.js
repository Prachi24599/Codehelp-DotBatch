'use strict';

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Instance Method
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  //getter
  get age() {
    return 2037 - this.birthYear;
  }
  //setter
  //set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log('Hey there! ✋');
    console.log(this); // this will return an entire class
  }
}
class Student extends Person {
  constructor(fullName, birthYear, course) {
    //super is constructor function of parent class
    //Needs to happens first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My Name is ${this.fullName} and i study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old, but as a student I feel like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}
// const martha = new Student('Martha Jonas', 2003);
const martha = new Student('Martha Jonas', 2003, 'Computer Science');
martha.introduce();
martha.calcAge();
