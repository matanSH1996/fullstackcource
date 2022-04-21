import React from 'react'
import TodoItem from './TodoItem';//this is a component
const TodoList = ({todos, setTodos}) => { //const componentName = ({transfered-prop}) is the syntax required to use the transfered prop in the destinated component.
  
  const handleCompleted = (id) => { //id is the only unique part in each task. throught the id we will target the "todos.completed".

    
    const targetedIndex = todos.findIndex((todo) => todo.id ==id) //targetIndex run over todos array and finds the specific "todo.id" which the id of the "handleCompleted" parameter, belongs to.

    const updateTodos = [...todos] //initializing the "updateTodos" with the todos array. (copying the todos array to upadateTodos)

    const target = updateTodos[targetedIndex] // initializing "target" with the object of the index we found (after "findIndex" method)

    target.completed = !target.completed //difine that on click, if "target.completed" is false, make it false, and repeat.

    updateTodos[targetedIndex] = target; //redifining the object of the relevant index to be equal to target, but now "target.completed" is redefined (false became true, and the oposit)

    setTodos(updateTodos) //call the value changer of the state, to be equal to the new array (afetr changing completed status)
  }

  const handleDelete = (id) => {
    let updateTodos = [...todos]
    updateTodos = updateTodos.filter((todo) => todo.id != id)
    setTodos(updateTodos);
  }


  return (
    <div className='todoListComponent'>
      <h2>TodoList</h2>
      {todos.map((todo) => ( //The "map()" method creates new array from an existing array. the new array is populated with the Result of the function that ran on each of the array's parts.
      
      
      // in this case, we wanted that each part of the array (or each "todo") will return "TodoItem" object.(can be seen in the Inspect panel of React components)

      <TodoItem 
        key={todo.id} //a key is a unique identifier. In React, it is used to identify which items have changed, updated, or deleted from the Lists
        
        todo={todo}
        handleCompleted = {handleCompleted} handleDelete={handleDelete} /> //in order to display the tasks of "todo" array (the new array which created from running "map()" method on "todos" array), we sent "todo" as a prop to "TodoItem" component.
       ))}
    </div>
  )
}

export default TodoList