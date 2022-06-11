const createCheckbox = (onClick, labelText) => {
  const container = document.createElement("div");
  const checkbox = document.createElement("input");
  container.classList.add("check");
  checkbox.type = "checkbox";

  let label;

  if (labelText) {
    label = document.createElement("label");
    label.innerHTML = labelText;
    label.classList.add("label");
    container.appendChild(label);
  }

  if (onClick) {
    checkbox.addEventListener("click", (event) => onClick(event, label));
  }

  container.appendChild(checkbox);

  return container;
};
