'use strict';

//Event Loop in Practice
/*
console.log('Test Start');
setTimeout(() => console.log('0 Sec Timer'), 0);
Promise.resolve('Resolved Promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test End');
*/

//Building a Simple Promise
//Fulfilled Promise - Win Lottery
//Rejected Promise - loose
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win 💰💸');
    } else {
      reject(new Error('You Loose your Money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
//This will create a promise which will wait for 2 seconds and after 2 secs, It will resolve
wait(2)
  .then(() => {
    console.log('I waited for 2 sec');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 sec'));