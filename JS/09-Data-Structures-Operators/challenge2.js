const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console
 (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw").
 HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties,
and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

//1
for (const [i, name] of game.scored.entries()) {
  //console.log(player);
  console.log(`Goal ${i + 1} : ${name}`);
}
//2
const odds = Object.values(game.odds);
let average = 0;
for (const val of odds) {
  average += val;
}
average /= odds.length;
console.log(average);

//3
// console.log(`Out of Victory ${game.team1}: ${game?.odds?.team1}`);
// console.log(`Out of draw: ${game?.odds?.x}`);
// console.log(`Out of Victory ${game.team2}: ${game?.odds?.team2}`);
for (const [team, odd] of Object.entries(game.odds)) {
  //console.log(team, odd);
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`Out of  ${teamStr}: ${odd}`);
}

//4
const scorers = {};
//  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
for (let i = 0; i < game.scored.length; i++) {
  if (scorers[game.scored[i]]) {
    scorers[game.scored[i]]++;
  } else {
    scorers[game.scored[i]] = 1;
  }
}
console.log(scorers);
