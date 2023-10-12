import Top from "../Top/Top";
import Count from "../Count/Count";
import Overview from "../Overview/Overview";
import Icon from "../Icons/Icon";
import Trainers from "../Trainers/Trainers";
import Courses from "../Courses/Courses";
import DropDown from "../DropDown/DropDown";
import AboutLink from "../Dummy/AboutLink";

const Home = () => {
  return (
    <div>
      <Top />
      <AboutLink/>
      <Count />
      <Overview />
      <Icon />
      <Courses />
      <Trainers />
      <DropDown/>
    </div>
  );
};
export default Home;
