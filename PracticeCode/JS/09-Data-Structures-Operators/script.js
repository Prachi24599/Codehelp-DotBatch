'use strict';

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
