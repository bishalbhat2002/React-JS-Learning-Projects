import RColorGenerator from "../RandomColorGenerator/RColorGenerator";
import StarRating from "../Star-rating/StarRating";
import ImageSlider from "../ImageSlider/ImageSlider";

const components = [
  {
    projectName: "Random Color Generator",
    description: "Generates Random Color.",
    path: "/random-color-generator",
    component: <RColorGenerator />,
  },
  {
    projectName: "Star Rating",
    description: "Allows Rating by clicking the stars.",
    path: "/star-rating",
    component: <StarRating noOfStars={10}/>,
  },
  {
    projectName: "Image Slider",
    description: "Allows image viewing through Sliding.",
    path: "/image-slider",
    component: <ImageSlider />,
  },
];

export default components;
