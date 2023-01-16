const focusInput = document.getElementById('validation-input');
const lengthInput = Number(focusInput.dataset.length);

focusInput.addEventListener('blur', (event) => {
  if (event.currentTarget.value.length === lengthInput) {
    focusInput.classList.add('valid');
    focusInput.classList.remove('invalid');
  } else {
    focusInput.classList.remove('valid');
    focusInput.classList.add('invalid')
  }
})