import {configureStore} from '@reduxjs/toolkit';
//configureStore is a function that is used to create a Redux store. 
//     It takes an object as an argument that contains the reducer and other optional properties.
//reducer is a function that takes the current state and an action 
//  as arguments and returns the new state. It is used to update 
//      the state in the store based on the action dispatched.
import todoReducer from '../features/todo/todoSlice.js';

export const store = configureStore({
    reducer: todoReducer// we can also use combineReducers if we have multiple reducers in our application. 
                        //      It is a function that takes an object as an argument that contains the reducers and returns a single reducer function that can be passed to the store.
});

// Since we know that the store do not reduce every action with store so, 
//      we can use the combineReducers(todoReducer) to combine the reducers and pass it to the store.