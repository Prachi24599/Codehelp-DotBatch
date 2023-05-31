'use strict';

const whereAmI = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error('Problem getting country');
    console.log(res);

    const data = await res.json(); // It will also return a promise
    console.log(data);
    // renderCountry(data[0]);
  } catch (err) {
    console.error(`${err}🔥`);
  }
};
whereAmI('India');

//Error Handling with try..catch
// try {
//   let x = 1;
//   const y = 2;
//   y = 3;
// } catch (err) {
//   alert(err);
// }
