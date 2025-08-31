import React from "react";
import RColorGenerator from "../RandomColorGenerator/RColorGenerator";
import StarRating from "../Star-rating/StarRating";
import ImageSlider from "../ImageSlider/ImageSlider";
import components from "../ComponentArray/ComponentsArray";
import { Routes, Route, Link } from "react-router";
import { GoArrowUpRight } from "react-icons/go";
import Header from "./Header";

const ShowProjects = () => {

  return (
    <>

      <Header />
      
    {/* Project Show Section */}
      <section className="container mx-auto flex justify-center flex-wrap gap-3 md:gap-7 mt-4 p-3 md:p-10 rounded-md bg-blue-200 text-gray-700">
        {components.map((component, index) => {
          return <div key={index} className="max-h-50 w-100 p-5 md:p-10 pb-3 md:pb-6 rounded bg-white">
               
               <h2 className="text-gray-600 text-lg md:text-2xl font-semibold">{index+1}.&nbsp;{component.projectName}</h2>

               <p className="mt-1 ml-5 text-md md:text-lg text-gray-500">{component.description}</p>

               <div className="flex justify-end">
               <Link to={component.path} className="mt-2 md:mt-5 px-2 md:px-4 py-1 rounded-lg text;md md:text-lg bg-blue-400 text-white hover:scale-110 transition-transform duration-200 ease-in-out active:scale-90">
                         View Project <GoArrowUpRight className="inline-block" /> 
               </Link>
               </div>
          </div>;
        })}
      </section>
    </>
  );
};

export default ShowProjects;
