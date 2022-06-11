// Masyvas / array
let plants = [
  "tomato",
  "apple",
  "banana",
  "orange",
  "pineapple",
  true,
  456,
  ["Vienas", "Du", "Trys"],
];
//  Indeksas     0         1         2         3          4
console.log(plants);
// Masyve esančių duomenų pasiekimas
console.log(plants[0]);
console.log(plants[1]);
console.log(plants[2]);
console.log(plants[3]);
console.log(plants[4]);
console.log(plants[5]);
console.log(plants[6]);
console.log(plants[7]);
console.log(plants[7][0]);
console.log(plants[7][1]);
console.log(plants[7][2]);
console.log(plants.length);
console.log(plants[7].length);
let array = [1, 2, 3, 5, 6];
console.log(array);
array[1] = "Du";
console.log(array);
// array[6] = 7;
array[array.length] = 7;
console.log(array);
let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys"];
console.log(cities);
// pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą
// Pašalinas paskutinis masyvo elementąs - pop() metodas
let removedCities = cities.pop();
console.log("Originalus masyvas: ", cities);
console.log("Pašalintas miestas: ", removedCities);
// Pašalinama pirmasis masyvo elementas - shift() metodas
let removedCityWithShift = cities.shift();
console.log("Originalus masyvas: ", cities);
console.log("Pašalintas miestas: ", removedCityWithShift);
// Pridedamas naujas masyvo narys į masyvo pabaigą - push() metodas
// cities.push('Jonava');
// cities.push('Jurbarkas');
cities.push("Jonava", "Jurbarkas");
console.log(cities);
// Pridedamas naujas masyvo narys į masyvo pradžią - unshift() metodas
cities.unshift("Taurage");
console.log(cities);
let countries = ["Lithuania", "Latvia", "Poland", "France", "Germany", "Italy"];
// Indeksas          0            1         2         3         4
// Slice (+)    0           1         2         3         4          5
// Slice (-)   -6          -5        -4        -3        -2         -1
// SLICE - nemutuoja originalaus masyvo (nekeičia originalaus masyvo reikšmės)
console.log("-----------SLICE------------");
console.log(countries);
let slicedCountries1 = countries.slice(2);
console.log(slicedCountries1);
let slicedCountries2 = countries.slice(2, 4);
console.log(slicedCountries2);
let slicedCountries3 = countries.slice(0, 3);
console.log(slicedCountries3);
let slicedCountries4 = countries.slice(-4);
console.log(slicedCountries4);
let slicedCountries5 = countries.slice(-4, -2);
console.log(slicedCountries5);
let slicedCountries6 = countries.slice(2, -2);
console.log(slicedCountries6);
let slicedCountries7 = countries.slice(0, 1);
console.log(slicedCountries7);
console.log(countries);
// SPLICE - modifikuoja originalų masyvą (keičia originalaus masyvo reikšmę)
let nums = [1, 2, 3, 4, 5, 6, 7];
console.log("-------------SPLICE--------------");
console.log(nums);
// let splicedNums = nums.splice(3);
// let splicedNums = nums.splice(2, 1);
// let splicedNums = nums.splice(-1);
// let splicedNums = nums.splice(-3, 2);
// let splicedNums = nums.splice(2, 2, 10);
// let splicedNums = nums.splice(2, 2, 10, 15, 20);
let splicedNums = nums.splice(3, 0, 3.5);
console.log(splicedNums);
console.log(nums);
// UZDUOTIS dirbant su pirkinių sąrašu (bent 7 pirkiniai):
// Kiekvienam iš punktų sukurti po atskirą kintamąjį ir jame išsaugoti reikšmę. Šią reikšmę atvaizduoti konsolėje.
// 1. Išimti pirmus du pirkinius.
// 2. Išimti tris paskutinius pirkinius.
// 3. Išimti ketvirtą ir penktą pirkinį.
// 4. Išimti antrą ir trečią pirkinį.
// 5. Išimti visus, išskyrus pirmą pirkinį.
// Sukurti 10-ties filmų masyvą ir iš jo:
// 1. Išimti pirmus 5 filmus.
// 2. Išimti 4 paskutinius filmus.
// 3. Išimti nuo trečio iki septinto filmo.
// 4. Išimti antrą ir trečią filmą.
// 5. Išimti visus, išskyrus pirmą filmą.
// 6. Išimti 5 filmus skaičiuojant nuo trečio.
// 7. Išimti tris filmus nuo galo, tačiau palikti paskutinį.
// 8. Vietoje penkto filmo įrašyti du naujus filmus.
// 9. Pašalinti pirmą filmą.
// 10. Įrašyti naują filmą į masyvo pradžią.
// 11.1. Išimti pirmus tris filmus, skaičiuojant nuo antro filmo.
// 11.2. Išimti paskutinius tris filmus, skaičiuojant nuo priešpaskutinio filmo.
// 11.3. Šiuos išimtus filmus išsaugoti naujame masyve ir padaryti, jog jo nariai būtų apsukti.
// 12. Filmų sąrašą išvesti į ekraną (ul - li elementuose). Prie filmo pavadinimo pridėti filmo eilės numerį.
// 13. Modifikuoti duomenis taip kad filmai turėtų ne tik pavadinimus, tačiau ir išleidimo datą.
// 13.1. Prie filmų sąrašo (ul - li elementuose) pridėti išleidimo datą.
// 14. Sukurti dar 2 naujus masyvus, kuriuose būtų po keletą filmų ir:
// 14.1. Išvesti visuose 3 masyvuose esančius filmus į ekraną kaip vieną sąrašą.

