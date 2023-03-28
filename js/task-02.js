const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const element = document.querySelector("#ingredients");

const listEl = ingredients.map((label) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = label;

  itemEl.classList.add("item");

  return itemEl;
});

element.append(...listEl);
