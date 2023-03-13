// //promise
// let myPromise = new Promise(function (resolve, reject) {
//   console.log("Im inside promise");
//   resolve(1999);
//   //reject(new Error("error occoured"));
// });

// //Async Promise
// let myPromise2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Im inside settimeout promise");
//   }, 5000);
//   // resolve(2323);
//   reject(new Error("I got an Error!"));
// });
// console.log("Pehlaa");

// myPromise2.then(
//   (value) => console.log(value),
//   (error) => console.log("We've received an error")
// );
// // myPromise2.catch((error) => console.log("We've received an error"));
// console.log("first");

//calling second promise once first promise gets executed and
//calling third promise after second executed
let waada1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Mera Pehla Wada");
  }, 2000);
  resolve(1111111);
});

let waada2 = waada1.then(function () {
  let myWaada2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Mera Dusra wada");
    }, 5000);
    resolve(111111);
  });
  return myWaada2;
});

waada2.then((value) => console.log(value));
//here, the value is which we get from waada2

//Async Function
async function abcd() {
  return 7;
}
console.log(abcd());

//Async and Await
async function utility() {
  let maharashtraWeather = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Normal Weather in MH"), 2000);
  });

  let RajastanWeather = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Rainy weather in RJ"), 5000);
  });

  let mW = await maharashtraWeather;
  let rW = await RajastanWeather;

  return [mW, rW];
}

//Fetch API
//The output of fetch api is promise
async function getAPI() {
  let content = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let output = await content.json();
  console.log(output);
}
//getAPI();

//Send API
async function helper() {
  let options = {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  let sendAPI = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );
  let response = sendAPI.json();
  return response;
}

async function myUtility() {
  let ans = helper();
  console.log(ans);
}
myUtility();

//closures
function init() {
  let name = "Mozilla";
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  return displayName;
}
let a = init();
a();