const groceries = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
];
console.log(groceries);

groceries[0] = "first";
groceries[1] = "second";
groceries[2] = "third";
groceries[3] = "fourth";
groceries[4] = "fifth";
groceries[5] = "sixth";
groceries[6] = "seventh";
console.log(groceries);

const groceries1 = groceries[0];
const groceries2 = groceries[1];
const groceries3 = groceries[2];
const groceries4 = groceries[3];
const groceries5 = groceries[4];
const groceries6 = groceries[5];
const groceries7 = groceries[6];
console.log(
  groceries1,
  groceries2,
  groceries3,
  groceries4,
  groceries5,
  groceries6,
  groceries7
);

groceries.splice(0, 2);
console.log(groceries);

groceries.splice(2);
console.log(groceries);

const string = "Hello";
const number = 10;
const stringArray = ["one", "two", "three", "four", "five", "888888888"];
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numberStringArray = [
  "one",
  1,
  "two",
  2,
  "three",
  3,
  "four",
  4,
  "five",
  5,
];

console.log(string[0]);
console.log(string[4]);
console.log(string[2]);

const letter = (number) => {
  return string[number];
};
console.log(letter(1));

const evenNumber = (number) => {
  if (number % 2 == 0) {
    return "Lyginis";
  } else {
    return "Nelyginis";
  }
};
console.log(evenNumber(number));
const oddNumber = (number) => {
  if (number % 2 !== 0) {
    return "NeLyginis";
  } else {
    return "Lyginis";
  }
};
console.log(oddNumber(11));

const stringElementLength = (item) => {
  if (item.length >= 5) {
    return stringArray;
  }
};
console.log(stringElementLength(stringArray));

//Characters that are 5 or longer
function getAllLongTextItems() {
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length >= 5) {
      console.log(stringArray[i]);
    }
  }
}
getAllLongTextItems();

//Items that are longer than eight characters
function getEightLetterWords() {
  for (i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length < 8) {
      console.log(stringArray[i]);
    }
  }
}
getEightLetterWords();

//First letter of a word in array
const myFunc = function (letter) {
  for (i = 0; i < letter.length; i += 1) {
    // Use the index i here
    console.log(letter[i].charAt(0));
  }
};
myFunc(stringArray);

//Las letter of a word in array
const myFunc2 = function (letter) {
  for (i = 0; i < letter.length; i += 1) {
    // Use the index i here
    console.log(letter[i].slice(-1));
  }
};
myFunc2(stringArray);

//Add all values in array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(arr) {
  let sum = 0; // initialize sum

  // Iterate through all elements
  // and add them to sum
  for (let i = 0; i < arr.length; i++) sum += arr[i];

  return sum;
}
console.log(sum(arr));

const movieNameAndYears = [
  ["film1", 1990],
  ["film2", 1991],
  ["film3", 1992],
  ["film4", 1993],
  ["film5", 1994],
  ["film6", 1995],
  ["film7", 1996],
  ["film8", 1997],
  ["film9", 1998],
  ["film10", 1999],
];
const list = document.querySelector("ul");

function listMoviesWithYears(movieYearsArr) {
  const list = document.querySelector("ul");

  for (let i = 0; i < movieYearsArr.length; i++) {
    let movieName = movieYearsArr[i][0];
    let movieYear = movieYearsArr[i][1] ? `(${movieYearsArr[i][1]})` : "";
    list.innerHTML += `<li>${i + 1}.${movieName}${movieYear}</li>`;
  }
}
listMoviesWithYears(movieNameAndYears);

let movies1 = [
  "movie1",
  "movie2",
  "movie3",
  "movie4",
  "movie5",
  "movie6",
  "movie7",
  "movie8",
  "movie9",
  "movie10",
];
let movies2 = ["movie11", "movie12", "movie13"];

let allMovies = [movies1, movies2];

function allMovieNames(moviesArr) {
  const list = document.querySelector("ul");
  let moviesNumber = 1;
  for (i = 0; i < moviesArr.length; i++) {
    let innerMovies = moviesArr[i];
    for (j = 0; j < innerMovies.length; j++) {
      let movieName = innerMovies[j];
      list.innerHTML += `<li>${moviesNumber}.${movieName}</li>`;
      moviesNumber++;
    }
  }
}

