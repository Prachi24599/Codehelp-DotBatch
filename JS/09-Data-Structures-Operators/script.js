'use strict';
/*
const arr = [1, 2, 4];
const [a, b, c] = arr;
console.log(a, b, c);
console.log(arr);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary); //got swapped without creating new varible

//console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Destructing
const nested = [2, 4, [5, 6]];
// const [p, , q] = nested;
// console.log(p, q);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default Values
const [q = 1, w = 1, e = 1] = [9, 7];
console.log(q, w, e);
*/

//Object Destructing
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '05:00',
  }) {
    //console.log(obj);
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPaste: function (ing1, ing2, ing3) {
    console.log(`Made Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

/*
//passing obj as fun argument
restaurant.orderDelivery({
  time: '22:30',
  address: 'Kulamkhed, Malkapur',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Pune, MH',
  starterIndex: 3,
});

//we need to specify the exact property name
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: timings,
  categories: tags,
} = restaurant;
console.log(restaurantName, timings, categories);

//setting default values to object properties
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variable - changing values of variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//we want to make a = 23 and b = 7

({ a, b } = obj);
console.log(a, b);

//we want the opening hours of friday
const { fri } = restaurant.openingHours;
console.log(fri);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//renaming the nested variables
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
//SPREAD Operator (...)
const arr = [3, 4, 5];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

//using spread operatoe
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); //1 2 3 4 5

const newMenu = [...restaurant.mainMenu, 'Pooran Poli'];
console.log(newMenu);

//copy - creating shallow copy of restaurant.mainMenu
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Spread operator not just works on arrays but all iterables
//Iterables are Array, string, map, sets but NOT objects
const str = 'Prachi';
const letters = [...str, ' ', 'P.'];
console.log(letters);
console.log(...str); //P r a c h i
// console.log(`${...str} Polakhare`); caught SyntaxError: Unexpected token '...' (at script.js:169:16)

//Real world Example
const ingredients = [
  // prompt('Enter Ing1'),
  // prompt('Enter Ing2'),
  // prompt('Enter Ing3'),
];
console.log(ingredients);

//restaurant.orderPaste(ingredients[0], ingredients[1], ingredients[2]);
//passing arguments to the function using SPREAD operator
restaurant.orderPaste(...ingredients);

//From ES6 onwards, the Spread operator also works on objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Prachi' };
console.log(newRestaurant);

//Shallow copy on objects works same
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Polakhare';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

//REST operator -It actually does opposite of the spread operator
//to collect multiple elements and condense them into an array.
//The spread operator is to unpack an array
//while rest is to pack elements into an array

//1) Destructuring

//Spread because right side of the assignment operator
const arr1 = [1, 2, ...[3, 4]];
console.log(arr1); //1 2 3 4

//Rest because left side of (=) assignment operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2 (3) [3, 4, 5]

//REST(on left) = SPREAD(on right)
const [Pizza, , Risotto, ...renaming] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
//It does not include any skipped elements, here pasta
//rest pattern should always be last
console.log(Pizza, Risotto, renaming);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//2) Functions
//Rest - pack the numbers into an array
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
// add(2, 3);
// add(5, 3, 2, 7);
// add(1, 5, 2, 3, 7, 9, 5);

const x = [23, 5, 7];
add(...x); //Spread - unpack the array

restaurant.orderPizza('mushrooms', 'olives', 'onion', 'spinach');
