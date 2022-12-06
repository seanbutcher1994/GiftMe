const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#username").value;
    const passwordEl = document.querySelector("#password").value;

    if (usernameEl && passwordEl) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/user/login', {
        method: 'post',
        body: JSON.stringify({ username: usernameEl, password: passwordEl }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // const id = await fetch(`/${usernameEl}`), {
        //   method: 'get',
        //   body: JSON.stringify({})
        // }
        // If successful, redirect the browser to the profile page
        document.location.replace(`/${usernameEl}`);
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // const signupFormHandler = async (event) => {
  //   event.preventDefault();
  
  //   const name = document.querySelector('#name-signup').value.trim();
  //   const email = document.querySelector('#email-signup').value.trim();
  //   const password = document.querySelector('#password-signup').value.trim();
  
  //   if (name && email && password) {
  //     const response = await fetch('/api/users', {
  //       method: 'POST',
  //       body: JSON.stringify({ name, email, password }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/profile');
  //     } else {
  //       alert(response.statusText);
  //     }
  //   }
  // };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  // document
  //   .querySelector('.signup-form')
  //   .addEventListener('submit', signupFormHandler);