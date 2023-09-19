import About from "../About/About";
import Top from "../Top/Top";
import Count from "../Count/Count";
import Overview from "../Overview/Overview";
import Icon from "../Icons/Icon";
// import Courses from "../Courses/Courses";
import Trainers from "../Trainers/Trainers";
// import Contact1 from "../Contact1/Contact1";
// import Contacts from "../Contacts/Contacts";
import Courses from "../Courses/Courses";

const Home = () => {
  return (
    <div>
      <Top />
      <About/>
      <Count />
      <Overview />
      <Icon />
      <Courses />
      <Trainers />
      {/* <Contact1 /> */}
      {/* <Contacts/> */}
    </div>
  );
};

export default Home;
