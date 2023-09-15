import Header from "./component/Header/Header"
import { Routes,Route } from "react-router-dom"
import About from "./component/About/About"
import Courses from './component/Courses/Courses'
import Events from './component/Events/Events'
import Trainers from './component/Trainers/Trainers'
import Pricing from './component/Pricing/Pricing'
import Home from './component/Home/Home'
import Top from './component/Top/Top'
import Count from "./component/Count/Count"
import Overview from "./component/Overview/Overview"
import Icon from "./component/Icons/Icon"
import CourseDetails from "./component/Course/CourseDetails"
import Trainers1 from "./component/Trainer1/Trainers1"
import Contact1 from "./component/Contact1/Contact1"
// import DropDown from './component/DropDown/DropDown';
const App = () => {
  return (
    <div>
      <Header/>
      <Top/>
     <About/>
     <Count/>
     <Overview/>
     <Icon/>
     <CourseDetails/>
     <Trainers1/>
     <Contact1/>
<Routes>
  
  <Route index element={<Home />} />
  <Route path="/about" element={<About/>}/>
  <Route path="/courses" element={<Courses/>}/>
  <Route path="/trainers" element={<Trainers/>}/>
  <Route path="/events" element={<Events/>}/>
  <Route path="/pricing" element={<Pricing/>}/>

  {/* <Route path="/dropdown" element={<DroDown/>}/> */}

</Routes>
    </div>
  )
}

export default App
