// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const loginButton = document.querySelector("#login-form button");
// const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME_KEY = "userNameKey";

function onLoginSubmit(event) {
    event.preventDefault();
    // const userName = loginInput.value;
    // if(userName === "") {
    //  alert("Please write your name")   
    // } else if (userName.length > 15) {
    //  alert("Your name is too long")   
    // }

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem("USER_NAME_KEY", userName)
    // greeting.innerHTML = "Hello " + userName;
    paintGreetings(userName);
    // greeting.innerHTML = `Hello ${userName}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME)
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
// function handleLinkClick(event) {
//     event.preventDefault();
// }

const savedUserName = localStorage.getItem("USER_NAME_KEY");

if (savedUserName === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    // show the h1
    paintGreetings(savedUserName);
    // greeting.innerText = `Hello ${savedUserName}`
    // greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit);
// onLoginSubmit(info);
// loginButton.addEventListener("click", onLoginBtnClick)
// link.addEventListener("click", handleLinkClick);