let myArr = [-1, 0, 1];
myArr.forEach((value, key) => {
    if (value < 0){
        console.log('The number: '+value +' is a negative number')
    } else if (value == 0) {
        console.log('This number is Zero')
    } else if (value % 1 != 0) {
        console.log('this isnt an integer, please rearange the array')
    } else {
        console.log('The number: '+value +' is a positive number')
    }
});

myArray = ['matan','liran', 'roey', 'dror', 'jasmine'];
myArray.forEach((v, k) => {
    console.log('value: '+v, 'key: '+k)
})

let h2 = document.createElement('h2');
h2.innerHTML = 'Hello World';
document.body.appendChild(h2);
h2.style.color = 'red';
h2.style.backgroundColor = 'pink';
h2.style.fontFamily = 'Tahoma';
h2.style.fontSize = '60px';

let btn = document.getElementById('my-button');
let my_p = document.getElementById('my-p');
btn.addEventListener('click', (Event) =>{
    if(my_p.style.display == 'none'){
        my_p.style.display = 'block';
    } else {
        my_p.style.display = 'none';
    }
})