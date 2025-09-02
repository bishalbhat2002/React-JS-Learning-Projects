import { useContext, useReducer } from "react";
import { UseReducerContext } from "./UseReducerContext";
import Buttons from "./Buttons";
import Header from "../SmallComponents/Header";
import Explanation from "../SmallComponents/Explanation";

const CounterUseContextAndUseReducer = () => {
  const { count } = useContext(UseReducerContext);

  const explained =
    "Here, we have used UseReducer Hook & UseContext Hook to make a counter that Increments, Decrements and Resets  the (Count)............. We can use any Button to Perform the Operation.... All the button will perform operation on same state (Count).... We have the states made using UseReducer Hook in a separate file, and accessed the states in the main counter file using UseContext Hook...";

  return (
    <>
     <Header heading="Counter Using UseReducer & UseContext Hook" />

      {/* Displaying the Count */}
      <h1 className="mx-auto mt-5 lg:mt-6 h-10 lg:h-20 w-90 lg:w-160 text-2xl lg:text-5xl rounded font-bold text-gray-800 bg-red-300 flex justify-center items-center">
        Count : {count}
      </h1>

      <Buttons />
      <Buttons />
      <Buttons />

      <Explanation explained={explained} />
    </>
  );
};

export default CounterUseContextAndUseReducer;
