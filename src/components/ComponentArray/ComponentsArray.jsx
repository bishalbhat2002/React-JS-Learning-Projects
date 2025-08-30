import RColorGenerator from "../RandomColorGenerator/RColorGenerator";
import StarRating from "../Star-rating/StarRating";
import ImageSlider from "../ImageSlider/ImageSlider";
import QrCodeGenerator from "../QrCodeGenerator/QrCodeGenerator";
import { PokemonView } from "../PokemonView/PokemonView";
import  Counter  from "../CounterContext/Counter";
import  Cart  from "../CartContext/Cart";

const components = [
  {
    projectName: "Random Color Generator",
    description: "Generates Random Color.",
    path: "/React-JS-Learning-Projects/random-color-generator",
    component: <RColorGenerator />,
  },
  {
    projectName: "Star Rating",
    description: "Allows Rating by clicking the stars.",
    path: "/React-JS-Learning-Projects/star-rating",
    component: <StarRating noOfStars={10}/>,
  },
  {
    projectName: "Image Slider",
    description: "Allows image viewing through Sliding.",
    path: "/React-JS-Learning-Projects/image-slider",
    component: <ImageSlider />,
  }, 
  {
    projectName: "Qr Code Generator",
    description: "Allows you to Generator Qr code.",
    path: "/React-JS-Learning-Projects/Qr-code-generator",
    component: <QrCodeGenerator/>,
  },
  {
    projectName: "View Pokemon",
    description: "Allows you to view Pokemon.",
    path: "/React-JS-Learning-Projects/PokemonView",
    component: <PokemonView />,
  },   
  {
    projectName: "Counter Context",
    description: "Used Context Api (useContext Hook) to show Counting.",
    path: "/React-JS-Learning-Projects/CounterContext",
    component: <Counter />,
  }, 
  {
    projectName: "Cart Context",
    description: "Used Context Api (useContext Hook) to make Add to Cart Feature.",
    path: "/React-JS-Learning-Projects/CartContext",
    component: <Cart />,
  }, 
];

export default components;
