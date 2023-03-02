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
