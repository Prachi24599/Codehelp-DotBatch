// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), 
and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // console.log(text);
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
/*
const convertCase = function (list) {
  const s = list.split('\n');
  for (const val of s) {
    const newStr = val.toLowerCase().trim();
    //console.log(newStr);
    const result = newStr.split('_');
    //console.log(result);
    const convertedCase =
      result[0] + result[1][0].toUpperCase() + result[1].slice(1);
    console.log(convertedCase);
  }
  // console.log(s);
};

convertCase(`underscore_case
first_name
Some_Variable 
 calculate_AGE,
delayed_departure`);
*/

/*
const movements = [300, -400, 200, 100, -50];
//order of parameter matters (name does not)
//first parameter - current array element
//second parameter - current array index
//third parameter - entire array
movements.forEach(function (move, i, arr) {
  console.log(move, i, arr);
});
//Note : The continue and break statement do not work in forEach loop
*/
