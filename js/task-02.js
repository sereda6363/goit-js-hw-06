const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients")
const liArray = []
const listContentEl = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
listEl.createElement("beforeend", listContentEl);
listEl.append(...liArray)
// console.log(listEl)


// Второй способ решения (for)

// for (const ingredient of ingredients) {
//   const element = document.createElement("li");
//   element.classList.add("item");
//   element.textContent = ingredient;
//   listEl.appendChild(element);
// }
// console.log(listEl)


// // Третий способ решения (reduce)

// const listContentEl = ingredients.reduce(
//   (acc, ingredient) => (acc += `<li class="item">${ingredient}</li>`), "");
//   listEl.insertAdjacentHTML("beforeend", listContentEl);
// console.log(listEl)

