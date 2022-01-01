for (let counter = 0; counter<10; counter++){
    console.log(counter);
}

let a = 1;
while ( a<10){
    a++;
    console.log(a);
}

let myVar = 1;
switch (myVar){
    case 1:
        console.log('sunday');
        break;
    case 2:
        console.log('monday');
        break;
    case 3:
        console.log('tuesday');
        break;
    case 4:
        console.log('wednesday');
        break;
    case 5:
        console.log('thursday');
        break;
    case 6:
        console.log('friday');
        break;
    case 7:
        console.log('saturday');
        break;
    default:
        console.log('there is no such day as: '+ myVar);
        break;
}

let myFamily = 'max';
switch (myFamily){
    case 'matan':
        console.log('me');
        break;
    case 'max':
        console.log('dad');
        break;
    case 'galia':
        console.log('mom');
        break;
    case 'lavi':
        console.log('brother');
        break;
    default:
        console.log(myFamily + 'is not frm our family!');
        break;
}

for (let i=0; i<=5; i++){
    document.write('the iteration number is: '+ i +'<br>');   
}

let str = "";
for ( let i = 0; i < 5; i++) {
    str += "*";
    console.log(str);
}



