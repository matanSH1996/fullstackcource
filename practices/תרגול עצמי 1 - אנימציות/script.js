function foo(num){
    if (num<100){
        alert(num + ' is less than 100');
    }
    else {
        alert (num + ' is more than 100');
    }
}

document.write(foo (15));

let myObj = {name: 'Matan', age: 80};
function person (name, age){
    alert('your name is ' + name + ' and your age is+ ' + age);
}

person (myObj.name, myObj.age)

function printStars(numberRows) {
    let stars = '';
    for( let i = 0; i < numberRows; i++ ) {
        stars += '*';
        document.write(stars)
    }
}

function fibonacci(arg1, arg2){
    console.log(arg1)
    for (let i = 0; i<10000; i++){
        let result =(arg1 + arg2)
        document.write(result) + '<br>';
    }
    
}