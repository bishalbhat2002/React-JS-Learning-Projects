import { useReducer } from "react";
import Header from "../SmallComponents/Header";

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

  return (
    <>
      <Header heading="Counter Using UseReducer Hook" />

      {/* Displaying the Count */}
      <h1 className="mx-auto mt-5 lg:mt-6 w-100 lg:w-150 text-2xl lg:text-5xl rounded font-bold text-gray-800 bg-red-300 flex justify-center items-center">
        Count : {count}
      </h1>

      <section className="mx-auto mt-3 lg:mt-4 p-4 w-120 lg:w-150 text-xl lg:text-3xl rounded font-semibold text-gray-800 bg-green-200 flex flex-col justify-center items-center gap-3">
        <div className="flex justify-center items-center gap-4">
        <button
          onClick={()=>dispatch({type:"INCREMENT"})}
          className="bg-amber-400 px-8 py-2 rounded-md hover:scale-110 transition-transform duration-200 ease-in-out active:scale-95 "
          >
          Increment
        </button>

        <button
          onClick={()=>dispatch({type:"DECREMENT"})}
          className="bg-amber-400 px-8 py-2 rounded-md hover:scale-110 transition-transform duration-200 ease-in-out active:scale-95 "
          >
          Decrement
        </button>
        </div>
          <div className="flex justify-center items-center gap-4">
        <button
          onClick={()=>dispatch({type:"RESET"})}
          className="bg-amber-400 px-8 py-2 rounded-md hover:scale-110 transition-transform duration-200 ease-in-out active:scale-95 "
          >
          Reset
        </button>

        </div>
      </section>

      <Explanation />
    </>
  );
};

export default CounterUseReduce;

function Explanation() {
  return (
    <p className="mx-auto mt-7 lg:mt-8 p-5 w-120 lg:w-150 text-md bg-amber-300 rounded text-justify">
      Here, we have used UseReducer Hook to make a counter that <b>Increments / Decrements </b> the count.............
    </p>
  );
}
