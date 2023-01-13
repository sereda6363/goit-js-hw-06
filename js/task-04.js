let counterValue = 0;

const counterDisplay = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', decrementChangeClickBtnHendler);

function decrementChangeClickBtnHendler() {
  counterValue -= 1
  counterDisplay.textContent = counterValue
}

incrementBtn.addEventListener('click', incrementChangeClickBtnHendler);

function incrementChangeClickBtnHendler() {
  counterValue += 1
  counterDisplay.textContent = counterValue
}

