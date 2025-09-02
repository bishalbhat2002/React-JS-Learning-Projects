import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
import Header from "../SmallComponents/Header"
import Explanation from "../SmallComponents/Explanation"

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

     const explained = "This project is about Rating Stars. We can rate the products or service as numbers of stars. The higher the stars, better the service or product........ For Best Experience Open this Project in Laptop as in mobile phone, you cannot view hover effects. ";

  return (
    <>
     <Header heading='Rating Stars' />

    <div className='w-90 lg:w-160 mx-auto mt-5 p-5 flex justify-center gap-3 border border-b-gray-500 rounded-lg shadow-2xs bg-violet-400'>
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

     <Explanation explained={explained}/>
    </>
     )
  
}

export default StarRating
