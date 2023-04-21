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
};

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
const { fri } = openingHours;
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
