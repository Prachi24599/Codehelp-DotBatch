//Short Circuting with && and ||
const openingHours = {
  Mon: {
    open: 10,
    close: 12,
  },
  Tue: {
    open: 7,
    close: 8,
  },
  Wed: {
    open: 0,
    close: 9,
  },
};

const restaurant = {
  name: 'Ganesh Restaurant',
  location: 'Shivaji Nagar, Pune, MH',
  categories: ['Maharastrian', 'South Indian', 'Kokni', 'Italian'],
  starterMenu: ['Salad', 'Papad', 'French Fries', 'Soup', 'Poha'],
  mainMenu: ['PuranPoli', 'Idali', 'Doza', 'Bhakri'],

  //Before ES6, If we want to use outside object in current object then,
  //timings: openingHours,

  //after ES6, we can use same object name
  openingHours,

  //Before ES6
  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`Made Pasta with ${ing1}, ${ing2}, ${ing3}`);
  // },

  //Ater ES6, we can write without fun keyword
  orderPasta(ing1, ing2, ing3) {
    console.log(`Made Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  //we can compute property names too
  [`day-${2 + 4}`]: 'Monday',
};
console.log(restaurant);

console.log('------OR-------');
//OR operand will return first truthy value of all the operands or simply the last value if all of them are falsy

console.log(3 || 'Prachi'); //3
console.log('' || 'Prachi'); //Prachi
console.log(true || 0); //true
console.log(undefined || null); //null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello

restaurant.numGuest = 0;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

//we can acheive same using logical short circuting
const guest2 = restaurant.numGuest || 10; //If the first value is truthy, then it will return it else will return 10
console.log(guest2);

//both of the solutions (for guest1 and guest2) wont work if we have restaurant.numGuest value is 0
//In that case, It will always result 10 as 0 is falsy value

console.log('-------AND-------');
//It works exact opposite way of OR
//AND operator short circuit when the first operator is falsy

//AND operator will return the first falsy value or last value if all of them are truthy

console.log(0 && 'Prachi'); //0
console.log(7 && 'Prachi'); //Prachi
console.log('Hello' && 23 && null && 'Prachi'); //null

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('veggies', 'corn');
}
//using short circuit AND
restaurant.orderPizza && restaurant.orderPizza('veggies', 'corn');

console.log('-----Nullish Coalescing Operator.....');
//nullish values are null or undefined
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);

console.log('Logical Assignment Operator ( ||=, &&=, ??= )');
const rest1 = {
  name: 'Dhaba',
  // numGuest: 20,
  numGuest: 0,
};
const rest2 = {
  name: 'Pimlico',
  owner: 'Prachi',
};

//OR assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;
//It can be written using OR assignment as
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//nullish assignment operator ??=
rest1.numGuest ??= 10; //0
rest2.numGuest ??= 10; //10

//AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'; //undefined
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>'; //why it did not store undefined in rest1 owner
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

//For of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1} : ${item[1]}`);
// }

for (const [i, element] of menu.entries()) {
  console.log(`${i + 1} : ${element}`);
}

// console.log([...menu.entries()]);

//Optional Chaining
if (restaurant.openingHours.sun) console.log(restaurant.openingHours.sun.open);

//console.log(restaurant.openingHours.wed.open); // Uncaught TypeError: Cannot read properties of undefined (reading 'open')

//with optional chaining
console.log(restaurant.openingHours?.wed?.open); //return undefined if property does not exist
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//on methods
console.log(
  restaurant.orderPasta?.('Tomota', 'Onion', 'Chius') ?? 'Method does not exist'
);

//on Arrays
const users = [{ name: 'Prachi', email: 'hello@prachi.com' }];
console.log(users[0]?.name ?? 'Not found');

//Looping objects - Object Keys, Values and Entries
//Object Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Object Value Names
const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we are open from ${open} to ${close}`);
}
