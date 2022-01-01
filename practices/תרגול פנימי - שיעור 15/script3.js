let get_code = document.getElementById('code-generate').addEventListener('click', foo());

function foo () {
    let rand = Math.round((Math.random()*1000000));
    console.log(rand);
}

let insert_code = document.getElementById('code-insert').addEventListener('click', myCode());
let user_code = document.getElementById('text-place').innerText;

function myCode() {
    if(user_code == rand){
        alert('welcome');
    } else{
        alert('please try again');
    }
}