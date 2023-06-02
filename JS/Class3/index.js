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
  return course.name === "pinku";
});
console.log(mycourse);

//arrow function
let mycourse1 = courses.find((course) => course.name === "prachi");
console.log(mycourse1);

//Removing element from array
let myarray = [1, 3, 5, 8, 9, 3, 4, 2];
//removing last element
myarray.pop();
//removing first element
myarray.shift();
//removing middle element - at index 2 (ie 5);
//splice(index of element to be removed, how many elemnets from that index we want to remove)
myarray.splice(2, 1);
console.log(myarray);

//Emptying the array
let first = [1, 2, 3, 4, 5];
let second = first;

//first = []; - It does not empty array, it points first to the empty array so second still have elements
//what if we want to completly empty the both arrays
//first.length = 0; //both array will become empty
first.splice(0, first.length); //it also empty both the arrays

// while (first.length > 0) {
//   first.pop();
// } - It'll also work

console.log(first);
console.log(second);

//combining arrays
let arr1 = [1, 3, 4];
let arr2 = [7, 8, 9];
let combined = arr1.concat(arr2);
console.log(combined); //[1, 3, 4, 7, 8, 9]

//slicing array
let sliced = combined.slice(2, 5);
console.log(sliced);

//combining and slicing on objects
let obj1 = [
  { no: 1, name: "prachi" },
  { no: 2, name: "pinku" },
];

let obj2 = [
  { no: 3, name: "radha" },
  { no: 4, name: "krishna" },
];

let com = obj1.concat(obj2);
console.log(com);

let sli = com.slice(2, 3);
console.log(sli);
