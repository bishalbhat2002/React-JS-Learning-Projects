import Header from "./components/HomePage/HomeHeader";
import ShowProjects from "./components/HomePage/ShowProjects";
import components from "./components/ProjectsArrayComponent/ComponentsArray";
import StarRating from "./components/Star-rating/StarRating";
import { Routes, Route } from "react-router";
import Backicon from "./components/HomePage/Backicon";
import { Toaster } from "react-hot-toast";

const App = ()=>{

  return (
    <>
      <Toaster />      
      <Backicon />
      <Routes>
        <Route path="/React-JS-Learning-Projects/" element={<ShowProjects />}/>
        {
          components.map((Component)=>{
            return <Route path={Component.path} element={Component.component}/>
          })
        }
      </Routes>
        
    </>
  )
}

export default App;