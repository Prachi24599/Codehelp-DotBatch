//Short Circuting with && and ||

const restaurant = {
  name: 'Ganesh Restaurant',
  location: 'Shivaji Nagar, Pune, MH',
  categories: ['Maharastrian', 'South Indian', 'Kokni', 'Italian'],
  starterMenu: ['Salad', 'Papad', 'French Fries', 'Soup', 'Poha'],
  mainMenu: ['PuranPoli', 'Idali', 'Doza', 'Bhakri'],
};
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
