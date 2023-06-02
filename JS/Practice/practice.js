//1 Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.

function greet(name) {
  //console.log("Welcome " + name);
  console.log(`Hello ${name}, What are you doing today?`);
}

//2 Write a function called 'getSquare' that takes a number parameter and returns its square.
function getSquare(number) {
  // return number * number;
  // return Math.pow(number, 2); // using power function also we can acheive that
  return number ** 2; //  // Use the exponent operator (**) to square the number parameter
}

//3 Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string
function countLetters(str) {
  //creating the empty object
  const count = {};
  //loop through each character in string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    //If the character is already present in obj
    if (count[char]) {
      //increment It's value
      count[char]++;
    } else {
      //add the char with count 1
      count[char] = 1;
    }
  }
}
