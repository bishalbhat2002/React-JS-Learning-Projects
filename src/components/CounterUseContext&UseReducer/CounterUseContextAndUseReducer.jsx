
import { useContext, useReducer } from "react";
import { UseReducerContext } from "./UseReducerContext";
import Buttons from "./Buttons";

const CounterUseContextAndUseReducer = () => {
  const {count} = useContext(UseReducerContext);

  return (
    <>
      <div className="w-full bottom-10 flex justify-center">
        <h1 className="my-2 px-10 py-4 rounded-md text-md lg:text-2xl font-extrabold bg-blue-400 text-gray-800 inline-block">
          Counter Using UseReducer & UseContext Hook
        </h1>
      </div>

      {/* Displaying the Count */}
      <h1 className="mx-auto mt-5 lg:mt-6 h-10 lg:h-20 w-100 lg:w-150 text-2xl lg:text-5xl rounded font-bold text-gray-800 bg-red-300 flex justify-center items-center">
        Count : {count}
      </h1>

      <Buttons />
      <Buttons />
      <Buttons />

      <Explanation />
    </>
  );
};

export default CounterUseContextAndUseReducer

function Explanation() {
  return (
    <p className="mx-auto mt-7 mb-5 lg:mt-8 p-5 w-120 lg:w-150 text-md bg-amber-300 rounded text-justify">
      Here, we have used UseReducer Hook & UseContext Hook to make a counter that <b>Increments / Decrements / Resets </b> the count............. <br></br>

      We can use any <b>Button</b> to Perform the Operation.... All the button will perform operation on same state "Count".... <br />

      We have stored all the states made using UseReducer Hook in a separate file, and accessed the states in the main counter file using UseContext Hook...
    </p>
  );
}
