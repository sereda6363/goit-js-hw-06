const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', event => {
  outputText.textContent = event.currentTarget.value;

  if (event.currentTarget.value === '') {
    outputText.textContent = 'Anonymous';
    }
})
console.log("🚀 ~ file: task-05.js:11 ~ inputText", inputText)
