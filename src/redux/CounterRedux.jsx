import { createStore } from "redux";


// Action
export const incrementAction =(payload)=>{
  return{
    type: 'INCREMENT',
    payload
  }
}
export const decrementAction =(payload)=>{
  return{
    type: 'DECREMENT',
    payload
  }
}
// State
const initialState={
  count: 0,
}

// reducer
export const countReducer = (state = initialState, action)=> {
    switch (action.type) {
      case "INCREMENT":
        return {...state, count: state.count+action.payload};
      case "DECREMENT":
        return {...state, count: state.count-action.payload};
      default:
        return state;
    }
  };

// Store
export const store = createStore(countReducer)
