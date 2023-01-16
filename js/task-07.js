const changeInput = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

textEl.style.fontSize = `${changeInput.value}px`

const handleInput = () => {
  textEl.style.fontSize = `${changeInput.value}px`
};

changeInput.addEventListener('input', handleInput);
