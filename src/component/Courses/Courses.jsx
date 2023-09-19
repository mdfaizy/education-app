
import courseimg1 from '../../assets/course-1.jpg'
import courseimg2 from '../../assets/trainer-1 (1).jpg'
import { BiUser } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import course21 from '../../assets/course-2.jpg';
import trainer2 from '../../assets/trainer-2 (1).jpg';
import course3 from '../../assets/course-3.jpg';
import trainer31 from '../../assets/trainer-1 (1).jpg';
import './Courses.css'
const Courses = () => {
  return (
    <div>
   {/* <div className="events-top-text">
     <h2>Courses</h2>
      <p>
        Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia
        id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam
        aperiam consequatur laboriosam nemo harum praesentium.
      </p>
     </div> */}
<div className="fee1" id="Courses">
                <div className="dot">
                    <div className="span">
                        <h2>COURSES<span></span></h2>
                        <span className="under"></span>
                    </div>
                    <h1>POPULAR COURSES</h1>
                </div>
                {/* <!--  --> */}
                <div className="fee">
                    <div className="corses_name">
                        <div className="cource-img">
                            <img src={courseimg1} alt="" />
                        </div>
                        <div className="corses_review_details">
                            <div className="corse_review">
                                <h4> Web Development</h4>
                                <p>$169</p>
                            </div>
                            <div className="webdesgin ">
                                <h2>
                                    Website Design
                                </h2>
                                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae
                                    dolores
                                    dolorem tempore.</p>
                            </div>
                            <div className="like-me">
                                <div className="user">
                                    <img src={courseimg2} alt="" width="50px" />
                                    <h2>Antonio</h2>
                                </div>
                                <div className="flow">
                                    <i ><BiUser /></i>
                                    <h1>50</h1>
                                    <i><AiOutlineHeart /></i>
                                    <h1>65</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--  --> */}
                    <div className="corses_name">
                        <div className="cource-img">
                            <img src={course21} alt="" />
                        </div>
                        <div className="corses_review_details">
                            <div className="corse_review">
                                <h4> Marketing</h4>
                                <p>$250</p>
                            </div>
                            <div className="webdesgin ">
                                <h2>
                                    Search Engine Optimization
                                </h2>
                                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae
                                    dolores dolorem tempore.</p>
                            </div>
                            <div className="line"></div>
                            <div className="like-me">
                                <div className="user">
                                    <img src={trainer2} alt="" width="50px" />
                                    <h2>Lana</h2>
                                </div>
                                <div className="flow">
                                    <i > <BiUser /></i>
                                    <h1>35</h1>
                                    <i><AiOutlineHeart /></i>
                                    <h1>42</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="corses_name">
                        <div className="cource-img">
                            <img src={course3} alt="" />
                        </div>
                        <div className="corses_review_details">
                            <div className="corse_review">
                                <h4> Content</h4>
                                <p>$180</p>
                            </div>
                            <div className="webdesgin ">
                                <h2>
                                    Copywriting
                                </h2>
                                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae
                                    dolores dolorem tempore.</p>
                            </div>
                            <div className="line"></div>
                            <div className="like-me">
                                <div className="user">
                                    <img src={trainer31} alt="" width="50px" />
                                    <h2>Brandon</h2>
                                </div>
                                <div className="flow">
                                    <i > <BiUser /></i>
                                    <h1>20</h1>
                                    <i><AiOutlineHeart /></i>
                                    <h1>85</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Courses