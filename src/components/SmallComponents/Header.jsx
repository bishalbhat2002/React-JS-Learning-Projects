import React from "react";

const Header = ({ heading = "Unknown", className }) => {
  return (
    <>
      <div className={`mx-auto mt-2 mb-5 w-90 px-4 py-4 text-lg font-bold bg-zinc-800 border border-zinc-600 text-white rounded lg:w-160 lg:text-2xl lg:mt-4 flex justify-center items-baseline-last ${className}`}>
        {heading}
      </div>
    </>
  );
};

export default Header;
