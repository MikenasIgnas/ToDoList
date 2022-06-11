const first = 5;
const second = 5;
console.log(first + second);

if (first < second) {
  console.log("mažiau");
} else if (first === second) {
  console.log("lygu");
} else {
  console.log("daugiau");
}

const userAge = 18;
const drivingAge = 18;

if (userAge >= drivingAge) {
  console.log("vairuoti galima");
} else if (userAge < drivingAge) {
  console.log("vaituoti negalima");
}

const cityName = prompt("What city are you from?");
if (cityName == "Kaunas") {
  alert("Kaunas is a realy nice city!");
}

const personalInfo = {
  name: "Ignas",
  age: 24,
  location: "Vilnius",
  gender: "Male",
};

if (personalInfo.name === "Ignas") {
  alert(personalInfo.gender);
}
