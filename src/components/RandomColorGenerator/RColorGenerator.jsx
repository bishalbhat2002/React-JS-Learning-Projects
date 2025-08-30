import React from "react";
import { useState } from "react";
import { IoCopy } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

const RColorGenerator = () => {
  const [color, setColor] = useState("gray");
  const [type, setType] = useState("RGB");

  const handleTypeButtonClick = (type) => {
    setType(type);
  };

  const generateRandomColor = () => {
    const symbols = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];

    if (type === "Hex") {
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * symbols.length)];
      }
      console.log(color);
      setColor(color);
    } else {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let color = `rgb(${r}, ${g}, ${b})`;
      console.log(color);
      setColor(color);
    }
  };

  const generateColor = () => {
    generateRandomColor();
  };

  const copyColor = () => {
    navigator.clipboard.writeText(color);
    notify();
  };

  const notify = () => toast.success("Color Copied Successfully...");

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          background: color,
          padding: "1px",
        }}
      >
        <div className="w-full bottom-10 flex justify-center">
          <h1 className="mt-2 px-10 py-5 rounded-md sm:text-lg xl:text-3xl font-extrabold bg-amber-300 text-gray-900 inline-block">
            Random Color Generator
          </h1>
        </div>

        <div className="container h-15 lg:w-190 lg:h-20 flex justify-center gap-3 lg:gap-6 items-center mx-auto mt-5 px-5 py-5 bg-green-200 border border-gray-400 rounded-lg ">
          <button
            className="h-9 lg:h-13 px-5 lg:px-10 rounded font-bold sm:text-sm xl:text-3xl bg-violet-600 text-white shadow-xl hover:scale-110 transition-transform duration-200 ease-in active:scale-95"
            onClick={() => handleTypeButtonClick("RGB")}
          >
            RGB
          </button>

          <button
            className="h-9 lg:h-13 px-5 lg:px-10 rounded font-bold sm:text-sm xl:text-3xl bg-violet-600 text-white shadow-xl hover:scale-110 transition-transform duration-200 ease-in active:scale-95"
            onClick={() => handleTypeButtonClick("Hex")}
          >
            Hex Color
          </button>

          <button
            className="h-9 lg:h-13 px-5 lg:px-10  rounded font-bold sm:text-sm xl:text-3xl bg-violet-600 text-white shadow-xl hover:scale-110 transition-transform duration-200 ease-in active:scale-95"
            onClick={() => generateColor()}
          >
            Generate Color
          </button>
        </div>

        <div className="container h-15 lg:w-190  flex justify-center  gap-8 items-center mx-auto mt-5 px-15 bg-gray-300 border border-gray-600 rounded-lg ">
          <span className="md:text-2xl font-bold text-neutral-800">
            Color Type : {type}{" "}
          </span>
          <span className="md:text-2xl font-bold text-neutral-800">
            Color Value : {color}{" "}
            <IoCopy
              className="inline ml-5 hover:scale-120 transition-transform duration-200 ease-in-out active:scale-90"
              onClick={copyColor}
            />
          </span>
        </div>

        <Toaster />
      </div>
    </>
  );
};

export default RColorGenerator;
