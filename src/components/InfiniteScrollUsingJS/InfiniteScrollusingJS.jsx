
import Header from "../SmallComponents/Header";
import Explanation from "../SmallComponents/Explanation";
import { useState } from "react";

const InfiniteScrollusingJS = () => {
  const explained =
    "This component demonstrates the infinite Scrolling Feature of Social media Website, Where content is dynamically fetched form backend on the basis of Scrolll.... Note: Don't scroll too much, as this component only contains logic for infinte scroll (not virtualization), so IF you scroll too much, then a large amount of eleemnts are added to the dom, and the browser will crash😂😂😂.... I am learning Infinite scroll in this component, so No virutalization here. ";


const [products, setProducts] = useState([... new Array(40)]);
const [loading, setLoading] = useState(false)
const [showExplanation, setShowExplanation] = useState(false)

const Base = 20;

function loadMore(){
     setLoading(true);
  setTimeout(()=>{
     setProducts(prev=>[... prev, ... new Array(20)]);
  }, 1000) 
  setLoading(false);  
}


function handleScroll(event){
     const scrollTop = event.target.scrollTop;
     const clientHeight = event.target.clientHeight;
     const scrollHeight = event.target.scrollHeight;

     const remainingHeight = scrollHeight - clientHeight - scrollTop;

     if(remainingHeight <= Base){
          loadMore()
     }
     
}


  return (
    <>
      <Header heading="Infinite Scroll Using Javascript" />

      <section className="mx-auto mt-3 h-130 lg:mt-4 p-4 w-90 lg:w-160 text-xl lg:text-3xl rounded font-semibold text-gray-800 bg-green-200 flex flex-col justify-center items-center gap-3">
        <div onScroll={handleScroll} className="flex justify-center items-center gap-1 w-full overflow-auto flex-col">

               {
                    products.map((_, index)=>(
                         <div key={index} className="w-full block bg-red-400 border-2 px-2 rounded">Product: {index}</div>
                    ))
               }
                    {
                         setLoading && <p className="text-center">Loading...</p>
                    }
        </div>
      </section>
     <div className="w-full flex justify-center my-2"><button onClick={()=>(setShowExplanation(!showExplanation))} className="bg-blue-500 font-medium text-white px-3 py-1 rounded-md hover:scale-102 active:scale-99 ease-in-out duration-200">{!showExplanation?"Show":"Hide"} Explation</button></div>
      {showExplanation && <Explanation explained={explained} />}
    </>
  );
};

export default InfiniteScrollusingJS;
