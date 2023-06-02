/*let js = "amazing";
 if (js === "amazing") alert("js is fun");
console.log(40 + 8 - 23);

console.log("Prachi");
let firstName = "Pinky";
console.log(firstName);

let myFirstJob = "Project Engineer";
let myFutureJob = "WebDeveloper";

console.log(myFutureJob); 

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun); //boolean
console.log(typeof "Prachi"); //string
console.log(typeof 34); //number

javascriptIsFun = "YES";
console.log(typeof javascriptIsFun); //string

//undefined - value taken by variable that is not yet defined('Empty Value')
let year;
console.log(year); //undefined
console.log(typeof year); //undefined

console.log(typeof null); //object - This is the Bug in js which is not fixed due to legacy reason
*/

let age = 23;
age = 24;

//const birthYear;
const birthYear = 1999;
//birthYear = 1998;

var a;
var job = "Programmer";
job = "Coder";
a = 10;

lastName = "Polakhare";
console.log(lastName);

//Arithematic Operator
const now = 2037;
const agePrachi = now - 1999;
const ageJyoti = now - 1979;
console.log(agePrachi, ageJyoti);
console.log(agePrachi * 2, agePrachi / 2, 2 ** 4);

//Assignment Operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // 100
x++; //101
x--; // 100
x--; //99
console.log(x);

//Comparison Operator
console.log(agePrachi > ageJyoti); //false
// < <= > >=

//operator precedance
console.log(now - 1999 > now - 1979); //false
// - has higher precedence than >

let p, q;
p = q = 25 - 10 - 5;
console.log(p, q); // 10 10

const averageAge = (agePrachi + ageJyoti) / 2;
console.log(agePrachi, ageJyoti, averageAge);

//Template Literal
const firstName = "Prachi";
const currentYear = 2023;
const myBirthYear = 1999;
const profession = "Web Developer";

//using normal string concatenation
const myInfo =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - myBirthYear) +
  " year old " +
  profession +
  "!";
console.log(myInfo);

//using template literal/ back ticks
const myDetails = `I'm ${firstName}, a ${
  currentYear - myBirthYear
} year old ${profession}!`;
console.log(myDetails);

//we can print regular string with backticks also
console.log(`Just a regular String`);

console.log(
  "This is \n\
testing \n\
new line"
);

console.log(`It becomes
easier to print
new lines with
template literal`);

//If else statement
const mybirthYear = 1999;
let century;
if (myBirthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century); //20

//Type Conversion = Manually converting one type to another
const inputYear = "1999";
console.log(Number(inputYear), inputYear);
console.log(Number("Prachi")); //NaN
//typeof NaN is number but it is invalid number
console.log(String(23), 23);
console.log(typeof String(23), typeof 23); //string number

//Type Coercion - Js automatically convert value from one type to another
console.log("I'm " + 23 + " years old"); //23 is internally converted to string in case of +
console.log("I'm " + "23" + " years old"); // It is same as writting above
console.log("23" - "10" - 3); //10 - In case of substraction, string got converted to number
console.log("23" * "2"); //same in case of multiplay
console.log("46" / "2"); // same in case of division

let n = "1" + 1; //11
n = n - 1; //10
console.log(n); //10

console.log(2 + 3 + 4 + "5"); //95

//Truthy and Falsy Values
//falsy values = 0, '', null, undefined, NaN, (false also as It's already false)
console.log(Boolean(0)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean("Prachi")); //true
console.log(Boolean({})); // passing empty obj - empty obj is not false so output = true

let money; //its undefined means falsy
if (money) {
  console.log("Dont spend all");
} else {
  console.log("Find a Job"); //so else will execute
}

let aa = 10;
let bb = "10";
console.log(aa == bb); //true
console.log(aa === bb); //false

//const input = prompt("Enter a Number:"); //by default promt returns all values as String
// console.log(input);
// console.log(typeof input);

//Switch Statement
const day = "sunday";
switch (day) {
  case "monday":
    console.log("Self Day");
    break;
  case "tuesday":
    console.log("Study day");
    break;
  default:
    console.log("Enter a valid day");
    break;
}

const myAge = 22;
myAge >= 18
  ? console.log("Allow to take wine 🍷")
  : console.log("Go to Home Beta..😁");

const drink = myAge >= 18 ? "Wine" : "Water";
console.log(drink);

//As the ternary operator is an expression as it produces value, we can use it in template literal also
console.log(`I like to drink ${myAge >= 18 ? "Wine" : "Water"}`);
