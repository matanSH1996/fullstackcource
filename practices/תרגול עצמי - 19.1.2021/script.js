
// function myClosure(num1) {
//     return(num2) => { return num1+num2}
// }

//-------------------------------------------------

function myTry(numArray){
    let sum = 0; //initializing the sum variable
    for(let i=0;i<numArray.length;i++){ //this "for" loop will run over the array of the variable which the user will insert.
    
    // explaining the "for" loop structure:
    // let i=0 --> initializing the iteration from the first index (which is the "0" part)

    // i<numArray.length --> the first part of the array is the "0" part, and the last part of the array is the array's name in the length part, or again, in our case numArray.length

    // i++ --> in the "for" loop, the "i" variable, will iterates the "numArray" array till the last part.

        numArray[i] = Math.pow(numArray[i],2) //"numArray" is the name of the array itself. the "numArray[i]" refers to the number inside of the array in the "i" part.

        //"i" part means the specific iteration.
        
        //The Math.pow() is a static method, given two arguments, base (the number we want to raise by power) and exponent, returns powered base.

        sum += numArray[i]; //by using "+=" signs, we state that each of the numbers given by the user in "numArray", will be add to the "sum" variable. similar to "sum = sum + numArray[i]".    
        };

        return sum //we want the function to return the sum of all the powered numbers
    }


let numArray = [2,6] //the array given by the user
console.log(myTry(numArray)); //executing the function. the execution of the function must be after the number insertion from the user because this is - synchronous operation (tasks are performed one at a time and only when one is completed).

//-------------------------------------------------

//the task is to find if in integer number is odd or even.
function even_or_odd(number) {
    if(number%2!=0){ //start a "if" statement to make the required condition.
        
    // in order to find if a number is even we need the modulo of this specific number to be equal to = 0.

    //the condition i wanted to check is - if a number's modulo isnt equal to "0", in this way we can define all the odd numbers.
    
        return 'Odd'; //the value which return if the "if" statement is true  
    }else {
        return 'Even'; //the value which return if the "if" statement is false  
    }
  }

console.log(even_or_odd(-42))  

//-------------------------------------------------

function check(victimList){   
    let newArray = [];
    for(let i=0; i<victimList.length; i++){
        if(typeof victimList[i] === 'number' ){
            console.log(victimList[i])
            newArray = victimList;
        }

    }
    const filtered = newArray.filter(word =>typeof word === 'number');
    return filtered
}

let victimList = [4,6,3,2,'a','123',-42,'-42',0]
console.log(check(victimList))

//-------------------------------------------------

function pillars(num_pill, dist, width) {
    // your code here
  }