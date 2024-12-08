import React, { createContext, useContext } from 'react'

export const todoContext = createContext({
    todos: [{
        id: 1,
        todo: "msg",
        completed: 'false'
    }],

    addTodo: (todo) => { },
    updateTodo: (id,todo) => { },
    removeTodo: (id) => { },
    todoStatus: (id) => { }

}

);
export const todoProvider=todoContext.Provider

const useTodo = () => {
    return useContext(todoContext);
  };
  
  export default useTodo;
  