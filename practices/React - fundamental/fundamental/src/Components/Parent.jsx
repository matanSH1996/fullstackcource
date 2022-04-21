import React from 'react'; //in order to start a new "component template" similar to the efect of "!" in HTML we should write "rafce"
import Child from './Child';

const Parent = ({counter}) => { //by using the reserved word "props", we are allow to transfer methods between components.
  return( 
    <div>
        <h1>{counter}</h1> {/*after we defined the counter in the "App.js" page, and attached the counter to the "Parent" component, we can use the method by using the syntax of - "{props.methodName} ((in curly brackets)" */}
        <Child counter = {counter}/>
    </div>)
};

export default Parent;
