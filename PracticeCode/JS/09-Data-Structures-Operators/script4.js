'use strict';
const airline = 'TAP Air Portugal';
const plane = 'A320';
/*
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]); //B

console.log(airline.length);
console.log('Prachi'.length);

console.log(airline.indexOf('r')); //6
console.log(airline.lastIndexOf('r')); //10
console.log(airline.indexOf('Portugal')); //8 - index where the string started

console.log(airline.slice(4)); //from index 4 which is begin parameter , it will return the string - Air Portugal
console.log(airline.slice(4, 7)); //Air - return substring between starting and ending index
//NOTE - the length and extracted string will be end - begin ie. 7 - 4 = 3
console.log(airline.slice(0, airline.indexOf(' '))); //TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
//negative index
console.log(airline.slice(-4)); //ugal
console.log(airline.slice(0, -5)); //TAP Air Por
console.log(airline[-1]); //undefined
//NOTE - we can not access negative indexes directly, we need to use slice method if we want to use neg index

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('It is middle seat');
  else console.log('You got lucky!');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//String is Primitive then how we are able to call methods on string?
//--> JS convert string primitive to string object behind the scene and these methods are being called on str obj
console.log(typeof new String('Prachi')); //object
console.log(typeof 'Prachi'); //string
//when operation on string is done then object is converted back to regular string primitive
//all str methods return primitive even it's called on the object
console.log(typeof new String('John').slice(1)); //string 
*/

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = 'PrAcHi'; //Prachi
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrectName =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrectName);

//comparing emails
const email = 'hello@prachi.io';
const loginEmail = 'Hello@Prachi.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const correctEmail = loginEmail.toLowerCase().trim();
console.log(correctEmail);
console.log(email === correctEmail);

const p = '   prachi polakhare    ';
console.log(p.trimStart()); //remove white spaces only at the start of string
console.log(p.trimEnd()); //remove white spaces only at the end of string

//replacing
const priceUS = '237,89@';
const priceIn = priceUS.replace('@', '$').replace(',', '.');
console.log(priceIn);

const announcement = 'gate 23 is open!, come to gate 23';
const a = announcement.replace('gate', 'door'); //String are immutable in js, It does not modify original string, it creates new string
// console.log(a);
// console.log(announcement);
console.log(announcement.replaceAll('gate', 'door'));
//using simple regular expression
console.log(announcement.replace(/gate/g, 'doorororro')); //g flag stands for global - means replace all string

//Boolean
const myPlane = 'Airbus A320neo';
console.log(myPlane.includes('A320')); //true
console.log(myPlane.includes('Boeing')); //false
console.log(myPlane.startsWith('Air')); //true
if (myPlane.startsWith('Airbus') && myPlane.endsWith('neo')) {
  console.log('Part of new air bus family');
}
//NOTE : when we get input as a strin, always convert it to lowercase first
