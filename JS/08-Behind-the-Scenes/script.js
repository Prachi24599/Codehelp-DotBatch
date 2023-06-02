'use strict';
/*
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating new variable with same name as outer scope variable
      const firstName = 'Radha';
      const str = `Oh, you are a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //reassigning outer scope's variable
      output = 'New OP';
    }
    console.log(millenial); //var is before es6 version and it does not have block scope, only fun scope
    //so we are able to access var out of the block also
    //console.log(add(5, 6)); //Reference Error - add is not defined. - fun are blocked score (in strict mode only)
    console.log(output);
  }

  //console.log(str);
  printAge();

  return age;
}

const firstName = 'Prachi';
calcAge(1991);

//console.log(age); ReferenceError
//printAge(); ReferenceError

*/

//Hoisting of Variable
//console.log(me);
// console.log(job);
// console.log(birthYear);

var me = 'Prachi';
let job = 'Software Engineer';
const birthYear = 1999;

//Hoisting of Funcations
//console.log(addD(3, 4));
//console.log(addE(3, 4)); //Uncaught TypeError: addE is not a function, It will be added as undefined(3,4) in TDZ
//console.log(addA(3, 4)); //Uncaught ReferenceError: Cannot access 'addA' before initialization

/*
function addD(a, b) {
  return a + b;
}

var addE = function (a, b) {
  return a + b;
};

const addA = (a, b) => a + b;

//this keyword
console.log(this); //In global space, It is window object

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); // 'this' is undefined in strict mode and window obj without strict mode
};
calcAge(1999);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this); // Arrow fun dont have this keyword of it's own. It refers to its parent this (In this case global scope)
};
calcAgeArrow(2000);

const prachi = {
  year: 1999,
  calcAge: function () {
    console.log(this); // here this points to the current obj ie prachi
    console.log(2023 - this.year);
  },
};
prachi.calcAge();
//NOTE : this keyword point to the object that is calling method and not the object in which method is defined

const polakhare = {
  year: 2017,
};
polakhare.calcAge = prachi.calcAge;
polakhare.calcAge();

const f = this.calcAge;
f(); // this is normal fun call and not with any object so
//cl(this) will be undefined and
//undefined.year will give us an error : Uncaught TypeError: f is not a function
*/
var firstName = 'Prachi';

const prachi = {
  firstName: 'pinku',
  year: 1999,
  calcAge: function () {
    console.log(this); // here this points to the current obj ie prachi
    console.log(2023 - this.year);

    //SOLUTION 1
    /* const self = this;
    const isMillenial = function () {
      // console.log(this); //undefined
      // console.log(this.year >= 1981 && this.year <= 1996); //error : Uncaught TypeError: Cannot read properties of undefined (reading 'year')

      console.log(self.year >= 1981 && self.year <= 1996); //false - It is working because of scope chain
    };*/

    //SOLUTION 2
    const isMillenial = () => {
      //Arrow function inherits this keyword from parent scope ie calcAge fun
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial(); //even thought it is inside method but it is regular fun call so this is undefined
  },
  greet: () => console.log(`Hey, ${this.firstName}`), //Hey, undefined
};
prachi.greet();
console.log(this.firstName);
prachi.calcAge();

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 4);
addExpr(2, 4, 5, 7, 1);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 3);
