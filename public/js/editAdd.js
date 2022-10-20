const form = document.querySelector('.editAddForm')
const deleteBtn = document.querySelector('.delete')
form.addEventListener('submit',async (event)=>{
    event.preventDefault()
    console.log(event.target.photo.files[0])
    const response = await fetch(`/admin/${event.target.dataset.id}/edit`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify({
          category: event.target.category.value,
          price: event.target.price.value,
          description: event.target.description.value,
          photo: event.target.photo.files[0],
          address: event.target.address.value,
        }),
      });
  
      const responseJson = await response.json();
  
      if (!responseJson.isUpdateSuccessful) {
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error');
        errorDiv.innerText = responseJson.errorMessage;
        event.target.parentElement.append(errorDiv);
        return;
      }
  
      window.location = `/admin`;
    })

deleteBtn.addEventListener('click',async (event)=>{
  console.log(event.target.dataset.id)
  const response = await fetch(`/admin/${event.target.dataset.id}`, {
    method: 'DELETE',
  });

  const responseJson = await response.json();

  if (!responseJson.isDeleteSuccessful) {
    const errorDiv = document.createElement('div');
        errorDiv.classList.add('error');
        errorDiv.innerText = responseJson.errorMessage;
        event.target.parentElement.append(errorDiv);
        
    return;
  }
  window.location = `/admin`;
})