'use strict';

// class Expression
// const Person = class {};

//class Declaration
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

const jessica = new Person('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.fullName);
Person.hey();
console.log(jessica.__proto__ === Person.prototype);

// Person.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// const prachi = new Person('Prachi', 1999); // Prachi is not a full Name
const prachi = new Person('Prachi P', 1999);

// NOTE
// 1. Classes are not hoisted
// 2. Classes are first class citizens
// 3. Classes are executed in strict mode

//Getter and Setter Properties on Objects
const account = {
  owner: 'Prachi',
  movements: [200, 530, 120, 300],
  //getter
  get latest() {
    return this.movements.slice(-1).pop();
  },
  //setter
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50; // as it is property not a method so we can directly assign value
console.log(account.movements);

//Object.create()
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  //like a constructor
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2003;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2000);
sarah.calcAge();
