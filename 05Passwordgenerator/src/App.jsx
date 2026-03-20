import { useState, useCallback, useEffect, useRef } from 'react'
// useState hook is used to manage the state of the component, such as the length of the password, whether numbers and characters are allowed, and the generated password itself.
// useEffect hook is used to generate a new password whenever the length, numberAllowed, or charAllowed state changes. It also ensures that the password is generated when the component mounts.
// useCallback hook is used to memoize the function and prevent unnecessary re-renders;
// useRef hook is used to create a reference to the input element, which allows us to access its value and select it when copying the password to the clipboard.
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook is used to create a reference to the input element, which allows us to access its value and select it when copying the password to the clipboard.
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])// it will only re-create the function if any of the dependencies (length, numberAllowed, charAllowed, setPassword) change.
//   ^ we use only setPassword as dependency rather than password because we are not using the current value of password in the function, we are only updating it. If we include password as a dependency, it would cause the function to be re-created every time the password state changes, which is unnecessary and could lead to performance issues.
  

const copyPasswordToClipboard = useCallback(() => {// Select the password text and copy it to the clipboard
    passwordRef.current?.select();// The optional chaining operator (?.) is used to ensure that the select method is only called if passwordRef.current is not null or undefined. This prevents potential errors if the reference has not been assigned to an element yet.
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    
    <div className=" flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>    
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
          />
        <label>Length: {length}</label>
      </div>

      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

    </div>
    
</div>
    
  )
}

export default App