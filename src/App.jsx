import Header from "./components/Intro/Header";
import ShowProjects from "./components/Intro/ShowProjects";
import components from "./components/ComponentArray/ComponentsArray";
import StarRating from "./components/Star-rating/StarRating";
import { Routes, Route } from "react-router";

const App = ()=>{

  return (
    <>
      <Header />
      
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