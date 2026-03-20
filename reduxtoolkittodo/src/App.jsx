import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AddTodo from '../components/AddTodo.jsx';
import Todos from '../components/Todos.jsx';
//Redux Toolkit is a library that provides a set of tools 
//    and utilities to help us write Redux logic in a more 
//      efficient and concise way. 

// React-Redux is a library that provides bindings for 
//  React to work with Redux. It allows us to connect our 
//    React components to the Redux store and dispatch 
//      actions to update the state in the store.

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
