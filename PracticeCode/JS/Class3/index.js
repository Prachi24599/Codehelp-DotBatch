//String - Primitive and Object
let lastname = "Polakhare";
let firstname = new String("Prachi");
//console.log(lastname.length);

//Template Literal
//let message = "This is \n my \n first message";
let message = `This
is 
my 
second
message`;
console.log(message);
console.log(`hello ${lastname}`);
// let words = message.split(" ");
// console.log(words);

//Date and Time
//Month 0 - Jan
//Month 1 - Feb ..
let date = new Date();
let date2 = new Date("May 24 1999 10:25");
let date3 = new Date(1999, 7, 26, 10);

date3.setFullYear("1977");
date3.setMonth("11");
console.log(date3);

//Arrays
let numbers = [1, 3, 5, 7];
console.log(numbers);

//Inserting element at the end
numbers.push(10);
console.log(numbers); //[1, 3, 5, 7, 10]

//Inserting element at the start
numbers.unshift(11);
console.log(numbers); //[11, 1, 3, 5, 7, 10]

//Inserting element at the middle
//splice(index, delete_count, values_to_insert);
numbers.splice(2, 0, "a", "b", "c");
console.log(numbers);

//Searching
let arr = [1, 7, 3, 9];
console.log(arr.indexOf(9)); //3
console.log(arr.indexOf(5)); //-1

//check if num if present
// if (arr.indexOf(6) != -1) console.log("present");
// else console.log("not present"); -- This is not write way

//includes returns true or false
if (arr.includes(7)) console.log("Present");
else console.log("Not Present");

//we are searching if 1 is present is arr from 3rd index omwards
console.log(arr.indexOf(1, 3)); //-1

let courses = [
  { num: 1, name: "prachi" },
  { num: 2, name: "pinku" },
];
console.log(courses);

console.log(courses.indexOf({ num: 1, name: "prachi" })); //-1 why returning -1 even if obj is present
//because both are different objects having different address

console.log(courses.includes({ num: 1, name: "prachi" })); //false

//callback function
let mycourse = courses.find(function (course) {
  return courses.name === "pinku";
});
console.log(mycourse);

//arrow function
let mycourse1 = courses.find((course) => courses.name === "prachi");
console.log(mycourse1);
