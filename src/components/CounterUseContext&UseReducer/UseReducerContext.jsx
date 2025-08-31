import { createContext, useReducer } from "react";

export const UseReducerContext = createContext(null);

const reducer = (state, action)=>{
     switch(action.type){
          case "INCREMENT": 
          return state + 1;
          case "DECREMENT":
               return state - 1;
          case "RESET":
               return 0;
          default:
               return state;
     }
}

export const UseReducerProvider = (props)=>{
     const [count, dispatch] = useReducer(reducer, 0);
     return(
          <UseReducerContext.Provider value={{count, dispatch}} >
               {props.children}
          </UseReducerContext.Provider>
     )
}
