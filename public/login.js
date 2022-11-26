const { response } = require("express")

// when login is pressed
const btnLogin = document.getElementById('btnLogin')
btnLogin.addEventListener('click', () =>{
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    // function to take email and password and send it to the back end
    //take the inputs from email & password
    const userValues = {
        username: username,
        password: password
    }
    //fetch
    fetch('/api/user', {
        method:'POST',
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userValues),
    })
    .then(response => response.json())
    .then(data => console.log(data))
})

// recieve a response
// function to log user in based on response


//when signup is pressed hide the login page and show the sign up page

//when login is pressed hide the sign up page and show the log in page



// SAMPLE //
const GetRequestToApi = async (url) => {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
    });
    const data = await response.json();
    return data;
}

// get all users
GetRequestToApi("/api/users/")



const PostRequestToApi = async (url, values) => {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values)
    });
    const data = await response.json();
    return data;
}

// get all users
PostRequestToApi("/api/users/",
 {
    username: username,
    password: password
}
)