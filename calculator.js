const screen = document.getElementById("screen");

const buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", click);
}

function click() {
  const screen = document.getElementById("screen");
  const buttonclicked = document.getElementById(this.id).value;

  screen.innerHTML = buttonclicked;
}
