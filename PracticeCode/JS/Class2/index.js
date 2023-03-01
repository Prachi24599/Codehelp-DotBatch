console.log("lets start");

//creating object
let rectangle = {
  length: 1,
  breadth: 2,
  draw: function () {
    console.log("drawing");
  },
};

// let rectangle1 = {
//   length: 2,
//   breadth: 4,
//   area: function () {
//     console.log("finding area");
//   },
// };

//factory funtion
function createRectangle(len, bre) {
  //creating obj inside function
  return (factoryRectangle = {
    // length: len,
    // breadth: bre,
    len,
    bre,
    area: function () {
      console.log("calculate area");
    },
  });
  // return rectangle;
}

let rectangleObj = createRectangle(5, 4);
console.log(rectangleObj);

let rectangleObj2 = createRectangle(6, 5);
console.log(rectangleObj2);

//camel case - numberOfStudents
//Pascal Notation - NumberOfStudents - first letter of every word is capital
//constructor function - initialize/define properties/functions
function MyRectangle(len, bre) {
  // this.length = 2;
  // this.breadth = 1;
  this.length = len;
  this.breadth = bre;
  this.draw = function () {
    console.log("drawing");
  };
}

//object creation using constructor function
let rectangleObject = new MyRectangle(4, 6);
// console.log(MyRectangle);

rectangleObject.color = "Blue";
delete rectangleObject.length;

//constructor property
let Rectangle1 = new Function( //Function is inbuild
  "length",
  "bredth",
  `this.length = length;
  this.breadth = bredth;
  this.draw = function () {
    console.log("drawing");
  };`
);
//object creation using Rectangle1
let rect = new Rectangle1(2, 3);
rect.length;
console.log(rect);

//primitives
//primitives are copied by their address
let a = 10;
let b = a;
a++;
console.log(a); //11
console.log(b); //10

//References
//References are copied by their address
let c = { value: 10 };
let d = c;
c.value++;
console.log(c.value); //11
console.log(d.value); //11

//for in loop - can iterate over object
let myrect = {
  length: 2,
  breadth: 4,
};

// for (let keys in myrect) {
//   //keys are reflected through key variable
//   //values are reflected through myrect[keys]
//   console.log(keys, myrect[keys]);
// }

//we cant apply for-of loop on objects
// for (let keys of myrect) {
//   //Uncaught TypeError: myrect is not iterable
//   console.log(keys, myrect[keys]);
// }

// Object.keys(myrect) - It'll create an array of keys
for (let key of Object.entries(myrect)) {
  console.log(key);
}

//How to check if the property is present in object or not?
if ("color" in myrect) {
  console.log("Present");
} else {
  console.log("Absent");
}

//Object Cloning
//1)Iteration
// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };
// let dest = {};
// for (let key in src) {
//   dest[key] = src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);

//2)Assign
// let src = {
//   a: 10,
//   b: 20,
// };
// let src2 = {
//   value: 33,
// };
// //let dest = Object.assign({}, src);
// let dest = Object.assign({}, src, src2);
// console.log(dest); //{a: 10, b: 20, value: 33}

//3)Spread
let src = {
  a: 11,
  b: 22,
};
let dest = { ...src };
console.log(dest); //{a: 11, b: 22}
src.a++;
console.log(dest); //{a: 11, b: 22}
