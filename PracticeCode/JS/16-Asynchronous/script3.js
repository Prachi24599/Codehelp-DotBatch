'use strict';

const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  console.log(res);
  const data = res.json(); // It will also return a promise
  console.log(data);
  // renderCountry(data[0]);
};
whereAmI('India');
