//question 1 answer
const correctAnswer = 500;
//question 2 answer
const correctAnswer2 = "hi";
//question 3 answer
const correctAnswer3 = 10;

const player1Answer1 = 500;
const player1Answer2 = "hi";
const player1Answer3 = 10;

if (player1Answer1 === correctAnswer && player1Answer2 === correctAnswer2) {
  console.log("patekai (abu teisingi)");
} else if (player1Answer1 === correctAnswer) {
  console.log("ne patekai i kita etapa (tik pirmas teisingas)");
} else if (player1Answer2 === correctAnswer2) {
  console.log("ne patekai i kita etapa (tik antras teisingas)");
} else {
  console.log("nepatekai");
}

if (
  player1Answer1 === correctAnswer &&
  player1Answer2 === correctAnswer2 &&
  player1Answer3 === correctAnswer3
) {
  console.log("patekai (visi teisingi)");
} else if (
  player1Answer1 === correctAnswer &&
  player1Answer2 === correctAnswer2 &&
  player1Answer3 !== correctAnswer3
) {
  console.log("patekai i kita etapa (pirmas ir antras teisingi)");
} else if (
  player1Answer1 === correctAnswer &&
  player1Answer3 === correctAnswer3 &&
  player1Answer2 !== correctAnswer2
) {
  console.log("patekai i kita etapa (pirmas ir trecias teisingi)");
} else if (
  player1Answer1 !== correctAnswer &&
  player1Answer2 === correctAnswer2 &&
  player1Answer3 === correctAnswer3
) {
  console.log("patekai i kita etapa (antras ir trecias teisingi)");
} else if (
  player1Answer1 !== correctAnswer &&
  player1Answer2 !== correctAnswer2 &&
  player1Answer3 !== correctAnswer3
) {
  console.log("visi neteisingi");
} else {
  console.log("Nepatekai. Tik vienas teisingas");
}

const perimeter = function (a, b) {
  return (a + b) * 2;
};
console.log(perimeter(5, 5));

document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(event) {
  event.preventDefault();
  console.log(event);
  const result = document.querySelector("input[name = abc]").value;
  document.querySelector("h1").textContent = result;
}

// ALERT NAME
document.querySelector("form").addEventListener("submit", myNewFunction);

function myNewFunction(e) {
  e.preventDefault();
  const myName = document.querySelector("input[name=myName]").value;
  alert(myName);
}

// H1 MY AGE
document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(event) {
  event.preventDefault();
  const result = document.querySelector("input[name=myAge]").value;
  document.querySelector("h1").textContent = "Tavo amžius:" + " " + result;
}

document.querySelector("form").addEventListener("submit", canDrive);
function canDrive(event) {
  event.preventDefault();
  const myName = document.querySelector("input[name=Name]").value;
  const myAge = document.querySelector("input[name=Age]").value;
  if (myAge >= 18) {
    return (document.querySelector("h1").textContent =
      myName + " " + "Vairuoti gali");
  } else {
    return (document.querySelector("h1").textContent =
      myName + " " + "Vairuoti negali");
  }
}

document.querySelector("form").addEventListener("submit", checkAge);

function checkAge(event) {
  const fullPrice = 6;
  const halfPrice = 3;
  const seniorPrice = 2;
  event.preventDefault();
  const age = document.querySelector("input[name=checkAge]").value;
  if (age <= 16) {
    document.querySelector("h1").textContent =
      "Jums:" + " " + age + ". " + "Bilietas kainuos:" + " " + halfPrice + "e";
  } else if (age > 60) {
    document.querySelector("h1").textContent =
      "Jums:" +
      " " +
      age +
      ". " +
      "Bilietas kainuos:" +
      " " +
      seniorPrice +
      "e";
  } else {
    document.querySelector("h1").textContent =
      "Jums:" + " " + age + ". " + "Bilietas kainuos:" + " " + fullPrice + "e";
  }
}
const age = document.getElementById("age");
const conviction = document.querySelector("input[type=checkbox]");
document.querySelector("form").addEventListener("submit", armyAge);

function armyAge(event) {
  event.preventDefault();
  const myAge = Number(age.value);
  const criminalRecord = conviction.checked;
  if (myAge >= 18 && myAge <= 30 && !criminalRecord) {
    document.querySelector("h1").textContent = "You have to join the Army";
  } else {
    document.querySelector("h1").textContent = "You got lucky";
  }
}

