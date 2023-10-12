
import "./About.css";
import AboutLink from "../Dummy/AboutLink.jsx";
import Count from "../Count/Count.jsx";
import testimonials4 from '../../assets/testimonials-4.jpg';
import { FaQuoteRight, FaQuoteLeft} from "react-icons/fa"
const About = () => {
  return (
   <div className="aboutlink-top">
<AboutLink/>
<Count/>

<div className="testimonial">
        <div className="testimonial-heading">
            <p>TESTIMONIALS</p>
            <h2>WHAT ARE THEY SAYING</h2>
        </div>

      <div className="container-freelancer">
      <div>
                        <div className="scroll">
                            <div className="freelancer">
                                <img src={testimonials4} alt=""/>
                            </div>
                            <div>
                                <h3>Matt Brandon</h3>
                                 <h4>Freelancer</h4>
                                 <p className="list">
                    <i><FaQuoteLeft/></i>      
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className=""><FaQuoteRight/></i>                   
                </p>
                            </div>
                        </div>
                </div>

                <div>
                        <div className="scroll">
                            <div className="freelancer">
                                <img src={testimonials4} alt=""/>
                            </div>
                            <div>
                                <h3>Matt Brandon</h3>
                                 <h4>Freelancer</h4>
                                 <p className="list">
                    <i><FaQuoteLeft/></i>      
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className=""><FaQuoteRight/></i>                   
                </p>
                            </div>
                        </div>
                </div>
                <div>
                        <div className="scroll">
                            <div className="freelancer">
                                <img src={testimonials4} alt=""/>
                            </div>
                            <div>
                                <h3>Matt Brandon</h3>
                                 <h4>Freelancer</h4>
                                 <p className="list">
                    <i className=""><FaQuoteLeft/></i>      
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className="fa-solid fa-quote-right"><FaQuoteRight/></i>                   
                </p>
                            </div>
                        </div>
                </div>
                <div>
                        <div className="scroll">
                            <div className="freelancer">
                                <img src={testimonials4} alt=""/>
                            </div>
                            <div>
                                <h3>Matt Brandon</h3>
                                 <h4>Freelancer</h4>
                                 <p className="list">
                    <i><FaQuoteLeft/></i>      
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className=""><FaQuoteRight/></i>                   
                </p>
                            </div>
                        </div>
                </div>

      </div>
   
        </div>
    </div>

    

  );
};

export default About;

