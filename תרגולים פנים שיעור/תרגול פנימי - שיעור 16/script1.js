const myLink = window.location.href;
const myNewLink = new URLSearchParams(myLink);
const userName = urlParams.get(user_name_space.value);
console.log(userName);

let name_input = document.getElementsById('name-input');
let user_name_space = document.getElementById('user-name-space');
let myBtn = document.getElementById('name-button');
myBtn.addEventListener('click', (event) => {
    name_input.innerText = user_name_space.innerText;
    console.log(user_name_space.innerText)
});