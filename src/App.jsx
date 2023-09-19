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
const App = () => {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route path="/dropdown" element={<DropDown/>}/>
       <Route path="/contacts" element={ <Contacts/>}/>
      </Routes>
      <Contacts/>
      <Footer/>
    </div>
  );
};

export default App;
