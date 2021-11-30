//variable declarations for the calculation

let firstNumber;
let secondNumber;


//variable declarations

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let multiplied = document.getElementById('multiplied');
let exponent = document.getElementById('exponent');
let percentage = document.getElementById('percentage');
let division = document.getElementById('division');
let sum = document.getElementById('sum');
let dot = document.getElementById('dot');

//calculator buttons array
let buttons = [one,two,three,four,five,six,seven,eight,nine,zero,minus,plus,multiplied,exponent,percentage,division,sum,dot];

let display_area = document.getElementById('display-area');
const calculator_buttons = Array.from(buttons)

calculator_buttons.forEach(buttons => buttons.addEventListener('click', calculation))

function calculation(){

//  console.log('ive been clicked')
switch (this) {
    case zero:
        //need to make sure 0 is not the first number unless there is a dot case after. 
    case one:
    case two:
    case three:
    case four:
    case five:
    case six:
    case seven:
    case eight:
    case nine:

        // console.log('ive been clicked')
        // console.log(this)
        // console.log(this.firstElementChild)
        // console.log(this.firstElementChild.innerText)
        display_area.innerHTML += parseInt(this.firstElementChild.innerHTML);
        console.log(display_area.innerText);
        if(firstNumber){return}


        // const firstNumber = [display_area.innerText];

        // firstNumber.push(parseInt(display_area.innerText))

        //----------------------------------------------------------------------
        // let firstNumber = ['']
        // display_area.innerHTML += parseInt(this.firstElementChild.innerHTML);
        // for(let i; i=0; i++){
            
        // }
        // firstNumber.push(parseInt(this.firstElementChild.innerHTML));
        // console.log(firstNumber);
        //----------------------------------------------------------------------   
        break;
    case minus:
    
    //a substraction function is necessary 
        display_area.innerHTML += this.firstElementChild.innerHTML; 
        break;
    case plus:
    //an adding function is necessary 
        display_area.innerHTML += this.firstElementChild.innerHTML; 
        break;
    case multiplied:
    //a multiplication function is necessary 
        display_area.innerHTML += this.firstElementChild.innerHTML; 
        break;
    case exponent:
    //an exponent function is necessary 
        display_area.innerHTML += this.firstElementChild.innerHTML; 
        break;
    case percentage:
    //a percentage function is necessary 
        display_area.innerHTML += this.firstElementChild.innerHTML; 
        break;
    case division:
    //a division function is necessary 
        display_area.innerHTML += this.firstElementChild.innerHTML; 
        break;
    case sum:
    //a sum function is necessary 
        break;
    // default:
    //Statements executed when none of the values match the value of the expression
    // break;
  } 
}