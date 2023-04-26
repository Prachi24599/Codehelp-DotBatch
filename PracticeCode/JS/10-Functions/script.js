'use strict';

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
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('MH123', 2, 800);
createBooking('PP567', 3);
createBooking('PP567', 5);
createBooking('MH100', undefined, 900); //if we dont want to pass the value of any parameter we can pass undefined
