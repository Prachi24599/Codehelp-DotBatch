let age = 24;
let oldAge = age;
age = 25;
console.log(`Age - ${age}`);
console.log(`oldAge - ${oldAge}`);

const me = {
  age: 24,
};

const friend = me;
friend.age = 18;
console.log('Me', me); //18
console.log('Friend', friend); //18

let firstName = 'kmp';
let myName = firstName;
myName = 'koushik';
console.log(myName);
console.log(firstName);

let userOne = {
  email: 'kmp@gmail.com',
  upi: 'kmp@ybl',
};

let userTwo = userOne;
userTwo.email = 'abc@gmail.com';
console.log(userOne.email); //abc@gmail.com

//copyting obj
const copiedUser = Object.assign({}, userOne);
copiedUser.email = 'pp@gmail.com';
console.log('Before', userOne);
console.log('After', copiedUser);
