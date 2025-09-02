import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";
const button = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <>
      <section className="mx-auto mt-3 lg:mt-4 h-13 lg:h-24 w-90 lg:w-160 text-sm lg:text-2xl rounded font-semibold text-gray-800 bg-green-200 flex justify-center items-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-amber-400 px-5 py-2 rounded-md hover:scale-110 transition-transform duration-200 ease-in-out active:scale-95 "
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-amber-400 px-5 py-2 rounded-md hover:scale-110 transition-transform duration-200 ease-in-out active:scale-95 "
        >
          Decrement
        </button>
      </section>
    </>
  );
};

export default button;
