const calcAverage = (val1, val2, val3) => (val1 + val2 + val3) / 3;

//Test 1
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log('None wins');
  }
}

//checkWinner(avgDolphins1, avgKoalas1);
//Test 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
checkWinner(avgDolphins2, avgKoalas2);

//Fundamental 2 Excecise
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} milion people and its capital city is ${capitalCity}`;
// }
// let indiaDesc = describeCountry('India', '12', 'Delhi');
// //console.log(indiaDesc);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// console.log(percentageOfWorld1(1441));

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
// console.log(percentageOfWorld2(1229));

// const percentageOfWorld3 = population => (population / 7900) * 100;
// console.log(percentageOfWorld3(1449));

// const describePopulation = function (country, population) {
//   return `${country} has ${population} milion people, which is about ${percentageOfWorld3(
//     population
//   ).toFixed(2)}% of the world \n`;
// };
// console.log(describePopulation('India', 1441));
// let descChina = describePopulation('China', 1899);
// let descUS = describePopulation('US', 1345);
// console.log(descChina, descUS);
