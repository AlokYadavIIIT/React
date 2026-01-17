import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo:"Todo msg",//Here todo is title/message of todo
            completed:false,
        },
    ],
        addTodo: (todo) => {},
        updatedTodo: (id,todo) => {},
        deleteTodo: (id) => {},
        toggleTodo: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;