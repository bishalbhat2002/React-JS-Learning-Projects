import React, { useContext } from "react";
import Button from "./button";
import { CounterContext } from "./CounterContext";

const Counter = () => {
  const {count, setCount} = useContext(CounterContext);

  return (
    <>
      <div className="w-full bottom-10 flex justify-center">
        <h1 className="my-2 px-10 py-4 rounded-md text-lg xl:text-2xl font-extrabold bg-blue-400 text-gray-800 inline-block">
          Counter Using UseContext
        </h1>
      </div>

      {/* Displaying the Count */}
      <h1 className="mx-auto mt-5 lg:mt-6 h-10 lg:h-20 w-100 lg:w-150 text-2xl lg:text-5xl rounded font-bold text-gray-800 bg-red-300 flex justify-center items-center">Count : {count}</h1>

      <Button />
      <Button />
      <Button />
      <Button />

      <Explanation />
    </>
  );
};

export default Counter;


function Explanation(){
  return(
    <p className="mx-auto mt-7 lg:mt-8 p-5 w-120 lg:w-150 text-md bg-amber-300 rounded text-justify">
      Here, we have created state (count) in separate file and accessed that state (count) in different components using <b>useContext Hook</b>.
      ............. <br></br>
      You can clearly see, the count can be <b>incremented or decremented</b> using any button from above............   
    </p>
  )
}