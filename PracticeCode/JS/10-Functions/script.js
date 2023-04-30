'use strict';
//Default Parameter
//we can calculate the value of default parameter by specifying expression and also based on value of previous parameters
/*
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
*/
//call and apply methods
const indigo = {
  airline: 'Indigo',
  code: 'IDG',
  bookings: [],
  //book : function(flightNum, name) - old syntax
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.code}${flightNum}`,
      name,
    });
  },
};
indigo.book('123', 'Prachi Polakhare');
indigo.book('456', 'Ram Joshi');
console.log(indigo);

const vistara = {
  airline: 'Vistara',
  code: 'VS',
  bookings: [],
};

const book = indigo.book;
//book('343', 'PP'); // TypeError: Cannot read properties of undefined (reading 'airline')
//This is regular function call and In regular function call, this keyword points to undefined
//this keyword depends on how the function is actually called

//vistara.book('444', 'Pinku Rathod'); vistara.book is not a function

//call, apply and bind
//CALL
book.call(vistara, '89', 'Sarah Singh');
//first argument is what we want the this keyword to point to
console.log(vistara);

book.call(indigo, 77, 'Mary Jossy');
console.log(indigo);

const airIndia = {
  airline: 'Air India',
  code: 'AIR',
  bookings: [],
};
book.call(airIndia, 90, 'Rebecca Irven');

//APPlY - does same as call method but it does not receive list of arguments after the this keyword but
//instead it takes array of an argument, It will then take elements from that array and will pass it to the function
const flightData = [66, ' '];
// book.apply(airIndia, [66, 'Karl Miler']);
book.apply(airIndia, flightData);

//Apply method is not used much now, The better way of doing this is using spread operaror with call method(to spread array data)
book.call(airIndia, ...flightData);
console.log(airIndia);

//bind method

//if we want to call book method only on vistara obj then
const bookVS = book.bind(vistara);
const bookIN = book.bind(indigo);
const bookAI = book.bind(airIndia);
bookVS(44, 'John Doe');

const bookVS23 = book.bind(vistara, 55); //now the flightNum is already set here in bind fun
//when we call bookVS23() we only need to pass the name
bookVS23('Prachi Polakhare');
bookVS23('Om Pahade');

//bind method is also used when we use object together with eventListener
indigo.planes = 300;
indigo.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// indigo.buyPlane();
// document.querySelector('.buy').addEventListener('click', indigo.buyPlane); here, this keyword point to the button
// on which click event is defined
document
  .querySelector('.buy')
  .addEventListener('click', indigo.buyPlane.bind(indigo));
