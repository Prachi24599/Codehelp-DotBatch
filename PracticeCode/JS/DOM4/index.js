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
  resolve(2000);
});

let waada2 = waada1.then(function () {
  let myWaada2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Mera Dusra wada");
    }, 5000);
    resolve("Dusra wada resolved...");
  });
  return myWaada2;
});

waada2.then((value) => console.log(value));
