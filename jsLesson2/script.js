const ignas = {
  birthDay: "1997-08-21",
};

const day = function () {
  const hours = new Date().getHours();
  console.log(hours);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const today = month + "/" + day + "/" + "/" + year;
  console.log(today);
  const userName = prompt(`Enter your name:`);
  const dayTimes = ["Good Morning", "Good Afternoon", "Good Evening"];

  const morning = `${dayTimes[0]} ${userName}`;
  const afternon = `${dayTimes[1]} ${userName}`;
  const evening = `${dayTimes[2]} ${userName}`;
  if (hours >= 5 && hours <= 12) {
    alert(morning);
  } else if (hours > 12 && hours <= 18) {
    alert(afternon);
  } else if (hours > 18 || hours < 5) {
    alert(evening);
  }
};
day();
const date = new Date();
const day1 = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const today = month + "/" + day1 + "/" + year;
const birthDay = prompt("Enter your birthday");

if (birthDay === today) {
  alert("happy birthday");
}

const myName = function (name) {
  alert(name);
};
myName("Ignas");

const randomNumber = function () {
  const random = Math.floor(Math.random() * 5) + 1;
  return random;
};
console.log(randomNumber());

const fullName = function (name, lastName) {
  return name.length + lastName.length;
};
console.log(fullName("Ignas", "Mikėnas"));

const letter = function (number) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return alphabet.indexOf(number);
};

console.log(letter("z"));

function math(n1, n2, operator) {
  switch (operator) {
    case "sum":
      return n1 + n2;
    case "sub":
      return n1 - n2;
    case "div":
      return n1 / n2;
    case "multi":
      return n1 / n2;
  }
}
console.log(math(1, 5, "sum"));

function randomNumber2() {
  return Math.floor(Math.random() * 10 + 1);
}
console.log(randomNumber2());

function squaredNumber(number) {
  return Math.pow(number, 2);
}
console.log(squaredNumber(randomNumber2()));

//1. ALERT NAME
document
  .querySelector("button")
  .addEventListener("click", () => alert("Ignas"));

//3. ADD TEXT ABOUT ME
document.querySelector("button").addEventListener("click", () => {
  document.querySelector("p").innerText = "text text text text text";
});

//4. ADD +1
let counter = 0;
document.getElementById("addButton").addEventListener("click", () => {
  counter++;
  document.querySelector("h6").innerText = counter;
});

//5. NO COPY
document.querySelector("p").addEventListener("copy", () => {
  alert("CANT COPY");
});
//6. RANDOM NUBER GENERATOR
document.getElementById("rng").addEventListener("click", () => {
  let randomNr = Math.floor(Math.random() * 100 + 1);
  document.querySelector("h1").innerText = randomNr;
});

//7.  18 OR NOT

const legal = document.getElementById("legal");
const notLegal = document.getElementById("notLegal");

const islegal = legal.addEventListener("click", () => {
  document.querySelector("h5").innerText = "Alus";
});
const isNotLegal = notLegal.addEventListener("click", () => {
  alert("Nepilnametis");
});

//8. THREE RANDOM BUTTONS
const random3 = Math.floor(Math.random() * 3 + 1);
console.log(random3);

const buttonGguess1 = document.getElementById("one");
const buttonGguess2 = document.getElementById("two");
const buttonGguess3 = document.getElementById("three");

buttonGguess1.addEventListener("click", () => {
  if (random3 == buttonGguess1.innerText) {
    alert("yay");
  } else {
    alert("Try again");
  }
});
buttonGguess2.addEventListener("click", () => {
  if (random3 == buttonGguess2.innerText) {
    alert("yay");
  } else {
    alert("Try again");
  }
});
buttonGguess3.addEventListener("click", () => {
  if (random3 == buttonGguess3.innerText) {
    alert("yay");
  } else {
    alert("Try again");
  }
});

//9. TEXT CHANGE WITH BUTTON
document.querySelector("body").addEventListener("keydown", () => {
  document.querySelector("h3").innerText = "YOU DO NOT LISTEN";
});

//10. TEXT CHANGE WITH MOUSE
const header = document.getElementById("h1Style");
header.classList.add("h1Style");
header.addEventListener("mousemove", () => {
  header.innerText = "STOOOOP";
});
