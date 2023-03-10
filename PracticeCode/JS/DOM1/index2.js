let myElement = document.querySelector("#wrapper");
myElement.addEventListener("click", function (event) {
  if (event.target.nodeName === "SPAN")
    console.log("Element Clicked is" + event.target.textContent);
});
