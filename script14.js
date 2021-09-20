let input = document.getElementsByClassName('getInfo');
let age_validation = document.getElementById('age-validation');
let my_btn = document.getElementById('my-btn').addEventListener('click', foo);


function foo(){
    let getDetail = [];
    for (let i=0; i<input.length; i++){
        getDetail[i] = input[i].value;       
    }
    paste (getDetail)
    if (input[3].value < 18){
        alert('you are under the required age!');
    }else{
        alert('welcome!');
        age_validation.style.display = 'block';
    }
}

function paste(getDetail){
    let pasteData = document.getElementsByClassName('pasteInfo');
    for(let i=0; i<input.length;i++){
        if(i == 3){
            console.log("the user: " +input[0].value+ " is: "+input[3].value+" years old")
            break;
        }
        pasteData[i].innerHTML = getDetail[i];
    }   
}

