const Explanation = ({explained})=>{
  return (
    <p className="mx-auto mt-7 mb-10 lg:mt-8 p-5 w-100 lg:w-160 text-md text-gray-700 bg-gray-200 rounded text-justify opacity-90 hover:opacity-100">
     <h3 className="text-lg mb-1 font-semibold">Explanation:</h3>
     {explained}
     </p>
  );
}

export default Explanation;