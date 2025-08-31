import RColorGenerator from "../RandomColorGenerator/RColorGenerator";
import StarRating from "../Star-rating/StarRating";
import ImageSlider from "../ImageSlider/ImageSlider";
import QrCodeGenerator from "../QrCodeGenerator/QrCodeGenerator";
import { PokemonView } from "../PokemonView/PokemonView";
import  Counter  from "../CounterContext/Counter";
import  Cart  from "../CartContext/Cart";
import CounterUseReduce from "../CounterUseReduce/CounterUseReduce";
import CounterUseContextAndUseReducer from "../CounterUseContext&UseReducer/CounterUseContextAndUseReducer";
import DerivedState from "../DerivedState/DerivedState";

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
  {
    projectName: "Counter - Use Reducer",
    description: "Used UseReducer Hook to make Counter [Increment / Decrement].",
    path: "/React-JS-Learning-Projects/CounterUseReduce",
    component: <CounterUseReduce/>,
  },
   {
    projectName: "Counter - UseReducer & UseContext Hook",
    description: "Used UseReducer & UseContext Hook to make Counter [Increment / Decrement].",
    path: "/React-JS-Learning-Projects/CounterUseContext&UseReducer",
    component: <CounterUseContextAndUseReducer />,
  },
    {
    projectName: "Derived State",
    description: "Used Variables to store states data... - Derived State",
    path: "/React-JS-Learning-Projects/DerivedState",
    component: <DerivedState/>
  }, 
];

export default components;
