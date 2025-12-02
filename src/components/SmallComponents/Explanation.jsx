const Explanation = (props)=>{
  return (
    <p className={`${props.className?props.className:""} mx-auto mt-7 mb-10 lg:mt-8 p-5 w-90 lg:w-160 text-md text-zinc-100 bg-zinc-600 border border-zinc-500 rounded text-justify opacity-90 hover:opacity-100`}>
     <h3 className="text-lg mb-1 font-semibold">Explanation:</h3>
     {props.explained}
     </p>
  );
}

export default Explanation;