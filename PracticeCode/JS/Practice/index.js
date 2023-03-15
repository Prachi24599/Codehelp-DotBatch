let para = document.getElementsByClassName("mypara");
for (let p of para) {
  p.addEventListener("click", () => {
    let name = prompt("Enter a New Name :");
    p.textContent = "Player 1 :" + name;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  function createParagraph() {
    let randomPara = document.createElement("p");
    randomPara.textContent = "You have clicked on button!";
    document.body.appendChild(randomPara);
  }

  const buttons = document.querySelectorAll("button");

  for (const btn of buttons) {
    btn.addEventListener("click", createParagraph);
  }
});
