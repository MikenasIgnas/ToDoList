const person = {
  cars: [
    {
      name: "bmw",
      model: "X1",
      params: ["navigation", "cd player"],
    },
  ],
};

const myCar = {
  car: [
    {
      doors: 4,
      color: "red",
      brand: "volvo",
    },
  ],
};
console.log(myCar);
console.log(myCar.car[0]);
console.log(myCar.car[0].doors);
console.log(myCar.car[0].color);
console.log(myCar.car[0].brand);

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const myName = document.getElementById("input1").value;
  const mySurname = document.getElementById("input2").value;
  const myAge = document.getElementById("input3").value;
  const isLegalAge = myAge >= 18;
  document.querySelector("h1").textContent =
    myName + " " + mySurname + " " + myAge;

  const person = {
    name: document.getElementById("input1").value,
    surname: document.getElementById("input2").value,
    age: document.getElementById("input3").value,
    lega: isLegalAge,
  };
  console.log(person);
});

const header = document.createElement("h2");
header.textContent = "bye";
document.querySelector(".container").prepend(header);

const box = document.createElement("div");
box.classList.add("wraper");
document.querySelector(".boxBox").prepend(box);

const textContainer = document.createElement("div");
textContainer.classList.add("text");
document.querySelector(".wraper").prepend(textContainer);
const textStyle = document.querySelector(".text");

const image = document.createElement("div");
image.classList.add("img");
document.querySelector(".boxBox").prepend(image);
const imageStyle = document.querySelector(".img");

const wraperText = document.createElement("h2");
const ocupationText = document.createElement("p");
const locationText = document.createElement("p");

const locations = document.querySelector(".text").prepend(locationText);
const ocupation = document.querySelector(".text").prepend(ocupationText);
const userName = document.querySelector(".text").prepend(wraperText);

imageStyle.style.width = "100px";
imageStyle.style.height = "100px";
imageStyle.style.background =
  "url(https://imgs.search.brave.com/H0M3UqVT4StcAhtWY-DpPqezOmWweDITkyOYFPOsLXo/rs:fit:640:640:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC81Zi80MC82YS81/ZjQwNmFiMjVlODk0/MmNiZTBkYTY0ODVh/ZmQyNmI3MS5qcGc)";
imageStyle.style.backgroundSize = "cover";

imageStyle.style.borderRadius = "50px";
imageStyle.style.margin = "auto";

textStyle.style.margin = "auto";
textStyle.style.width = "60%";
textStyle.style.height = "200px";
textStyle.style.backgroundColor = "white";
textStyle.style.display = "flex";
textStyle.style.flexDirection = "column";
textStyle.style.borderRadius = "10px";
textStyle.style.justifyContent = "center";
textStyle.style.alignItems = "center";

box.style.textAlign = "center";
wraperText.style.margin = "0px";
wraperText.textContent = "Trent Walton";

ocupationText.textContent = "Founder @paravelinc";
ocupationText.style.margin = "0px";

locationText.textContent = "Austin, TX";
locationText.style.margin = "0px";

const movies = [
  "movie1",
  "movie2",
  "movie3",
  "movie4",
  "movie5",
  "movie6",
  "movie7",
  "movie8",
];
const years = ["1990", "1991", "1992", "1993", "1994", "1995", "1997", "1998"];
function litMovies(movies) {
  let movieElement = document.querySelector("ul");
  movies.map((movie, index) => {
    movieElement.innerHTML += `<li>${index + 1}${movie}</li>`;
  });
}

// function movieMap(movieName, movieYear) {
//   console.log(movies);
//   console.log(years);
//   if (movies.length === years.length) {
//     let moviesListElement = document.querySelector("ul");
//     movies.map((names, i) => {
//       let movieYear = years[i];
//       console.log(movieYear);
//       console.log(names);
//       moviesListElement.innerHTML += `<li>${
//         i + 1
//       }. ${names} (${movieYear})</li>`;
//     });
//   } else {
//     console.eror("Nera");
//   }
// }
// movieMap(movies, years);

const movieNameYears = [
  ["filmas1", 1990],
  ["filmas1", 1990],
  ["filmas1", 1990],
  ["filmas1", 1990],
  ["filmas1", 1990],
  ["filmas1", 1990],
];

