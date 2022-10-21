const delFavoriteBtn = document.querySelectorAll('.is-deleteBtn');

delFavoriteBtn.forEach((button) => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();

    const articleID = event.target.name.slice(3);
    console.log(articleID);
    const response = await fetch(`/favorites/${articleID}`, {
      method: 'DELETE',
    });
    const element = document.querySelector(`#button5${articleID}`)
    const data = await response.json();
    if (data.result) {
      element.remove();
    } else {
      console.log('Mistake');
    }
  });
});
