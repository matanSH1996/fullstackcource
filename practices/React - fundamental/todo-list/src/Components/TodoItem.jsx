import React from 'react'

const TodoItem = ({todo, handleCompleted, handleDelete}) => { //using the prop which was transfered from "TodoList" component.
  // console.log(todo)
  // console.log(todo.completed)
  


  return (
    <div className='todoItemComponent'>
      <p style={{ textDecoration: todo.completed ? 'line-through' : '' }}> {/*inline styling need an object in order to work ,this why in our case we used double curly brackets, one of the style tag and the other on efor the object itself.
      
      we used ternary operator to replace the "if-else" statements. when we want nothing to happen we can wright empty string -> " '' ". 
      
      about style in React, unlike JS, in React there are no dashes -> " - " between each word. this is why we wrote "textDecoration" the specification the relevant selection will be with dashes -> " 'line-through' "*/}

        {todo.task}</p> {/*returning the task value, inside of "todo" array, after recieving them from the "TodoList" component*/}

        

      <div className='todoItem-inner-div'>
        <input type="checkbox" className='todoItem-checkBox' checked={todo.completed} onChange={() => handleCompleted(todo.id)}/>{/*creating new radio button for each task*/}

        <button onClick={() => handleDelete(todo.id)}>delete</button>{/*creating new delete button for each task*/}
      </div>
    </div>
  )
}

export default TodoItem