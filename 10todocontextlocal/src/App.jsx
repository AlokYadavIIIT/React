import { useState, useEffect } from 'react'
// import { useTodo } from "../context/TodoContext.js";

import './App.css'
import { TodoProvider } from './context/TodoContext.js';
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from './components/TodoItem.jsx';

function App() {
  // const [count, setCount] = useState(0)//state variable: count initialized to 0 // setCount is function to update count // useState is react hook
  const [todos, setTodos] = useState([]);//todos state variable initialized to empty array
  
  const addTodo = (todo) => {
    //function to add a new todo
    setTodos((prev) => [{id:Date.now(),...todo},...prev])//updating todos state, here prev is previous state of todos
      // new todo object is created with unique id using Date.now() and spread operator is used to add other properties of todo
  
  }

  const updatedTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id ===
      id ? todo : prevTodo)))//updating a todo by mapping through previous todos and replacing the one with matching id
     
    }

  const deleteTodo = (id) => {
    // function to delete a todo which is matched by input id.
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))//deleting a todo by filtering out the one with matching id
  }

  const toggleTodo = (id) => {
    //function to toggle the completed status of a todo
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))//toggling completed status by mapping through todos and updating the matched one
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) //retrieving todos from local storage
    
    if(todos && todos.length > 0){
      setTodos(todos)//if todos exist in local storage, update the todos state
    }
  },[])//empty dependency array means this effect runs only once when component mounts
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))//storing todos in local storage whenever todos state changes
  },[todos])//this effect runs whenever todos state changes to update local storage
  
  
  return (
    //wrapping the app with TodoProvider to provide context to all components inside
    <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className="w-full"
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
