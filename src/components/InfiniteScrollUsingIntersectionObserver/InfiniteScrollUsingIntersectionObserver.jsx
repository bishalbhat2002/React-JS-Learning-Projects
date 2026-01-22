import Header from "../SmallComponents/Header";
import Explanation from "../SmallComponents/Explanation";
import { useState, useEffect, useRef } from "react";

const InfiniteScrollUsingIntersectionObserver = () => {
  const explained =
    "This component demonstrates the infinite Scrolling Feature of Social media Website, Where content is dynamically fetched form backend on the basis of Scroll using IntersectionObserver.... Note: Don't scroll too much, as this component only contains logic for infinte scroll (not virtualization), so IF you scroll too much, then a large amount of eleemnts are added to the dom, and the browser will crash😂😂😂.... I am learning Infinite scroll in this component, so No virutalization here. ";

  const [products, setProducts] = useState([...new Array(40)]);
  const [loading, setLoading] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  function loadMore() {
    setTimeout(() => {
      setProducts((prev) => [...prev, ...new Array(20)]);
    }, 1000);
  }
  const loadRef = useRef();

  useEffect(()=>{
     // Return if loadRef doesnt exist
     if(!loadRef.current) return;
     
     const observer = new IntersectionObserver((entries)=>(
          entries.map(entry=>{
               if(entry.isIntersecting){
                    loadMore();
               }
          })
     ), {
          threshold:0.6
     })

     observer.observe(loadRef.current);

     // Clean up the observer.
     return ()=>{
          observer.disconnect();
     }
  }, [])


  return (
    <>
      <Header className="text-sm" heading="Infinite Scroll Using IntersectionObserver" />

      <section className="mx-auto mt-3 lg:mt-4 p-4 w-90 lg:w-160 text-xl lg:text-3xl rounded font-semibold text-gray-800 bg-green-200 gap-3">
        <div
        id="container"
         className="flex flex-col h-130 overflow-auto gap-1 w-full"
        >
          {products.map((_, index) => (
            <div
              key={index}
              className="w-full block bg-red-400 border-2 px-2 rounded"
            >
              Product: {index}
            </div>
          ))}
          {!loading && <p ref={loadRef} className="text-center animate-pulse">Loading...</p>}
        </div>
      </section>
      <div className="w-full flex justify-center my-2">
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          className="bg-blue-500 font-medium text-white px-3 py-1 rounded-md hover:scale-102 active:scale-99 ease-in-out duration-200"
        >
          {!showExplanation ? "Show" : "Hide"} Explation
        </button>
      </div>
      {showExplanation && <Explanation explained={explained} />}
    </>
  );
};

export default InfiniteScrollUsingIntersectionObserver;
