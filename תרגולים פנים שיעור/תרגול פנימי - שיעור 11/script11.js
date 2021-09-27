let myObj = {name:"matan", age:25, id:"205962178"}
console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.id);

myObj.id = 305962178;
console.log(myObj.id);

console.log("my name is: "+myObj.name+" and my id is: "+myObj.id );

let myArr = [];
myArr.length = 5;
console.log(myArr);

if (myArr[2]== 10) {
    console.log(true);
}
else{
    console.log("not equal");
}

let myVar1 = 5;
let myVar2 = 6;

if (myVar1>myVar2){
    console.log(myVar1 + "is a greater number than " + myVar2);
}
else{
    console.log (myVar2 + " is a greater number than " + myVar1);
}

let myVar = 88;

if (10>myVar){
    console.log('F');
}
else if (20>myVar){
    console.log('D');
}
else if (50>myVar){
    console.log('C');
}
else if (80>myVar){
    console.log('B');
}
else if (90>myVar){
    console.log('A');
}