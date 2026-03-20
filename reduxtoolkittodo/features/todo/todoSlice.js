import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id:1, text: "Hello World"}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {// reducers is an object that contains the reducer functions for the actions that we want to perform on the state.
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload // payload is the text containing object of the todo item
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            // filter out the todo item with the id that matches the payload
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) // payload is the id of the todo item to be removed
        },
        updateTodo:(state,action) => {
            const {id, text} = action.payload; // payload is an object containing the id and the new text of the todo item to be updated
            const todo = state.todos.find((todo) => todo.id === id); // find the todo item with the id that matches the payload
            if(todo) {
                todo.text = text; // update the text of the todo item
            }
        }
    }
})
// export the actions to be used in the components
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;// export the reducer to be used in the store.js file