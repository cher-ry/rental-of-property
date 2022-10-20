const form = document.querySelector('.filter-container');
const newAd = document.querySelector('.card');

form.addEventListener('change', async (event) => {
  event.preventDefault();
  const category = event.target.value;

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      category,
    }),
  });
  const data = await response.text();
  newAd.innerHTML = data;
});

