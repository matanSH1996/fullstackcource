//in the import section, we can import other methods or variable to our current code page

import './App.css';
import Parent from './Components/Parent';
import { useState } from 'react';
//"useState" is a hook which located in the dependencies. hook is a function
//A dependency describes the relationship among activities, and specifies the particular order in which they need to be performed.
//"useState" return's an array which composed from [value, functionThatChangesTheValue] 



function App() { //function based component, called "App".

  const [counter, setCounter] = useState(0); //the implementaion of "useState" hook.
  //the "counetr" is the value or the "state" of the hook, and the "setCounter" is the value changer
  //the "useState()" gets one argument which will be the initial state of the argument

  const counterUp = () =>{ //a method that uses the value changer from the "useState" method
    setCounter(counter+1); //the "setCounter" is a method that changes the value in the first item in the array, which is counter. in this case we set the "setCounter" to raise the value of "counter" by 1.
  }

  const counterdown = () =>{
    setCounter(counter-1); //in this case we set the "setCounter" to decrease the value of "counter" by 1.
  }

  return (
    <div className="App">
      <h1>hellow world?!</h1>
      {/* <h3>{counter}</h3>*/}
      <button onClick={counterUp}>increace</button>
      <button onClick={counterdown}>decreace</button>
      <Parent counter = {counter}/>{/*in this way  we will pass the counter to the "Parent" component, using the "props method" */}
    </div>
    //in this return statement we bind between the "counter" item to the DOM by using curly brackets "{}".
    //the syntax of the click event is "onClick={}".
    //inside the click event we called the methods which changes the value inside the "{counter}"
    //"<Parent/>" -> in this way we can display a component after we import the component. the component must be written with capital letter.
  );
}

export default App; //provide the ability to use this method (in our case, "App")in other pages. the function's name and the name which placed after the words - "export default", must be the same! 

//the usage of the saved word "default" in the code isto automatically export - "App".
