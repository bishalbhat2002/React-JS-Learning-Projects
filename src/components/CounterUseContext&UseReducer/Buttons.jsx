import React, { useContext } from 'react'
import { UseReducerContext } from './UseReducerContext'

const Buttons = () => {
const {dispatch} = useContext(UseReducerContext);
  return (
     <section className="mx-auto mt-3 lg:mt-4 p-3 w-90 lg:w-160 text-xl lg:text-3xl rounded font-semibold text-gray-800 bg-green-200  flex flex-col gap-2">
        <div className=" flex justify-center items-center gap-4">
        <button
          onClick={()=>dispatch({type:"INCREMENT"})}
          className="bg-amber-400 px-4 py-1 text-sm rounded-md hover:scale-110 transition-transform duration-200 ease-in-out active:scale-95 "
          >
          Increment
        </button>
        <button
          onClick={()=>dispatch({type:"DECREMENT"})}
          className="bg-amber-400 px-4 py-1 text-sm rounded-md hover:scale-110 transition-transform duration-200 ease-in-out active:scale-95 "
          >
          Decrement
        </button>

        <button
          onClick={()=>dispatch({type:"RESET"})}
          className="bg-amber-400 px-4 py-1 text-sm rounded-md hover:scale-110 transition-transform duration-200 ease-in-out active:scale-95 "
          >
          RESET
        </button>
        </div>
        
      </section>
  )
}

export default Buttons