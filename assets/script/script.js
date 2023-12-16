'use strict';

const dummyUsers = [
    { username: 'user1', password: 'pwd1' },
    { username: 'user2', password: 'pwd2' },
    { username: 'user3', password: 'pwd3' },
    { username: 'user4', password: 'pwd4' },
    { username: 'user5', password: 'pwd5' },
    { username: 'user6', password: 'pwd6' },
    { username: 'user7', password: 'pwd7' },
    { username: 'user8', password: 'pwd8' },
    { username: 'user9', password: 'pwd9' },
    { username: 'user0', password: 'pwd0' },
];

function login() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    const validUser = dummyUsers.find(user => user.username === enteredUsername && user.password === enteredPassword);

    if (validUser) {
        document.getElementById("username").style.border ="2px solid green";
        document.getElementById("password").style.border ="2px solid green";
        // Save login information to local storage
        localStorage.setItem('username', enteredUsername);
        localStorage.setItem('password', enteredPassword);
        
        document.getElementById('errorMessage').textContent = '';
 
        //alert("Logged In");
        // Redirect the user to the home page
        window.location.href = 'index.html';   
    } else {
        document.getElementById('errorMessage').textContent = 'Incorrect username or password';
        document.getElementById("username").style.border ="2px solid red";
        document.getElementById("password").style.border ="2px solid red";
    }
}
function signup()
{
  alert("Not Done Yet");
}
  
 
