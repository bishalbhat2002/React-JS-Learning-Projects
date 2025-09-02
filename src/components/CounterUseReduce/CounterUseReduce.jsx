import { useReducer } from "react";
import Header from "../SmallComponents/Header";
import Explanation from "../SmallComponents/Explanation"

const CounterUseReduce = () => {
  const reducer = (state, action) => {
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
  };

  const [count, dispatch] = useReducer(reducer, 0);

  const explained = "Here, we have used UseReducer Hook to make a counter that Increments, Decrements and Reset the count.......";
  return (
    <>
      <Header heading="Counter Using UseReducer Hook" />

      {/* Displaying the Count */}
      <h1 className="mx-auto mt-5 lg:mt-6 p-5 w-90 lg:w-160 text-xl lg:text2xl lg:text-5xl rounded font-bold text-gray-800 bg-red-300 flex justify-center items-center">
        Count : {count}
      </h1>

      <section className="mx-auto mt-3 lg:mt-4 p-4 w-90 lg:w-160 text-xl lg:text-3xl rounded font-semibold text-gray-800 bg-green-200 flex flex-col justify-center items-center gap-3">
        <div className="flex justify-center items-center gap-4">
        <button
          onClick={()=>dispatch({type:"INCREMENT"})}
          className="bg-amber-400 px-4 py-1 text-sm rounded-md hover:scale-110 transition-transform duration-200 ease-in-out active:scale-95 "
          >
          Increment
        </button>

        <button
          onClick={()=>dispatch({type:"DECREMENT"})}
          className="bg-amber-400 px-4 py-1 text-sm rounded-md hover:scale-110 transition-transform duration-200 ease-in-out active:scale-95 "
          >
          Decrement
        </button>
    
        <button
          onClick={()=>dispatch({type:"RESET"})}
          className="bg-amber-400 px-4 py-1 text-sm rounded-md hover:scale-110 transition-transform duration-200 ease-in-out active:scale-95 "
          >
          Reset
        </button>

        </div>
      </section>

      <Explanation explained={explained} />
    </>
  );
};

export default CounterUseReduce;

