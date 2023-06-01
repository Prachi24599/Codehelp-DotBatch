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

//Error Handling with try..catch
// try {
//   let x = 1;
//   const y = 2;
//   y = 3;
// } catch (err) {
//   alert(err);
// }