const myYearsWorked = document.getElementById("yearsWorked");
document.querySelector("form").addEventListener("submit", calcBonus);

function calcBonus(event) {
  event.preventDefault();
  const bonus = 50;
  const yearsWorked = 10;
  const yearsWorked2 = 20;
  if (myYearsWorked.value >= yearsWorked2) {
    document.querySelector("h1").textContent = bonus * 4;
  } else if (myYearsWorked.value > yearsWorked) {
    document.querySelector("h1").textContent = bonus * 2;
  } else if (myYearsWorked.value < 10) {
    document.querySelector("h1").textContent = bonus;
  }
}

const leapYear = document.getElementById("leapYear");

document.querySelector("form").addEventListener("submit", calcLeapYear);
function calcLeapYear(event) {
  event.preventDefault();
  const isLeapYear = leapYear.value % 4;

  if (isLeapYear === 0) {
    document.querySelector("h1").textContent =
      leapYear.value + "Kelemieji Metai";
  } else {
    document.querySelector("h1").textContent =
      leapYear.value + "Ne kelemieji Metai";
  }
}

const convert = document.getElementById("converter");

document.querySelector("form").addEventListener("submit", converter);

function converter(event) {
  event.preventDefault();
  const farenheit = 1.8;
  const celcius = convert.value * farenheit + 32;
  document.querySelector("h1").textContent = celcius + "°F";
}

document.querySelector("form").addEventListener("submit", checkEmail);

const checkbox = document.querySelector("input[type=checkbox]");
const email = document.getElementById("email");

function checkEmail(event) {
  event.preventDefault();
  const emailCheck = checkbox.checked;
  const typeEmail = email.value;
  if (typeEmail != 0 && !emailCheck) {
    return alert("Registracija nesekminga");
  } else {
    return alert(`El paštas ${typeEmail} užregistruotas`);
  }
}

document.querySelector("form").addEventListener("submit", checkItems);

function checkItems(event) {
  event.preventDefault();
  const userText = document.getElementById("userText").value;
  const userNumber = document.getElementById("userNumber").value;
  const list = document.getElementById("list");
  list.innerHTML = "";
  for (let i = 0; i < userNumber; i++) {
    const listItem = document.createElement("li");
    listItem.innerText = userText;
    list.appendChild(listItem);
  }
}

//FOR CIKLAS

for (let i = 1; i <= 20; i++) {
  console.log(i);
}
//1.
function loop() {
  for (let i = 0; i <= 100; i++) {
    console.log(i * 2);
  }
}
loop();
//2.
function loop2() {
  for (let i = 0; i <= 100; i++) {
    console.log(i * 5);
  }
}
loop2();
//3.
function loop3() {
  for (let i = 0; i <= 100; i++) {
    console.log(i + 3);
  }
}
loop3();
//4.
function loop4() {
  for (let i = 0; i <= 100; i++) {
    console.log(i - 2);
  }
}
loop4();
//5.
function loop5() {
  for (let i = 0; i <= 100; i++) {
    console.log(i ** 2);
  }
}
loop5();
//6.
function loop6() {
  for (let i = 0; i <= 100; i++) {
    console.log(i ** 3);
  }
}
loop6();
//7.
function loop7() {
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
}
loop7();

//8.
function loop8() {
  for (i = 0; i < 200; i++) {
    if (i % 7 === 0 && i % 5 === 0 && i % 3 === 0) {
      console.log(i + "FizzBuzzBiff");
    } else if (i % 7 === 0 && i % 3 === 0) {
      console.log(i + "FizzBuff");
    } else if (i % 7 === 0 && i % 5 === 0) {
      console.log(i + "BuzzBiff");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + "FizzBuzz");
    } else if (i % 9 === 0) {
      console.log(i + "Fuzz");
    } else if (i % 7 === 0) {
      console.log(i + "Biff");
    } else if (i % 3 === 0) {
      console.log(i + "Fizz");
    } else if (i % 5 === 0) {
      console.log(i + "Buzz");
    } else {
      console.log(i);
    }
  }
}
loop8();
