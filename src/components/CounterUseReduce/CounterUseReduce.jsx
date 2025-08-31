import { useReducer } from "react";

const CounterUseReduce = () => {
  const reducer = (state, action) => {
     // console.log(state, action.type);
     if(action.type==="INCREMENT")
          return state + 1
     if(action.type==="DECREMENT")
          return state - 1
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div className="w-full bottom-10 flex justify-center">
        <h1 className="my-2 px-10 py-4 rounded-md text-lg xl:text-2xl font-extrabold bg-blue-400 text-gray-800 inline-block">
          Counter Using UseReducer Hook
        </h1>
      </div>

      {/* Displaying the Count */}
      <h1 className="mx-auto mt-5 lg:mt-6 h-10 lg:h-20 w-100 lg:w-150 text-2xl lg:text-5xl rounded font-bold text-gray-800 bg-red-300 flex justify-center items-center">
        Count : {count}
      </h1>

      <section className="mx-auto mt-3 lg:mt-4 h-15 lg:h-24 w-120 lg:w-150 text-xl lg:text-3xl rounded font-semibold text-gray-800 bg-green-200 flex justify-center items-center gap-4">
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
