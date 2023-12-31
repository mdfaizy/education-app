import { data } from "./data.jsx";
import aboutImg from "../../assets/about .jpg";
import { HiMiniCheck } from "react-icons/hi2";
// import styles from './AboutLink.module.css';
import './AboutLink.css';
const AboutLink = () => {
  return (
    <div className="about_main_section">
       <div className="main_about">
      <div className="about">
        <div className="text">
          {data.map((item, index) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <h4 className="hypertext">{item.h4}</h4>
              <p className="text_icon">
                {/* <span> */}
                {(index == 2 || index == 3 || index == 4) && (
                  <HiMiniCheck className="about_icon" />
                )}
                {item.paragraph}

              </p>
              <p> {item.paragraph1}</p>
            </div>
          ))}
        </div>

        <div className="image_right">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutLink
