import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router';

const Header = () => {
  return (
    <>
     {/* Heading Section */}
      <section className="flex justify-center">
        <Link to='/React-JS-Learning-Projects'>
        <h1 className="inline-block mt-4 p-5 lg:m-6 lg:p-7 rounded-md lg:text-4xl font-extrabold bg-amber-400 text-gray-700 hover:scale-110 transition-transform duration-200 ease-in-out active:scale-90">
          25 Basic Projects while Learning React
        </h1>
        </Link>
      </section>
    </>
  )
}

export default Header