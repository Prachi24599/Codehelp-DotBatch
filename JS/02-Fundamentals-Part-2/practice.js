function sum(num1, num2) {
  return num1 + num2;
}

function lengthOfString(str) {
  return str.length;
}

// const n1 = Number(prompt("Enter first num"));
// const n2 = Number(prompt("Enter second num"));

// const addition = n1 + n2;
// const sub = n1 - n2;
// const multiply = n1 * n2;
// const quotient = n1 / n2;

// console.log(`Sum is ${addition}`);
// console.log(`Diff is ${sub}`);
// console.log(`Product is ${multiply}`);
// console.log(`Quotient is ${quotient}`);

function findLargeNum(num1, num2) {
  // if (num1 > num2) return num1;
  // else return num2;
  return num1 > num2 ? num1 : num2;
}

function reverseStr(str) {
  // let revStr = "";
  // for (let i = str.length; i >= 0; i--) {
  //   revStr += str.charAt(i);
  // }
  // return revStr;
  // Convert the string to an array, reverse the array, then join it back into a string
  const reversedString = str.split("").reverse().join("");
  return reversedString;
}

// let s = "Prachi";
// console.log(s.split(""));
// console.log(s.split("").reverse());
// console.log(s.split("").reverse().join(""));

function checkNumber(n) {
  if (n > 0) {
    console.log(`${n} is positive`);
  } else if (n < 0) {
    console.log(`${n} is negative`);
  } else {
    console.log(`It is Zero`);
  }
}

function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(`${num} * ${i} = ${result}`);
  }
}

function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const vowels = "aeiouAEIOU";
function printVowels(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    //console.log(s.charAt(i));
    if (vowels.includes(s.charAt(i))) count++;
  }
  return count;
}

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) count++;
  }
  return count;
}

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// function combineArray(arr1, arr2) {
//   //console.log(`${arr1} and ${arr2} is combined`);
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       if (!result.includes(arr1[1])) result.push(arr1[i]);
//     }
//   }
//   result.sort((a, b) => a - b);
//   return result;
// }
//combineArray(array1, array2);

const arr1 = [7, 2, 3, 4, 5, 3, 4, 7];
const arr2 = [3, 4, 5, 6, 7];
function commanElementsInArray(arr1, arr2) {
  const combineArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      if (!combineArray.includes(arr1[i])) combineArray.push(arr1[i]);
    }
  }
  combineArray.sort();
  return combineArray;
}

//Practice 2
