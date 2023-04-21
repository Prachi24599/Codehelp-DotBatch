// "use strict";

// let hasDriversLicence = false;
// const passTest = true;
// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log("I can drive well :D");

// //Strict mode reserve the word from using it as variable name
// //const interface = "Hell0"; //Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:10:7)
// // const private = 123;

// //functions
// function logger() {
//   console.log("Hello");
// }
// //calling/running/invoking a function
// logger();

// function foodProcesser(apple, oranges) {
//   console.log(apple, oranges);
//   const juice = `Juice with  ${apple} apples and ${oranges} oranges.`;
//   return juice;
// }
// const result = foodProcesser(3, 4);
// console.log(result);
// //console.log(foodProcesser(5, 6));
// const appleOrangeJuice = foodProcesser(2, 5);
// console.log(appleOrangeJuice);

// //function declaration
// const age1 = calcAge1(1999); // we can access fun declaration before initialization
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }
// console.log(age1);

// //function expression
// //const age2 = calcAge2(1999); //Uncaught ReferenceError: Cannot access 'calcAge2' before initialization
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// // const age2 = calcAge2(1999);
// // console.log(age2);

// //Arrow function
// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(1999);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 60 - age;
//   //return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1999, "Prachi"));

//function calling another function

// function cutPieces(fruit) {
//   return fruit * 3;
// }

// function foodProcesser(apple, oranges) {
//   const applePieces = cutPieces(apple);
//   const orangePieces = cutPieces(oranges);

//   console.log(apple, oranges);
//   const juice = `Juice with  ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }
// console.log(foodProcesser(2, 3));

function calcAge(year) {
  return 2023 - year;
}

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};
// console.log(yearsUntilRetirement(1999, "Prachi"));
// console.log(yearsUntilRetirement(1960, "Jack"));

//Arrays
// const friends = ["Radha", "Sita", "Sham"];
// console.log(friends);

// const y = new Array(1999, 2000, 2010, 8999);
// console.log(y);

// friends[2] = "Gajanan";
// console.log(friends);

// const firstName = "Prachi";
// const prachi = [firstName, "Polakhare", 2023 - 1999, "Web Developer", friends];
//console.log(prachi);

// function calcAge(birthYear) {
//   return 2023 - birthYear;
// }

// const years = [1999, 2020, 1991, 1998];
// const age = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(age);

// const friends = ["Radha", "Sita", "Sham"];
// //Add element at the end
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);
// console.log(friends.push("Pihu")); //prints the new length
// //add element at the start
// friends.unshift("Piya");
// console.log(friends);

// //Remove elements
// //pop - remove the last element
// friends.pop(); //Pihu
// const removedFrd = friends.pop(); //Jay
// console.log(removedFrd);
// console.log(friends);

// //shift - remove the first element and return it
// const e = friends.shift();
// console.log(e); //piya
// console.log(friends);

// //indexOf - return the index of specified element from the array
// console.log(friends.indexOf("Sita")); //1
// console.log(friends.indexOf("Seema")); //-1 as seema is not present in the array

// //includes - return true if the element is present else return false
// console.log(friends.includes("Sita")); //true
// console.log(friends.includes("Seema")); //false

// if (friends.includes("Sita")) {
//   console.log("you have frd sita");
// }

// function calcTip(billValue) {
//   if (billValue >= 50 && billValue <= 300) return (15 / 100) * billValue;
//   else return (20 / 100) * billValue;
// }

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [];

// function allTips(bills) {
//   for (let i = 0; i < bills.length; i++) {
//     tips[i] = calcTip(bills[i]);
//   }
// }
// const totalT = [];
// function total(bills, tips) {
//   for (let i = 0; i < bills.length; i++) {
//     totalT[i] = bills[i] + tips[i];
//   }
// }

// allTips(bills);
// total(bills, tips);

// console.log(tips);
// console.log(totalT);

//Objects
const prachi = {
  firstName: 'Prachi',
  lastName: 'Polakhare',
  age: 2023 - 1999,
  job: 'Software Engineer',
  friends: ['Ram', 'Sham', 'Geetha'],
};
// console.log(prachi);

// console.log(prachi.lastName);
// console.log(prachi["lastName"]);

// const nameKey = "Name";
// console.log(prachi[`first` + nameKey]);
// console.log(prachi[`last` + nameKey]);
// The same computation will not work for . notation
// console.log(prachi.'first'+nameKey)

// const interestedIn = prompt(
//   "What do u want to know about prachi? choose betwwen firstName, lastName, age, job, friends"
// );
//console.log(prachi.interestedIn); dot notation does not work here
// if (prachi[interestedIn]) {
//   console.log(prachi[interestedIn]);
// } else {
//   console.log("choose correct value between..");
// }

//adding new properties to the object
prachi.location = 'malkapur';
prachi['twitter'] = '@PPolakhare';
console.log(prachi);

//challenge
//using bracket notation
console.log(
  `${prachi['firstName']} has ${prachi['friends'].length} friends, and her best friend is called ${prachi['friends'][0]}`
);
//using not notation
console.log(
  `${prachi.firstName} has ${prachi.friends.length} friends, and her best friend is called ${prachi.friends[0]}`
);

const prachipp = {
  firstName: 'Prachi',
  lastName: 'Polakhare',
  birthYear: 1999,
  job: 'Software Engineer',
  friends: ['Ram', 'Sham', 'Geetha'],
  hasDriversLicence: false,
  //func expression
  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },
  // calcAge: function () {
  //   // console.log(this);
  //   return 2023 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, she has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence `;
  },
};
// console.log(prachipp.calcAge());
// console.log(prachipp["calcAge"](1999));

console.log(prachipp.calcAge());
console.log(prachipp.age);
console.log(prachipp.age);
console.log(prachipp.age);

console.log(prachipp.getSummary());

//For Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetation ${rep}`);
// }

const prachiArray = [
  'Prachi',
  'Polakhare',
  2023 - 1999,
  'Software Engineer',
  ['Ram', 'Sham', 'Geetha'],
];
const types = [];

/*for (let i = 0; i < prachiArray.length; i++) {
  console.log(prachiArray[i]);
  //filling type array
  //types[i] = typeof prachiArray[i];
  types.push(typeof prachiArray[i]);
}
console.log(types);*/
