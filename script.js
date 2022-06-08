const addItem = document.getElementById("addButton");
const inputField = document.getElementById("inputField");
const itemContainer = document.getElementById("itemContainer");
const activity = document.getElementById("idNumber");

let idNumber = 0;

const addListItem = () => {
  // susikuri
  const content = document.createElement("div");
  content.setAttribute("id", "itemBox");
  content.classList.add("content");
  //papildai turiny
  itemContainer.appendChild(content);
  // sukuri checkbox
  //sukuri paragrafa
  createTextItem(content);
  createCheckbox(content);
  createDeleteIcon(content);

  // createArrowIcon(content);
  createSecondCheckbox(content);
  idNumber++;
};

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && inputField.value != 0) {
    addListItem();
  }
});

addItem.addEventListener("click", function () {
  if (inputField.value != 0) {
    addListItem();
  }
});

const createCheckbox = (content) => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");
  const text = document.getElementById(idNumber);

  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      text.style.textDecoration = "line-through";
    } else {
      text.style.textDecoration = "none";
    }
  });
  content.appendChild(checkbox);
};

const createTextItem = (content) => {
  const activity = document.createElement("p");
  activity.setAttribute("id", idNumber);
  activity.classList.add("activity");
  // pridedi teksta
  activity.innerText = inputField.value;
  // priskiri tevui
  content.appendChild(activity);
  inputField.value = "";
};

const createDeleteIcon = (content) => {
  const icon = document.createElement("button");
  icon.innerHTML = `<svg class="color"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
  <path
    d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
  />
</svg>`;
  icon.classList.add("icon");
  content.appendChild(icon);
  icon.addEventListener("click", function () {
    itemContainer.removeChild(content);
  });
};
// let count = 1;
// const createArrowIcon = (content) => {
//   const arrowIcon = document.createElement("button");
//   arrowIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z"/></svg>`;
//   arrowIcon.classList.add("arrowIcon");
//   content.appendChild(arrowIcon);

//   arrowIcon.addEventListener("click", function () {
//     if (count === 0) {
//       content.style.backgroundColor = "#f38686";
//       count = 1;
//       itemContainer.prepend(content);
//       //sitas prepend stackoverflow radau ir ten buvo prependTo ir neveike man, machine learning overcame this obstacle tho
//     } else {
//       content.style.backgroundColor = "white";
//       count = 0;
//     }
//   });
// };

const createSecondCheckbox = (content) => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");
  document.querySelector("p");
  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      content.style.backgroundColor = "#f38686";
      itemContainer.prepend(content);
    } else {
      content.style.backgroundColor = "white";
      itemContainer.append(content);
    }
  });
  content.appendChild(checkbox);
};
