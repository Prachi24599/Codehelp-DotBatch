// let container = document.getElementById("container");
// console.log(container);
// let child = document.getElementById("d");
// console.log(child);

// let name1 = container.firstElementChild.nodeName;
// console.log(name1);

// let header = document.getElementsByClassName("heading")[0];
// console.log(header);

// let section = document.querySelector(".section");
// console.log(section);

function myFun() {
  console.log("Event Listerner Testing");
}
document.addEventListener("click", myFun);
//We need to use same function in removeEventListener which we have used in addEventListener
document.removeEventListener("click", myFun);

document.addEventListener("click", function () {
  console.log("This is diff funcion");
});
//these 2 listener function are different because fun are objects in js and they are created on diff memory location
document.removeEventListener("click", function () {
  console.log("This is diff funcion");
});

//Event Object
const content = document.addEventListener("click", function (event) {
  console.log(event);
});

//Preventing default action
let links = document.querySelectorAll("a");
let thirdLink = links[2];

thirdLink.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Abhi maza aayega na bhidu");
});

let myDiv = document.createElement("div");

function myFunction(event) {
  // console.log(`Paragraph ${i} Clicked..`);
  // console.log("Paragraph Clicked..");
  console.log("TextContent Printing - " + event.target.textContent);
}

//adding listener directly on div
myDiv.addEventListener("click", myFunction);

for (let i = 1; i <= 10; i++) {
  let newElement = document.createElement("p");

  newElement.textContent = "This is para " + i;

  // newElement.addEventListener("click", myFunction);
  //adding all paragraphs in div
  myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);
