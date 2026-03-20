import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {// it will take the input from the user and add it to the list of todos by Dispatching the addTodo action to the store
   // Dispatch(value bhejni h) is a function that uses the reducer to update or change into the store

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();// prevent the default behavior of the form submission
        dispatch(addTodo(input)); // dispatch the addTodo action to the store with the input as the payload
        setInput(''); // clear the input field after adding the todo item
    }
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 
        focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 
        text-base outline-none text-gray-100 py-1 px-3 leading-8 
        transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
    )
}

export default AddTodo