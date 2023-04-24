//SET
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
