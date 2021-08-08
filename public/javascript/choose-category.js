async function newFormHandler(event) {
  event.preventDefault();
  
  const title = document.querySelector('input[name="post-title"]').value;

  const response = await fetch(`/api/categories`, {
    method: 'GET',
    body: JSON.stringify({
      category_name
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  }
  else {
    alert(response.statusText)
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler)