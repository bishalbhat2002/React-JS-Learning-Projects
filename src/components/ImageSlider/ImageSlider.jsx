
import { useEffect, useState } from "react";
import { FcDislike, FcLeft } from "react-icons/fc";
import { FcRight } from "react-icons/fc";
import { TbCircleFilled } from "react-icons/tb";
import Header from "../SmallComponents/Header"
import Explanation from "../SmallComponents/Explanation"


const ImageSlider = ({page=1, limit=10}) => {
  const [images, setImages] = useState([]);
  const [viewImgId, setViewImgId] = useState(2)
  const [loading, setLoading] = useState(false);
  

  const getImages = async () => {
     try{ 
          setLoading(true);
          const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
          const response = await fetch(url);
          const data = await response.json();
          setImages(data);
     }catch(error){
          console.log(error);
     }finally{
          setLoading(false);
     }
  };

  useEffect(()=>{
       getImages()
  }, []);

  const showLeftImage = ()=>{
     setViewImgId(viewImgId <= 0 ? images.length-1 : viewImgId - 1);
     console.log(viewImgId);
  }
  const showRightImage = ()=>{
     setViewImgId(viewImgId >= images.length-1 ? 0 : viewImgId + 1);
     console.log(viewImgId);
  }

  const showSelectedImg = (index)=>{
     setViewImgId(index);
     console.log(index);
  }

  const explained = "This Project fetches images uses API. And shows the images in the box above. We can change images using the arrows on the sides of images as well as the filled-cirlces on the bottom. The filled-circles can also be used to navigate over images.";

  return (
    <>
      <section className="flex justify-center flex-col">

          <Header heading="Image Slider"/>
        <div className="w-90 h-70 lg:w-160 lg:h-120 mx-auto p-10 pb-6 flex flex-col justify-center bg-blue-300 rounded-lg shadow-xl relative">
          {
               (loading == true) ? <div className="text-2xl animate-bounce flex justify-center">Loading ...</div> :   
               images.map((image, index)=>{
                    return (
                         <>
                              <img src={image.download_url} alt="" key={index}
                              className={`${viewImgId===index?'inline-block':'hidden'} mx-auto h-50 w-80 lg:w-140 lg:h-120 border border-amber-50 rounded-md shadow-xl`}
                              />
                         </>
                    ) 
               })
          }
                    
          <button onClick={showLeftImage}
          className="text-2xl rounded-full bg-white absolute top-1/2 left-2 hover:scale-110 hover:bg-amber-200 active:scale-90 transition-transform duration-150 ease-in-out"
          ><FcLeft /></button>

          <button onClick={showRightImage}
          className="text-2xl rounded-full bg-white absolute top-1/2 right-2 hover:scale-110 hover:bg-amber-200 active:scale-90 transition-transform duration-150 ease-in-out"
          ><FcRight /></button>
        
          <div className="mt-4 flex justify-center items-center gap-2">
               {
                    images &&
                    images.map((image, index)=>{
                         return <TbCircleFilled key={index} onClick={()=>showSelectedImg(index)} title={index}
                         className={`size-4 shadow text-gray-800 hover:scale-120 hover:border-4 border-green-600 rounded-full transition-transform transition-colors duration-200 ease-in-out ${index !== viewImgId ? '' : 'bg-amber-400 size-6 rounded-full p-1'}`}/>
                    })
               }
          </div>

          </div>

          <Explanation explained={explained} />

      </section>
    </>
  );
};

export default ImageSlider;
