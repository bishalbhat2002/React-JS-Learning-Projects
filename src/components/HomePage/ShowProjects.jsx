import React from "react";
import RColorGenerator from "../RandomColorGenerator/RColorGenerator";
import StarRating from "../Star-rating/StarRating";
import ImageSlider from "../ImageSlider/ImageSlider";
import components from "../ProjectsArrayComponent/ComponentsArray";
import { Routes, Route, Link } from "react-router";
import { GoArrowUpRight } from "react-icons/go";
import Header from "./HomeHeader";


const ShowProjects = () => {
  return (
    <>
      <Header />

      {/* Project Show Section */}
      <section className="w-90 lg:w-9/10  mx-auto mb-5 flex justify-center flex-wrap gap-3 lg:gap-6 mt-4 p-5 lg:p-7 rounded-md bg-zinc-600 text-gray-700 border border-zinc-500">
        {components.map((component, index) => {
          return (
            <div
              key={index}
              className="max-h-50 w-100 p-5 pb-3 md:p-5 rounded bg-zinc-100"
            >
              <div className="flex">
              <h1 className="text-gray-600 text-lg md:text-2xl font-semibold leading-6">
                {index + 1}.
              </h1>
              <h2 className="text-gray-600 text-lg md:text-xl font-semibold ml-2 leading-6">
                {component.projectName}
              </h2>
              </div>

              <p className={`mt-1 ${index+1 > 9 ? "ml-7 md:ml-9" : "ml-5 md:ml-6"}  text-md md:text-md text-gray-500 line-clamp-3`}>
                {component.description}
              </p>

              <div className="flex justify-end">
                <Link
                  to={component.path}
                  className="mt-2 md:mt-4 px-2 md:px-4 py-1 rounded-lg text;md md:text-lg bg-zinc-600 text-white hover:scale-110 transition-transform duration-200 ease-in-out active:scale-90 opacity-80 hover:opacity-100"
                >
                  View Project <GoArrowUpRight className="inline-block" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>
      <div className="text-center mb-5">
        <a href="https://github.com/bishalbhat2002/React-JS-Learning-Projects" target="_blank"
        className="inline-block px-5 py-2 rounded-md font-semibold text-gray-100 bg-zinc-800 hover:scale-110 transition-transform duration-200 ease-in-out">
          View-Code
        </a>
      </div>
    </>
  );
};

export default ShowProjects;
