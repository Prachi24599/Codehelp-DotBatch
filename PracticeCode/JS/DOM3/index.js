//Creating 100 Para

const t1 = performance.now();
for (let i = 0; i < 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is Para " + i;
  document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("This took " + (t2 - t1) + " ms");

//Optimizing a bit
const t3 = performance.now();
let myDiv = document.createElement("div");
for (let i = 0; i < 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para " + i;
  myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("This took " + (t4 - t3) + " ms");
