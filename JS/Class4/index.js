//console.log("Hello..");

//creating fun
function run() {
  console.log("function running");
}

//fun call
run();

//stand(); - we can not access function assignment before declaration

//function assignment
//named function assignment
let stand = function walk() {
  console.log("walking");
};

//walk(); - error : walk is not defined
stand(); //walking

//anonymous funcation assignment
let stand2 = function () {
  console.log("standing");
};
stand2();

let jump = stand2;
jump(); //standing

//----------Function Arguments--------------
// function sum(a, b) {
//   return a + b;
// }
function sum(a, b) {
  //console.log(arguments);
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}
console.log(sum(1, 3)); // 4
console.log(sum(1)); //NaN
console.log(sum()); //NaN
console.log(sum(1, 2, 3, 4, 5)); //3 - It will take first 2 numbers and calculate, other nums will be ignored

//REST Operator
function add(num, value, ...args) {
  console.log(args);
}
add(1, 2, 3, 4, 5, 6, 7);
//num = 1
//value = 2
//args = 3, 4, 5, 6, 7

//Default Parameter
function simpleInterest(p, r = 4, n) {
  return (p * r * n) / 100;
}
console.log(simpleInterest(1000, 5, 2));

//console.log(simpleInterest(1000, undefined, 2)); - hack, not a good practice

//GETTER AND SETTER
//getter - access properties - read only
//setter - change or muted properties
let person = {
  fName: "Prachi",
  lName: "Polakhare",
  //getter
  get fullName() {
    return `${this.fName} ${this.lName}`;
  },
  //setter
  set fullName(value) {
    let pair = value.split(" ");
    this.fName = pair[0];
    this.lName = pair[1];
  },
};

//calling getter
console.log(person.fullName);

//calling setter
person.fullName = "Eshika Shahu"; //this goes to setter
console.log(person.fullName);
