import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Hooks : it is used to manage the state in functional component
//            it is used when we need to change the value dynamically in many places at a time;

function App() {

    // let counter = 15
    let [counter, setCounter] = useState(15)// useState is a hook which returns an array of two values
    // first value is the current state value
    // second value is a function to update the state value

    const addValue = () => {
      if(counter >=20){
        alert("counter value cannot be more than 20")
        return
      }
      //counter = counter + 1
      setCounter(counter +1)
    }
    const removeValue = () =>{
      if(counter <=0){
        alert("counter value cannot be less than 0")
        return}
      //counter = counter - 1
      setCounter(counter -1)
    }
  return (
    <>
         <h1>chai aur react</h1>
         <h3>counter value: {counter}</h3>

         <button
         onClick={addValue}
         >Add value {counter}</button>
         <br />
         <button
         onClick={removeValue}>Remove value {counter}</button>
         <p>flutter : {counter}</p>
      </>
  )
}

export default App
