import { data } from "./data.jsx";
import aboutImg from "../../assets/about .jpg";
import { HiMiniCheck } from "react-icons/hi2";
import "./About.css";
import Count from "../Count/Count.jsx";
const About = () => {
  return (
   <>
    <div className="main-about">
      <div className="about">
        <div className="text">
          {data.map((item, index) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <h4 className="hypertext">{item.h4}</h4>
              <p className="text-icon">
                {/* <span> */}
                {(index == 2 || index == 3 || index == 4) && (
                  <HiMiniCheck className="about-icon" />
                )}
                {item.paragraph}
                
              </p>
              <p> {item.paragraph1}</p>
            </div>
          ))}
        </div>

        <div className="image-right">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
    <Count/>
   </>
  );
};

export default About;
