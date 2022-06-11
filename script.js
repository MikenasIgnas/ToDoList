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
  createCompleteCheckbox(content);
  createDeleteIcon(content);

  // createArrowIcon(content);
  createPriorityCheckbox(content);
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

const createCompleteCheckbox = (content) => {
  const text = document.getElementById(idNumber);

  const onClick = (event, label) => {
    const {
      target: { checked },
    } = event;

    if (checked) {
      if (label) {
        label.innerHTML = "Undo";
      }

      text.style.textDecoration = "line-through";
    } else {
      if (label) {
        label.innerHTML = "Finish";
      }

      text.style.textDecoration = "none";
    }
  };

  const checkbox = createCheckbox(onClick, "Finsih");
  content.appendChild(checkbox);
};
//
const createPriorityCheckbox = (content) => {
  const onClick = (event, label) => {
    const {
      target: { checked },
    } = event;

    if (checked) {
      if (label) {
        label.innerHTML = "Down";
      }
      content.style.backgroundColor = "#f38686";
      itemContainer.prepend(content);
    } else {
      if (label) {
        label.innerHTML = "Up";
      }
      content.style.backgroundColor = "white";
      itemContainer.append(content);
    }
  };
  const checkbox = createCheckbox(onClick, "Up");
  content.appendChild(checkbox);
};
