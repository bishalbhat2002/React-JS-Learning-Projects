import React from "react";
import RColorGenerator from "../RandomColorGenerator/RColorGenerator";
import StarRating from "../Star-rating/StarRating";
import ImageSlider from "../ImageSlider/ImageSlider";
import components from "../ComponentArray/ComponentsArray";
import { Routes, Route, Link } from "react-router";
import { GoArrowUpRight } from "react-icons/go";

const ShowProjects = () => {

  return (
    <>
    {/* Project Show Section */}
      <section className="flex justify-center flex-wrap gap-7 m-8 p-10 rounded-md bg-fuchsia-400 text-gray-700">
        {components.map((component, index) => {
          return <div key={index} className="max-h-50 w-110 p-10 pb-6 rounded bg-white">
               
               <h2 className="text-gray-600 text-2xl font-semibold">{index+1}.&nbsp;{component.projectName}</h2>

               <p className="mt-1 ml-5 text-lg text-gray-500">{component.description}</p>

               <div className="flex justify-end">
               <Link to={component.path} className=" mt-5 px-4 py-1 rounded-lg text-lg bg-blue-400 text-white hover:scale-110 transition-transform duration-200 ease-in-out active:scale-90">
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
