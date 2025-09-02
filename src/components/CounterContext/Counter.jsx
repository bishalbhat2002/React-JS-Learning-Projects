import React, { useContext } from "react";
import Button from "./button";
import { CounterContext } from "./CounterContext";
import Header from "../SmallComponents/Header"
import Explanation from "../SmallComponents/Explanation"

const Counter = () => {
  const {count, setCount} = useContext(CounterContext);

  const explained = " Here, we have created state (count) in separate file and accessed that state (count) in different button components using useContext Hook as we can clearly see - the count can be  incremented or decremented using any button from above............ ";
  return (
    <>
      <Header heading="Counter Using UseContext" />

      {/* Displaying the Count */}
      <h1 className="mx-auto mt-5 lg:mt-6 h-10 lg:h-20 w-90 lg:w-160 text-2xl lg:text-4xl rounded font-bold text-gray-800 bg-red-300 flex justify-center items-center">Count : {count}</h1>

      <Button />
      <Button />
      <Button />
      <Button />

      <Explanation explained={explained} />
    </>
  );
};

export default Counter;

