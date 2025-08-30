import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'

const StarRating = ({noOfStars=5}) => {
     const [rating, setRating] = useState(null);
     const [hrating, setHRating] = useState(null);

     const handleStarClick = (rating)=>{
          setRating(rating);
     }

     const handleStarEnter = (index)=>{
          setHRating(index);
     }
     const handleStarLeave = ()=>{
          setHRating(null);
     }

  return (
    <>
    <h1 className='mt-5 text-2xl md:text-4xl font-bold text-center'>Rating Stars</h1>
    <div className='h-20 w-90 mx-auto mt-5 p-5 flex justify-center gap-3 border border-b-gray-500 rounded-lg shadow-2xs bg-violet-400'>
     {
          [...Array(noOfStars)].map((_,index)=>{
               return <FaStar 
               key={index}
               onClick={()=>handleStarClick(index)}
               onMouseEnter={()=>handleStarEnter(index)}
               onMouseLeave={()=>handleStarLeave(index)}
               className={`inline text-3xl hover:scale-150 transition-transform duration-200 ease-in-out text-gray-900 
                    ${(hrating && index <= hrating) ? "text-yellow-400" : ""}
                    ${(rating && index <= rating) ? "text-yellow-400" : ""}`
                    } />
          })
     }
     </div>

    </>
     )
  
}

export default StarRating
