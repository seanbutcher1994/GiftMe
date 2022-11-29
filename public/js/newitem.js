const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#newitem').value.trim();
    const url = document.querySelector('#URL').value.trim();
    const price = document.querySelector('#price').value.trim();
    const user_id = document.querySelector('#id').value.trim();
  
    if (name && url && price && user_id) {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ name, user_id, url, price }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
  document
    .querySelector('#savenewitembtn')
    .addEventListener('submit', newFormHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);