import { useState } from 'react'; //when importing hooks or methods, it must stay between "{}"
import Form from './Components/Form';//when importing a component, we dont need to use "{}"
import TodoList from './Components/TodoList';//this is a component
import './App.css' //when importing a css page to a father page, it will automatically be applied on the childrem pages 

function App() {

  const initialTasks = [ //initialization of an array which contains the default tasks in the todo list.
    {id: 1, task: "get some sleep", completed: true},
    {id: 2, task: "eat some food", completed: false},
    {id: 3, task: "write some code", completed: false}
  ]

  const [todos, setTodos] = useState(initialTasks) // we initialized the "useState" with the "initialTasks" array. 
  //"todos" is the "state", and it composed from id, task and completed boolean state, because "initialTasks" was defined as the "useState" initializer
  //"setTodos" is the value changer.

  //"handleAddTodo", is a new method which allows us to create new tasks by getting "task" parameter.
  //the parameter's name can be change to any name of our choosing.
  //in this method we defined a const named - "newTodo" which is an object, containing id, task and completed boolean state.
  // 1) we want each new task to become the last task in the list so we want the new task to have the last id number.
  //in order to target the last id number we declare that the id is -> "todos" array(todos[]) in the last part's place (todos[todos.length - 1]).
  //in array the first place is "0", and when we use "todos.length", the count starts from "1" and that why we need to reduce by 1. 
  //after we targeted the last part in todos array, we need to add "1" in in order to get the new last part.
  // 2) the value of the task key, will be defined by the "task" parameter (of "handleAddTodo").
  const handleAddTodo = (task) =>{ 
    let lastTodoId = -1; //initializing the parameter that represent the case in which we do not have any tasks in "todos" array.

    if(todos.length){//represent the case in which we have at least 1 part in "todos" array.

      lastTodoId = todos[todos.length - 1].id;
    }
    const newTodo = {
      id:lastTodoId + 1,
      task: task,
      completed: false}

    //the function "setTodos" takes the current value of "useState", which is "initialTasks", than spread it (with the spread operator), and add a "newTodo" (composed from - id, task,completed=false) to the tasks array.
     //"prev" presentates the current value of "useState" which means the "initialTasks" value
     setTodos([ ...todos, newTodo]);     
  } 
  
  return (
    <div className='App'>
      <Form handleAddTodo = {handleAddTodo}
       setTodos = {setTodos}
       todos = {todos}/> {/*this is how we transfer data (in this case - function) between the father page ("App") and the sons paged ("Form" / "TodoList") the trasfered data also called "Props"*/}
      <TodoList todos={todos} setTodos = {setTodos}/> {/*we transfered "todos" as a prop to the "TodoList" component.
      in this way "todos"(an array of task objects) can be used in "TodoList" component*/}
    </div>
  );
}

export default App;
