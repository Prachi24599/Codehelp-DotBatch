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
console.log(prachi);
