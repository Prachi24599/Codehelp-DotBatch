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

console.dir(booker);