console.log("-------------MAP--------------");

const citiesArr = ["Kaunas", "Vilnius", "Ukmergė", "Klaipėda", "Šiauliai"];

for (let i = 0; i < citiesArr.length; i++) {
  console.log("For Ciklas:", citiesArr[i]);
}

citiesArr.map(function (str) {
  console.log("Map Method:" + " " + str);
});
citiesArr.map(function (str, index) {
  console.log("Map Method:" + " " + str);
  console.log(index);
});
citiesArr.map(function (str, index, array) {
  console.log("Map Method:" + " " + array);
});

const averageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function average(arr) {
  let sum = 0; // initialize sum

  // Iterate through all elements
  // and add them to sum
  for (let i = 0; i < arr.length; i++) sum += arr[i];

  return sum / arr.length;
}
console.log(average(averageArray));

const averageList = document.querySelector("ul");

function listArray() {
  const averageList = document.querySelector("ul");
  let number = 1;
  for (let i = 0; i < arr.length; i++) {
    averageList.innerHTML += `${i + 1}, `;
  }
  averageList.innerHTML += `Vidurkis yra:  ${average(averageArray)}`;
}
listArray(averageList);

//finnd median

function median(arr) {
  for (let i = 0; i < 1; i++) {
    if (arr.length % 2 !== 0) {
      console.log(Math.round(arr.length / 2));
    } else if (arr.length % 2 === 0) {
      console.log(arr.length / 2 + 1 / 2);
    }
  }
}

median(averageArray);

//ARROW FUNCTION

let arrowFunc = () => {
  return 3 + 3;
};
console.log(arrowFunc());
let arrowFunc2 = (num1, num2) => {
  return num1 + num2;
};
console.log(arrowFunc2(5, 5));

let arrowFunc3 = (num) => {
  return num * num;
};
console.log(arrowFunc3(5));

let arrowFunc4 = (num1, num2) => num1 * num2;

console.log(arrowFunc4(4, 5));

citiesArr.map((city, index) => {
  console.log("Map ciklas + arrow funtion", city);
});
citiesArr.forEach((city) => {
  console.log("ForEach + arrow funtion", city);
});

let numArr = [1, 2, 3, 4, 5, 6, 7];
console.log(numArr);

let mapArr = numArr.map((number) => {
  return number * number;
});
console.log("Original arr", numArr);
console.log("Map Arr", mapArr);

let forEachArr = numArr.forEach((number) => {
  return number * 2;
});
console.log("original arr", numArr);
console.log("foreachArr", forEachArr);

let filteredArr = numArr.filter((number) => {
  return number >= 5;
});
console.log("original arr", numArr);
console.log("Filtered", filteredArr);

let newArray = [-1, 5, 2, 6, -7, 10, 11, 3, 8, -4, 17, 16, 9, 20];

let filteredArray = newArray.filter((num) => num > 10);
console.log(filteredArray);
let filteredArray2 = newArray.filter((num) => num < 0);
console.log(filteredArray2);
let filteredArray3 = newArray.filter((number) => {
  return number % 3 === 0 || number % 5 === 0;
});
console.log(filteredArray3);
let filteredArray4 = newArray.filter((number) => {
  return number % 4 === 0 && number > 13;
});
console.log(filteredArray4);

//REDUCE
let numberArr = [1, 2, 3, 4];
let arraySum = numberArr.reduce((sum, current, index) => {
  console.log(`----------`);

  console.log("index:", index);
  console.log("suma:", sum);
  console.log("current:", current);
  return sum + current;
});
console.log(arraySum);
let letterArr = [
  "egle",
  "dviratis",
  "saule",
  "namas",
  "butas",
  "kede",
  "stalas",
  "obuolys",
  "gatve",
];

const func1 = letterArr.filter((letter) => {
  return letter.trimEnd().slice(-1) === "e";
});
console.log(func1);
const func2 = letterArr.filter((letter) => letter.length >= 8);
console.log(func2);
const func3 = letterArr.filter((letter) => letter.length % 2 !== 0);
console.log(func3);
const func4 = letterArr.filter((letter) => letter.includes("as"));
console.log(func4);

let countryArr = [
  "Lithuania",
  "USA",
  "GB",
  "Latvia",
  "Poland",
  "Germany",
  "Netherlands",
];

let newCountryArr = countryArr.reduce(
  (allCounntries, current, currentIndex) => {
    let lastIndex = countryArr.length - 1;

    if (currentIndex === 0) {
      return allCounntries + current;
    } else if (currentIndex === lastIndex) {
      return allCounntries + ", " + current + ".";
    } else {
      return allCounntries + ", " + current;
    }
  },
  "Countries: "
);
console.log(newCountryArr);

let joinedCountries = "Countries: " + countryArr.join(", ") + ".";
console.log(joinedCountries);
