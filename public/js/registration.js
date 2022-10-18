const form = document.querySelector('.regoForm');

const confirmation = document.querySelector('#confirm');
form.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const name = event.target.name.value;
    const password = event.target.password.value;
    const email = event.target.email.value;
    const role = event.target.role.value;
    const passwordconf = event.target.passwordconf.value;

    const response = await fetch('/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        name,
        password,
        email,
        role,
        passwordconf,
      }),
    });
    const data = await response.json();
    if (!data.registration) {
      confirmation.innerHTML = data.message;
    } else {
      window.location.replace('/');
    }
  } catch (error) {
    console.log(error.message);
  }
});
