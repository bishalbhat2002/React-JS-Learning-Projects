import { useState } from "react";
import data from "./data.js";
import { RiExpandVerticalLine } from "react-icons/ri";
import Header from "../SmallComponents/Header";
import Explanation from "../SmallComponents/Explanation";

const FAQ = () => {
  const [answer, setAnswer] = useState(null);

  const handleButtonClick = (e, id) => {
    e.preventDefault();
    answer !== id ? setAnswer(id) : setAnswer(null);
  };

  const explained = "This project simulates, 'Frequently Asked Questions Behaviour' From Many websites. Here, the use can view frequenlty asked questions about anything and their answers as well.";

  return (
    <>
      <Header heading="Frequently Asked Questions" />

      <section className="w-90 lg:w-160 mx-auto p-5 bg-green-300 flex flex-col gap-3 rounded">
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <div className="w-full p-4 bg-red-300 rounded flex">
                <div className="w-9/10">
                <div className="flex">
                  <div className="inline-block font-bold mr-1">
                    {item.id}. 
                  </div>
                  <div className="font-bold leading-5 mt-0.5">{item.question}</div>
                </div>

                  {answer && answer === item.id ? (
                    <div className="ml-5 leading-5 mt-0.5">{item.answer}</div>
                  ) : null}
                </div>

                <div className="w-1/10 flex justify-end items-start">
                  <button
                    onClick={(e) => handleButtonClick(e, item.id)}
                    className="float-end p-1 rounded-full text-lg bg-blue-400 hover:scale-110 transition-transform duration-200 ease-in-out active:scale-95"
                  >
                    <RiExpandVerticalLine />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="container">
            <h1>No Questions Found</h1>
          </div>
        )}
      </section>

      <Explanation explained={explained} />
    </>
  );
};

export default FAQ;
