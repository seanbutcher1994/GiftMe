const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#newitem').value.trim();
    const URL = document.querySelector('#URL').value.trim();
    const price = document.querySelector('#price').value.trim();
  
    if (name && URL && price) {
      const response = await fetch(`/api/post`, {
        method: 'post',
        body: JSON.stringify({ name, URL, price }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
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
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);