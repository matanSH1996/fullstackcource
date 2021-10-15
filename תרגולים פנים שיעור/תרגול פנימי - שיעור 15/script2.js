// In your HTML create 10 identical P elements, they should all have the same class and text
// In your JS target them using getElementsByClassName,
// let pars = document.getElementsByClassName('par');
// // and using a click event on a button change their background color and inner text using for of loop
// let btn = document.getElementById('change-pars');
// btn.addEventListener( 'click', (event) => {
//     for ( let par of pars ) {
//         par.style.backgroundColor = '#FF0000';
//         par.innerText = 'Changed'
//     }
// });

// // Create 3 buttons with the same class, and target them using querySelectorAll
// // with a for of loop iterate through the elements returned, and add a click event listener in your loop, on click, 
// // alert something to the screen
// let btns = document.querySelectorAll('.alert');
// for ( let btn of btns ) {
//     btn.addEventListener( 'click', (event) => {
//         alert('hello');
//     });
// }

// // Create a form in your html with 3 number fields, one for day, one for month, one for year.
// // on form submission, check if the age of the person is above 18, and if so alert "above 18", else alert "below 18"


// let form = document.getElementById('my-form');
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let day = document.querySelector('input[name="day"]').value;
//     let month = document.querySelector('input[name="month"]').value;
//     let year = document.querySelector('input[name="year"]').value;

//     let today = {d: 19, m: 9, y: 2021};
//     if ( ( (2021 - year) >= 18 ) && ( day <= today.d ) && ( month <= today.m ) ){
//         alert('above 18');
//     } else {
//         alert('below 18');
//     }
// })

// let add_btns = document.getElementsByClassName('add-to-cart');
// let list = document.getElementById('list');

// for ( let add_btn of add_btns ) {
//     add_btn.addEventListener( 'click', (event) => {
//         let title = add_btn.parentNode.querySelector('h2').innerText;
//         let par = document.createElement('p');
//         par.innerText = title;
//         list.appendChild( par );
//     });
// }

// Create a list with 5 items, and each item should have a button in it saying 'add to list', and price
// clicking on the button, should add the item's name to a list bellow
// also, create a summary line, that updates on each 'add to list' click. it shows the subtotal. 
// for the numbers you collect from the list, use paresFloat() / parseInt() to get the numerical value

let list_btns = document.getElementsByClassName('add-to-list');
let list = document.getElementById('list');
let remove_from_list = document.getElementById('remove');

for ( let list_btn of list_btns ) {
    list_btn.addEventListener( 'click', (event) => {
        // get item name 
        let title = list_btn.parentNode.querySelector('.item-name').innerText;
        // create p element
        let par = document.createElement('p');
        // assign item name to element text
        par.innerText = title;
        // append element to list
        list.appendChild(par);

        // get current subtotal
        let subtot = parseFloat(document.getElementById('subtotal').innerText);
        let price = parseFloat(list_btn.parentNode.querySelector('.item-price').innerText);

        document.getElementById('subtotal').innerText = subtot + price;

    
        for ( let remove_from_list of remove_from_list ) {
            remove_from_list.addEventListener( 'click', (event) => {
                for(){
                    
                }
            })
        }
    })
    
}

