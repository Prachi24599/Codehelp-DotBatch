'use strict';
//Default Parameter
//we can calculate the value of default parameter by specifying expression and also based on value of previous parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 100 * numPassengers
) {
  //ES5 way of assigning default value
  // numPassengers = numPassengers || 1;
  // price = price || 100;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  //console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('MH123', 2, 800);
createBooking('PP567', 3);
createBooking('PP567', 5);
createBooking('MH100', undefined, 900); //if we dont want to pass the value of any parameter we can pass undefined

//How passing arguments works: Value vs Reference
const flight = 'LH224';
const prachi = {
  name: 'Prachi Polakhare',
  passport: 12345678,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LP009';
  passenger.name = 'Miss. ' + passenger.name;
  if (passenger.passport === 12345678) {
    console.log('Checked In');
  } else {
    console.log('Wrong Passport');
  }
};

checkIn(flight, prachi);
console.log(flight); //LH224 - It does not change Even if we changed it in function
console.log(prachi); //{name: 'Miss. Prachi Polakhare', passport: 12345678} - Modified the object

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(prachi);
checkIn(flight, prachi);
console.log(prachi); //one object is modified by two different functions

//First Class function and Higher Order Function
//-----------------------------------------------
const oneWord = function (str) {
  // return str.replaceAll(' ', '');
  return str.replace(/ /g, '');
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

//Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original String : ${str}`);
  console.log(`Transformed String : ${fn(str)}`);
  //functions have properties also
  console.log(`Transformed by : ${fn.name}`);
};

transformer('Javascript is best language!', upperFirstWord);
transformer('Javascript is best language!', oneWord);

//JS uses callback all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Prachi', 'Radha', 'Sham'].forEach(high5); //will call the function three times

//Function returning other function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greetHey = greet('Hey'); //greet function returns a function that we are storing in greetHey
greetHey('Prachi'); //calling the returned function with required argument
greetHey('Jonas');

greet('Hello')('Pinku');

//rewritting same using arrow function
const greet1 = greeting => name => console.log(`${greeting} ${name}`);

greet1('Hola')('Raj');
