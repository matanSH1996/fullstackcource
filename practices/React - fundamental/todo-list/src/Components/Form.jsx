import React from 'react'
import { useState } from 'react'

const Form = ({handleAddTodo, setTodos, todos}) => {
  const [inputValue, setInputValue] = useState("")

  const [toggle, setToggle] = useState(false) //we created new "useState" for toggle (which holds values of true and false) and initialized it with false.

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // console.log(event.target.value)
    //event is an object which contains many keys.
    //-> for example "event.target" will target the input element itself.
    //-> another example will be "event.target.value" which will target the value that we insert inside the input element
  }

  const handleAddTodoClick = () =>{
    handleAddTodo(inputValue);
    console.log(inputValue)
    //this function calls the function "handleInputChange" which creates a new "newTodo" to the end of the "initialTasks" array.
    //the "inputValue" state - holds the inserted input value, in other words, any change of the inner value of the input, will be contained by "inputValue"
  }

  const handleMarkAll = (event) => { //a function which gets an event
    // console.log(event.target.checked)

    let toggleTodos = [...todos] //the function creates new array which is a copy of "todos" array.

    toggleTodos = toggleTodos.map((todo) => ({ 
    ...todo,
    completed: event.target.checked, }))
    
    
    //redefining the array of "toggleTodos" with "map()" method. 

    //spreading todos array.
    
    //the map method run over each todo in the "todo.completed" key and defining the value of the checkbox to be true 

    setTodos(toggleTodos) //redefining "toggleTodos" with the new state of "todo.completed = true" for each todo, with setTodos(the value changer)

    setToggle(event.target.checked) //we transfer to toggle the event of checkbox.
    }


  return (

    <div className='form-wrapper'>
      <div className='formComponent'>
        <input onChange={handleInputChange} type="text"/>
        {/*the input element get the "handleInputChange" function.
        any change in the input's inner value, which we target by using -> event.target.value, will be detected and available */}
        <button onClick={handleAddTodoClick}>Add</button>
        {/*this function can print the input's value which we write inside of it, by clicking the "Add" button */}
        <p>{inputValue}</p>
      </div>
      <div className='markAll'>
        <label htmlFor="toggle-all">{toggle ? "uncompleted-all" : "completed-all"}</label> {/*we used ternary operator to define that, if toggle (the state which we initealized it with "false") is false, the name displayed will be "uncompleted-all" and if its true,"completed-all" */}
        <input type="checkbox" onClick={handleMarkAll}/> 
      </div>
      
    </div>
  )
}

export default Form