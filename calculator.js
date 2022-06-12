const screen = document.getElementById("screen");
const buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons);

buttons.map((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.innerText === "C") {
      return (screen.innerText = " ");
    }

    if (event.target.innerText === "<-") {
      return (screen.innerText = screen.innerText.slice(0, -1));
    }

    if (event.target.innerText === "=")
      return (screen.innerText = eval(screen.innerText));

    console.log(typeof screen.innerText);
    screen.innerText += event.target.innerText;
  });
});
//add ERROR if calcultion is invalid
//add keyboard input
//css border needs fixint + more style
//when = is pressed and new number is typed clear screen
//Math signs that are not on keybord doesnt work with eval(screen.innerText)
