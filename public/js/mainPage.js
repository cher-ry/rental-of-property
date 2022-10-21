const form = document.querySelector('.filter-container');
const newAd = document.querySelector('.card');
const favoriteBtn = document.querySelectorAll('.is-favoriteBtn');
const artForm = document.querySelector('.card-one');

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


console.log(favoriteBtn);
console.log(artForm);

favoriteBtn.forEach((button) => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();
    const articleID = event.target.name.slice(3);
    console.log(articleID)
    await fetch('/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        articleID,
      }),
    });
  });
});
// artForm.addEventListener('click', async (event) => {
//   event.preventDefault();
//   const currentBtn = event.target.name;

//   console.log(currentBtn);
// });

