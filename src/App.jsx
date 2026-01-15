import Header from "./component/Header/Header";
import { Routes, Route } from "react-router-dom";
import About from "./component/About/About";
import Courses from "./component/Courses/Courses";
import Events from "./component/Events/Events";
import Trainers from "./component/Trainers/Trainers";
import Pricing from "./component/Pricing/Pricing";
import Home from "./component/Home/Home";
import DropDown from './component/DropDown/DropDown';
import Footer from "./component/Footer/Footer";
import Contacts from "./component/Contacts/Contacts";
import { useEffect, useState } from "react";
import Loader from "./component/Loader";
import Contact1 from "./component/Contact1/Contact1";
import './index.css'

const App = () => {
  const [loader,setLoder]=useState('true')
  // useEffect(()=>{
  //   setLoder(false);
  // },[])

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setLoder(false); // Set loader to false when loading is done
    }, 2000); // 2 seconds (adjust this time as needed)
  }, []);
  return (
    <div className="app-hole">

      {
        loader ?(
<Loader/> ):
(
          <>
<Header />
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dropdown" element={<DropDown/>}/>
        <Route path="/contact1" element={<Contact1/>}/>
      </Routes>
      <Contacts/>
      <Footer/>
      </>
        )}
   
    </div>
  );
};

export default App;
