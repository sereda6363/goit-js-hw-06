const changeInput = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

changeInput.addEventListener('change', event => {
  textEl.style.fontSize = `${event.target.value}px`
})

