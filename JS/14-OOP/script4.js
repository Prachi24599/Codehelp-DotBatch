'use strict';
//Inheritance between "Classes" : ES6 classes
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

//Inheritance between classes : Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

//Inheriting student prototype from PersonProto
const studentProto = Object.create(PersonProto);
studentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
studentProto.introduce = function () {
  console.log(`My Name is ${this.firstName} and i study ${this.course}`);
};
const jay = Object.create(studentProto);
jay.init('Jay', 1990, 'Computer');
jay.introduce();
jay.calcAge();

// 1) Public fields
// 2) Private fields
// 3) Public Methods
// 4) Private Methods
// There are also static version of all of this

//Class Example
class Account {
  // 1) Public fields (on instances)
  locale = navigator.language;
  // _movements = [];

  // 2) Private fields(on instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //protected property
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account ${owner}`);
  }
  // 3) Public Methods
  // Public Interface
  getMovements() {
    // return this._movements;
    return this.#movements;
  }
  deposit(val) {
    // this._movements.push(val);
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private Methods
  #approveLoan(val) {
    return val;
  }
}
const acc1 = new Account('Prachi', 'IND', 2400);
// Even after making properties as protected we are still able to access it as It is just a convention
// to indicate that we should not access this property outside
// acc1._movements.push(450);
// acc1._movements.push(-100);
acc1.deposit(500);
acc1.withdraw(350);

console.log(acc1.getMovements());

console.log(acc1);
// console.log(acc1.#pin); // We should not be able to access this outside of class so we need data encapsulation
acc1.requestLoan(1000);
// acc1._approveLoan(2000);
// acc1.approveLoan(100); // Uncaught TypeError: acc1.approveLoan is not a function - It is considering as a private field
Account.helper();

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
