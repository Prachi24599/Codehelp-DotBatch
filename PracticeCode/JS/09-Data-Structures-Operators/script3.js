//SET
/*
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
  'Pizza',
]);
console.log(ordersSet);
//String is also an iterable
const s = new Set('Prachi');
console.log(s); //Set(6) {'P', 'r', 'a', 'c', 'h', 'i'}

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet); //Garlic Bread is added only once
//indexes does not work on the set
//console.log(ordersSet[1]); -> undefined
for (const order of ordersSet) console.log(order);

//Example
const staff = ['waiter', 'manager', 'waiter', 'manager', 'clert'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// converting set into an array
// const staffArr = [...staffUnique];
// console.log(staffArr);
console.log(new Set(['waiter', 'manager', 'waiter', 'manager', 'clert']).size);

//counting number of unique letters in string
console.log(new Set('PrachiPolakhare').size);
*/

//MAP
const rest = new Map();
rest.set('name', 'Pimlico');
rest.set(1, 'Mumbai');
console.log(rest.set(2, 'Pune')); //set method adds new element and return the updated map

rest
  .set('categories', ['Maharastrian', 'South Indian', 'Kokni', 'Italian'])
  .set('open', 11)
  .set('close', 20)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 12;
//use of boolean keys
console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));

//check if value is present in the map
console.log(rest.has('categories')); //true

rest.delete(2);

//rest.set([1, 3], 'Test');
// console.log(rest.get([1, 3])); //undefined
const arr = [1, 3];
rest.set(arr, 'TEst');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get(arr)); //TEst

console.log(rest);
//rest.clear(); //remove all the elements from the map
console.log(rest.size); //return size of map

//Maps : Iteration
//another way of creating a map is
const question = new Map([
  ['question', 'Which is best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);

//Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer :${key} : ${value}`);
  }
}
// const answer = Number(prompt('Your Answer'));
// console.log(`You selcted ${question.get(answer)}`);
// console.log(question.get(answer === question.get('Correct')));

//convert map to an array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
