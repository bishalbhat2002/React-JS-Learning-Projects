import React from "react";
import { Link } from "react-router";
import { FaBackward } from "react-icons/fa";

const Backicon = () => {
  return (
    <>
    <Link to={'/React-JS-Learning-Projects'}>
      <button title="Back to Projects"
      className="px-4 py-4 rounded-full text-sm lg:text-xl font-bold text-cyan-50 bg-gray-700 text- fixed top-92/100 sm:top-3 left-3  shadow-2xl hover:scale-115 active:scale-95 transition-transform duration-200 ease-in-out opacity-70 hover:opacity-100 border-2 border-orange-400 not-hover:animate-pulse"><FaBackward />
      </button>
      </Link>
    </>
  );
};

export default Backicon;
