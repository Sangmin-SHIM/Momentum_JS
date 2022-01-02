const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector("input");

const link = document.querySelector('a');
const titleAfterBtn = document.querySelector('h1');
const deleteBtn = document.querySelector('button');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event){
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    deleteBtn.classList.remove(HIDDEN_CLASSNAME);
   
    const username = loginInput.value; 
    localStorage.setItem(USERNAME_KEY, username);

    deleteBtn.classList.remove(HIDDEN_CLASSNAME);
    deleteBtn.addEventListener("click", handleDeleteClick);
    greeting();


}

function greeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    titleAfterBtn.innerHTML= `Hello ${username}`;
    titleAfterBtn.classList.remove(HIDDEN_CLASSNAME);
}
 

function handleDeleteClick(){
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    titleAfterBtn.classList.add(HIDDEN_CLASSNAME);
    deleteBtn.classList.add(HIDDEN_CLASSNAME);
    loginInput.value="";

}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    /// Form
    loginForm.classList.remove(HIDDEN_CLASSNAME);

    loginForm.addEventListener("submit", onLoginSubmit)
} else{
    /// Greeting
    greeting();
    deleteBtn.classList.remove(HIDDEN_CLASSNAME);
    deleteBtn.addEventListener("click", handleDeleteClick);

}
