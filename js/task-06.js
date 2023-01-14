const focusInput = document.querySelector('#validation-input');
const lengthInput = Number(focusInput.dataset.length);

console.log(lengthInput)

focusInput.addEventListener('blur', (event) => {
  if (event.currentTarget.value.length === lengthInput) {
    focusInput.classList.add('invalid');
    focusInput.classList.replace('invalid','valid');
  } else {
    focusInput.classList.add('valid');
    focusInput.classList.replace('valid','invalid');
  }
})
