const collorButtonEl = document.querySelector('.change-color');
const spanCollorEl = document.querySelector('.color');

collorButtonEl.addEventListener('click', () => {
  let funEl = getRandomHexColor()
  document.body.style.backgroundColor = funEl
  spanCollorEl.textContent = funEl
})

const getRandomHexColor= () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}