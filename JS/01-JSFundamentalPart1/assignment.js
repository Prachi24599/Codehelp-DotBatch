//activating stict mode
"use strict";

console.log("Assignments");
//Assignment 1
const country = "India";
const contient = "Asia";
let population = 12;
console.log("My Country is " + country);
console.log("My Continent is " + contient);
console.log("Population of my country is " + population);

//Assignment 2 - Data Types
const isIsland = false;
let language;

console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

language = "Marathi";
console.log(language);

//we cant reassign value to constant variable
//country = "America"; //Uncaught TypeError: Assignment to constant variable.

//Assignment 3 - Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population > 33);

const description =
  "The " +
  country +
  " is in " +
  contient +
  " , and It's " +
  population +
  " milion people speak " +
  language;
console.log(description);

//Assignment
let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

const johnBMI = johnWeight / (johnHeight * johnHeight);
const markBMI = markWeight / markHeight ** 2;
console.log(johnBMI, markBMI);
console.log(johnBMI > markBMI);

//Assignment - String and Template Literal
const myDetails = `The ${country} is in ${contient}, and It's ${population} milion people speak ${language}`;
console.log(myDetails);

//Assignment
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} milion below average`
  );
}

//Coding Challenge 2
const ScoreOfDolphins = (96 + 108 + 89) / 3;
const ScoreOfKoalas = (88 + 91 + 110) / 3;

if (ScoreOfDolphins > ScoreOfKoalas) {
  console.log("Dolphins Wins!");
} else if (ScoreOfDolphins < ScoreOfKoalas) {
  console.log("Koalas Wins");
} else {
  console.log("It's a Draw");
}

//Coding Challenge 3
const billValue = 275;
// let tip;
// if (billValue >= 50 && billValue <= 300) {
//   tip = (15 / 100) * billValue;
// } else {
//   tip = (20 / 100) * billValue;
// }

const tip =
  billValue >= 50 && billValue <= 300
    ? (15 / 100) * billValue
    : (20 / 100) * billValue;
console.log(tip);
console.log(
  `The bill was ${billValue}, the tip was ${tip}, and total value ${
    billValue + tip
  }`
);

//Assignment Equality Operators
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// if (numNeighbours === 1) {
//   console.log("Only 1 Border");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No Border");
// }

//Assignment Logical Operators
if (language === "English" && population <= 50 && !isIsland) {
  console.log("you should live in " + country);
} else {
  console.log(country + " does not meet your criteria :(");
}

//Assignment Switch
const lang = "gujrati";
switch (lang) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D'");
}

//Assignment - Ternary Operator
const populationStatus = population > 33 ? "above" : "below";
console.log(`${country}'s population is ${populationStatus} average`);