function listMapNameYear(movies) {
  console.log(movies);
  movies.map((movie) => {
    console.log(movie);
    let name = movie[0];
    let year = movie[1];
    console.log(name, year);
  });
}
listMapNameYear(movieNameYears);

let numbers = [
  4, 65, -8, 8, -91, 1, 3, 8498, 188, -6165, 2, 516, 7, 5151, 651, 11, 78, -787,
  -20, 35,
];
let badNumbers = [
  4,
  true,
  -8,
  8,
  -91,
  1,
  false,
  8498,
  188,
  -6165,
  2,
  516,
  7,
  5151,
  651,
  11,
  78,
  -787,
  -20,
  35,
];
let renderText = (arr, text, num, selector) => {
  let answer = `Skaičių: (${arr.join(", ")}  ${text} yra ${num}.)`;
  document.querySelector(selector).innerHTML = answer;
};

//////////////////////////////////////AVERAGE
numbers.sort((a, b) => a - b);
let task2 = (nums) => {
  console.log(nums);
  let sum = nums.reduce((numberSum, currentNum) => numberSum + currentNum);
  console.log(sum);
  let length = nums.length;
  let average = sum / length;

  console.log(average);
  // let answer = `Skaičių: ${nums.join(", ")} vidurkis yra: ${average}.`;
  // document.querySelector("#task2").textContent = answer;
  renderText(nums, "vidurkis", average, "#task2");
};

////////////////////////////////////////MEDIAN
let task3 = (nums) => {
  let length = nums.length;
  let middleIndex;
  let median;

  if (length % 2 === 1) {
    middleIndex = Math.floor(length / 2);
    let median = nums[middleIndex];
  } else {
    let num1 = length / 2;
    let num2 = num1 - 1;
    median = (nums[num1] + nums[num2]) / 2;
  }
  console.log(median);
  // let answer = `Skaičių: (${nums.join(", ")} mediana yra: ${median}.)`;
  // document.querySelector("#task3").innerHTML = answer;
  renderText(nums, "mediana", median, "#task3");
};
///////////////////////////////////BIGEST NUMBER
let task4 = (nums) => {
  console.log(nums.slice(-1)[0]);
  console.log(nums.length - 1);
  console.log(Math.max(...nums));

  let maxNumber = Math.max(...nums);
  // let answer = `Skaičių: (${nums.join(
  //   ", "
  // )} didžiausias skaičius yra: ${maxNumber}.)`;
  // document.querySelector("#task4").innerHTML = answer;
  renderText(nums, "didžiausias skaičius", maxNumber, "#task4");
};

////////////////////////////////////MINIMUM NUMBER
let task5 = (nums) => {
  console.log(nums.slice(0)[0]);
  console.log(Math.min(...nums));

  let minNumber = Math.min(...nums);
  // let answer = `Skaičių: (${nums.join(
  //   ", "
  // )} mažiausias skaičius yra: ${minNumber}.)`;
  // document.querySelector("#task5").innerHTML = answer;
  renderText(nums, "mažiausias skaičius", minNumber, " #task5");
};
//////////////////////////////////////NTH NUMBER

let task6 = (nums, nth) => {
  console.log(nums);
  console.log(nth);
  let nthNumber = nums[nth - 1];
  if (nth > 0 && nums.length >= nth) {
    // let answer = `Skaičių: (${nums.join(
    //   ", "
    // )}  ${nth}-asis skaičius yra: ${nthNumber}.)`;
    // document.querySelector("#task6").innerHTML = answer;
    let text = ` ${nth}-asis skaičius`;
    renderText(nums, text, nthNumber, "#task6");
  } else {
    console.log("neveikia");
  }
  console.log(nthNumber);
};
task2(numbers);
task3(numbers);
task4(numbers);
task5(numbers);
task6(numbers, 5);

task2(badNumbers);
task3(badNumbers);
task4(badNumbers);
task5(badNumbers);
task6(badNumbers, 5);

let filter = badNumbers.filter((word) => {
  return isNaN(word);
});
console.log(filter);
