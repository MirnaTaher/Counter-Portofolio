import { createStore } from "redux";


// Action
export const addTodoAction =(payload)=>{
  return{
    type: 'ADD_TODO',
    payload
  }
}
export const delTodoAction =(payload)=>{
  return{
    type: 'DEL_TODO',
    payload
  }
}
// State
const initialState={
  todos: []
}

// reducer
export const todoReducer = (state = initialState, action)=> {
    switch (action.type) {
      case "ADD_TODO":
        return {...state, todos: [...state.todos, action.payload]};
      case "DEL_TODO":
        return {
          ...state,
          todos: [...state.todos.filter((todos, i) => i !== action.payload)],
        }
      default:
        return state;
    }
  };

// Store
export const store = createStore(todoReducer)
