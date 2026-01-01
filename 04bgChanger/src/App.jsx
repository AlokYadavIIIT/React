import {useState } from "react"

function App() {
  const [color, setColor] = useState("#808000")
  return (
    
      <div 
      className="w-full min-h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2">

          <div className="flex flex-wrap justify-center
          gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
            onClick= {() => setColor("red")}
            className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
            style={{backgroundColor:"red"}}
            >Red</button>

            <button 
            onClick={()=>setColor("green")}
            className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
            style={{backgroundColor:"green"}}
            >green</button>

            <button 
            onClick={()=>setColor("blue")}
            className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
            style={{backgroundColor:"blue"}}
            >blue</button>

            <button 
            onClick={()=>setColor("yellow")}
            className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
            style={{backgroundColor:"yellow"}}
            >yellow</button>

            <button
            onClick={()=>setColor("black")}
            className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
            style={{backgroundColor:"black"}}
            >black</button>

            <button
            onClick={()=>setColor("white")}
            className="outline-none px-4 py-1
            rounded-full text-black shadow-lg"
            style={{backgroundColor:"white"}}
            >White</button>
          </div>  
        </div>
      </div>
    
  )
}

export default App
