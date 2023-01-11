const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("ul")

for (const ingredient of ingredients) {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = ingredient;
  listEl.appendChild(element);
}
console.log(listEl)


// Второй способ решения (map)

// const listContentEl = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// listEl.insertAdjacentHTML("beforeend", listContentEl);

// console.log(listEl)

// // Третий способ решения (reduce)

// const listContentEl = ingredients.reduce(
//   (acc, ingredient) => (acc += `<li class="item">${ingredient}</li>`), "");
//   listEl.insertAdjacentHTML("beforeend", listContentEl);
// console.log(listEl)