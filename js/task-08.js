const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event=> {
  event.preventDefault()

  const {
    elements: { email, password }
  } = event.currentTarget;


  if (email.value === '' || password === '') {
    const message = 'All fields must be filled!!!'
    return alert(message)
  }

  const userData = { email: email.value, password: password.value }
  console.log(userData)

  event.currentTarget.reset()
})

