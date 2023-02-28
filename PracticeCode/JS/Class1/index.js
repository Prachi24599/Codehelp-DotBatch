//line below is used to print on console window
console.log("Hello Pinku v5!");

//We can assign any type value to variables in JS - Dont need to declare datatype
let a = true;
console.log(a);

//let vs Var
if (true) {
  let myname = "prachi"; //block scope
  //let myname = "pinku"; redeclaration is not possible
  var surname = "polakhare"; //global scope
  var surname = "pp";
  console.log(myname);
  console.log(surname);
}
//console.log(myname); //not accessible outside the block
console.log(surname);

//constant
const myValue = 10;
//myValue = 5; can't reassign value to constgit branch -M main
console.log(myValue);

//Ternary Operator
let age = 17;
let result = age >= 18 ? "Can Vote" : "Cant Vote";
console.log(result);

//while loop
let x = 1;
while (x <= 5) {
  console.log(x);
  x++;
}
console.log("---------");
//do while loop
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);
