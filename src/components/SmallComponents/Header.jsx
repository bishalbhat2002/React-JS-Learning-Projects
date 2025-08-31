import React from "react";

const Header = ({ heading = "Unknown" }) => {
  return (
    <>
      <div className="mx-auto mt-2 mb-5 w-90 px-4 py-4 text-lg font-bold bg-red-300 text-gray-700 rounded lg:w-160 lg:text-2xl lg:mt-4 flex justify-center items-baseline-last">
        {heading}
      </div>
    </>
  );
};

export default Header;
