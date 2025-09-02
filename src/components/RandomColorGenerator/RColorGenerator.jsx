import React from "react";
import { useState } from "react";
import { IoCopy } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import Header from "../SmallComponents/Header";
import Explanation from "../SmallComponents/Explanation"

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
    toast.success("Color Copied Successfully...");
  };

  const explained="This is Random Color Generator. We can generate RGB or Hex Color randomly here. We can also copy the color code using the copy icon on the right side of color value. ..............The generated color is displayed in the background...... ";

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
        <Header heading='Random Color Generator'/>

        <div className="container w-90 lg:w-160 flex justify-center gap-3 lg:gap-6 items-center mx-auto mt-5 p-5 bg-green-200 border border-gray-400 rounded-lg ">
          <button
            className="px-5 lg:px-10 py-2 rounded font-bold text-[12px] xl:text-xl bg-violet-600 text-white shadow-xl hover:scale-110 transition-transform duration-200 ease-in active:scale-95"
            onClick={() => handleTypeButtonClick("RGB")}
          >
            RGB
          </button>

          <button
            className="px-5 lg:px-10 py-2 rounded font-bold text-[12px] xl:text-xl bg-violet-600 text-white shadow-xl hover:scale-110 transition-transform duration-200 ease-in active:scale-95"
            onClick={() => handleTypeButtonClick("Hex")}
          >
            Hex Color
          </button>

          <button
            className="px-5 lg:px-10 py-2 rounded font-bold text-[12px] xl:text-xl bg-violet-600 text-white shadow-xl hover:scale-110 transition-transform duration-200 ease-in active:scale-95"
            onClick={() => generateColor()}
          >
            Generate Color
          </button>
        </div>

        <div className="container w-90 lg:w-160  flex flex-col lg:flex-row lg:justify-center  gap-2 lg:gap-7 items-center mx-auto mt-5 p-5  bg-gray-300 border border-gray-600 rounded-lg ">
          <span className="lg:text-xl text-sm font-bold text-neutral-800">
            Color Type : {type}{" "}
          </span>
          <span className="md:text-xl text-sm font-bold text-neutral-800">
            Color Value : {color}{" "}
            <IoCopy
              className="inline ml-5 hover:scale-120 transition-transform duration-200 ease-in-out active:scale-90"
              onClick={copyColor}
            />
          </span>
        </div>

        <Toaster />
      </div>

      <Explanation explained={explained} className="absolute top-5/10 left-5/10 -translate-5/10"/>
    </>
  );
};

export default RColorGenerator;
