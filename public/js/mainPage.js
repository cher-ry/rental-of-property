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
    // console.log(event.target)
    event.target.style.backgroundColor = 'grey';
    const articleID = event.target.name.slice(3);
    // const statusClass = `.status ${articleID}`;

    const response = await fetch('/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        articleID,
      }),
    });
    const data = await response.json();
    const divchik = document.querySelector(`.status${articleID}`);
    console.log(divchik);
    if (data.favorite) {
      divchik.innerText = 'Добавлено в избранное';
    } else if (!data.favorite) {
      divchik.innerText = 'Уже там';
    }
  });
});
