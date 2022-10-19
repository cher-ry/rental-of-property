const form = document.querySelector('.regoForm');

const confirmation = document.querySelector('#confirm');
console.log(form,confirmation)
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const login = event.target.login.value;
    const password = event.target.password.value;
    const email = event.target.email.value;
    const role = event.target.role.value;
    const passwordconf = event.target.passwordconf.value;
    
    try {
    const response = await fetch('/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        login,
        password,
        email,
        role,
        passwordconf,
      }),
    });
    const data = await response.json();
    console.log(data.registration)
    if (!data.registration) {
      confirmation.innerHTML = data.message;
    } else {
      window.location.replace('/');
    }
  } catch (error) {
    console.log(error.message);
  }
});
