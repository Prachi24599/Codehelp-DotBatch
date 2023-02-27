//line below is used to print on console window
console.log("Hello Pinku v5!");

//We can assign any type value to variables in JS - Dont need to declare datatype
let a = true;
console.log(a);

//let vs Var
if (true) {
  let name = "prachi"; //block scope
  //let name = "pinku"; redeclaration is not possible
  var surname = "polakhare"; //global scope
  var surname = "pp";
  console.log(name);
  console.log(surname);
}
console.log(name); //not accessible outside the block
console.log(surname);

//constant
const myValue = 10;
//myValue = 5; can't reassign value to const
console.log(myValue);
