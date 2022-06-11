const legalAge = 20;
const clientAge = 25;
if (clientAge >= legalAge) {
  console.log("legal age reached");
} else if (clientAge < legalAge) {
  console.log("legal not age reached");
}

const myName = "Ignas";
if (myName.length > 6) {
  console.log("Ilgas Vardas");
} else if (myName.length < 6) {
  console.log("Trumpas vardas");
}

const myAge = 24;
if (myAge > 100 || myAge <= 0) {
  console.log("invalid age");
} else if (myAge > 0 && myAge <= 18) {
  console.log("Child");
} else if (myAge >= 19 && myAge <= 99) {
  console.log("Adult");
}
const car = "VW";
const vwGroup = ["VW", "Audi", "Bentley", "Bughatti", "Lamborghini", "Porche"];
const bmwGroup = ["BMW", "Mini", "Rolls-Royce"];

if (vwGroup.indexOf(car) !== -1) {
  console.log("VW Group");
} else if (bmwGroup.indexOf(car) !== -1) {
  console.log("BMW Group");
} else {
  console.log("Doesnt belong VW or BMW group");
}

const myCar = "VW";
switch (myCar) {
  case "VW":
  case "Audi":
  case "Bentley":
  case "Bughatti":
  case "Lamborghini":
  case "Porche":
    console.log("Priklauso VW Group");
    break;
  case "BMW":
  case "Mini":
  case "Rolls-Royce":
    console.log("Priklauso BMW Group ");
    break;
  default:
    console.log("nepriklauso niekam");
}

const userInput = "Obuolys";
switch (userInput) {
  case "Apelsinas":
  case "Arbūzas":
  case "Obuolys":
  case "Braškė":
  case "Ananasas":
    console.log("Vaisius");
    break;
  case "Bulvė":
  case "Žirnis":
  case "Pomidoras":
  case "Kopūstas":
  case "Morka":
    console.log("Daržovė");
}

const weekDay = 6;
switch (weekDay) {
  case 0:
    console.log("0", "Pirmadienis");

    break;
  case 1:
    console.log("1", "Antradienis");
    break;
  case 2:
    console.log("2", "Trečiadienis");
    break;
  case 3:
    console.log("3", "Ketvirtadienis");
    break;
  case 4:
    console.log("4", "Penktadienis");
    break;
  case 5:
    console.log("5", "Šeštadienis");
    break;
  case 6:
    console.log("6", "Sekmadienis");
    break;
}

const myName2 = "Ignas";

const myNameLength = myName2.length <= 5 ? "Short name" : "Long name";
console.log(myNameLength);

const legalAge2 = 18;
const clientAge2 = 19;

const canDrive = clientAge2 >= legalAge2 ? "Can Drive" : "Can't Drive";
console.log(canDrive);

const canDrive2 =
  clientAge2 <= 0 || clientAge2 >= 120
    ? "Invalid Age"
    : clientAge2 >= legalAge2
    ? "Can Drive"
    : "Can't Drive";
console.log(canDrive2);

const phone = "iPhone";
const isPhoneUser = phone === "iPhone";
console.log(isPhoneUser);

const name3 = "Ignas";

for (let i = 0; i < 10; i++) {
  console.log(i, name3);
}
for (let i = 10; i > 0; i--) {
  console.log(i);
}

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
} while (i < 5);

let combo = "";
const name1 = "John";
let times = 3;
do {
  combo += name1;
  times--;
} while (times > 0);
console.log(combo);

const random1 = Math.floor(Math.random() * 10) + 1;
console.log(random1);

const cosinus = Math.cos(0);
console.log(cosinus);

const random2 = Math.floor(Math.random() * 5) + 1;
console.log(random2);
const random3 = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
console.log(random3);

const random4 = Math.floor(Math.random() * 5) + 1;

if (random4 === 4) {
  alert("Laimejot");
} else {
  alert("Pralaimejot");
}
