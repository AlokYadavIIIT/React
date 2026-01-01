import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'
function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    name: "Alok",
    age: 21,
  }
  let newArr = [1,2,3,4,5];
  return (
    <>
       <h1 className='bg-green-400 text-black p-4 rounded-xl'>
         tailwind test</h1>
    <Card username="chai aur code" btntxt="Explore"/> 
    <Card username="Just ME" btntxt="Explore also"/>
    </>
  )
}

export default App
