
const form = document.querySelector('.form-authentification');


const invalidFeedback = document.querySelector('#feedback');

form.addEventListener('submit', async (event) => {

  try{
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  const response = await fetch('/auth', {
    method: 'POST',
    headers: {'Content-Type': 'Application/json'},
    body: JSON.stringify({
      email,
      password
    }),
  });
  const data = await response.json();
  console.log(data)

  if (!data.login){
    invalidFeedback.innerHTML = data.message;
    window.location.replace('/auth');

  }
  if (data.login){
    window.location.replace('/');
  }
} catch(error){
console.log(error.message);
}});