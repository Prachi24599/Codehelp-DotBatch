'use strict';

const whereAmI = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error('Problem getting country');
    console.log(res);

    const data = await res.json(); // It will also return a promise
    console.log(data);
    // renderCountry(data[0]);

    //This returned string will become the fulfilled value of the promise that is returned by function
    return `You are in ${data[0].capital}, ${data[0].name.common}`;
  } catch (err) {
    console.error(`${err}🔥`);

    //Reject promise returned from async function
    throw err;
  }
};
console.log('1. Will get Location');
// const city = whereAmI('India');
// console.log(city);

whereAmI('India')
  .then(city => console.log(`2. ${city}`))
  //If we want to catch the error which occured in fun (before return)
  //then we need to rethrow the error from catch block of fun
  .catch(err => console.error(`2. ${err}`))
  .finally(() => console.log('3. Finished getting location'));

//Using IIFE - Immedietly invoked function expression to handle the above promise using aynce-wait
//insted of using then-catch

(async function () {
  try {
    const city = await whereAmI('India');
    console.log(`2. ${city}`);
  } catch (err) {
    console.error(`2. ${err}`);
  } finally {
    console.log('3. Finished getting location');
  }
})();

//Error Handling with try..catch
// try {
//   let x = 1;
//   const y = 2;
//   y = 3;
// } catch (err) {
//   alert(err);
// }

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

//Running Promises in Parallel
const get3Countries = async function (c1, c2, c3) {
  try {
    // const res1 = await fetch(`https://restcountries.com/v3.1/name/${c1}`);
    // const data1 = await res1.json();
    // These 3 Promises will run one after another even if they are not dependent on each other
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log(data1.capital, data2.capital, data3.capital);

    //Using Promise.all(), we are passing array of promises as input and It will return promise in output
    //It will run all the promises in parallel
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital[0]));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('Japan', 'China', 'India');

//Other Promise Combinators : race, allSettled and any
//Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();

//Timeout function that will get rejected in specified amount of time
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v3.1/name/india`), timeout(1)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));
//O/P - This will return the array of all settled promises

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
//o/p script3.js:126 ERROR
