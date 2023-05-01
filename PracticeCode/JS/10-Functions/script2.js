'use strict';
//Immediately Invoked Function Expression
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();
runOnce();

(function () {
  console.log('This is one time function');
  const isPrivate = 23;
})();
// console.log(isPrivate);  ReferenceError: isPrivate is not defined

//with arrow function
(() => console.log('This is one time arrow function'))();

{
  const isPrivate = true;
  var notPrivate = 23;
}
// console.log(isPrivate); ReferenceError: isPrivate is not defined
console.log(notPrivate);

//Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();

// console.dir(booker);

//Examples 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 10;
  f = function () {
    console.log(b * 2);
  };
};

g(); //f - assigned to fun in g
f(); //46
console.dir(f);

h(); // f - reassigned to fun in h
f(); //20
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180, 3);
