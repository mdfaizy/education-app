import './Trainers1.css';
import trainer1 from '../../assets/trainer-1 (1).jpg';
import trainer2 from '../../assets/trainer-2 (1).jpg';
import trainer3 from '../../assets/trainer-3 (1).jpg';
import { AiFillFacebook, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoTwitter } from 'react-icons/bi';


const Trainers1 = () => {
    return (
        <div className='trainers'>
            <div className="profile" id="Trainers">
                <div className="profile1">
                    <div>
                        <img src={trainer1} alt="" />
                    </div>
                    <div className="walter-white">
                        <h2>Walter White
                        </h2>
                        <h4> Web Development</h4>
                        <p>Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis
                            quaerat
                            qui aut aut aut</p>
                        <i><BiLogoTwitter /></i>
                        <i><AiFillFacebook /></i>
                        <i><AiOutlineInstagram /></i>
                        <i><AiFillLinkedin /></i>
                    </div>
                </div>
                <div className="profile1">
                    <div>
                        <img src={trainer2} alt="" />
                    </div>
                    <div className="walter-white">
                        <h2>Sarah Jhinson
                        </h2>
                        <h4> Marketing</h4>
                        <p>Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum
                            rerum
                            temporibus</p>
                        <i><BiLogoTwitter /></i>
                        <i><AiFillFacebook /></i>
                        <i><AiOutlineInstagram /></i>
                        <i><AiFillLinkedin /></i>
                    </div>
                </div>
                <div className="profile1">
                    <div>
                        <img src={trainer3} alt="" />
                    </div>
                    <div className="walter-white">
                        <h2>William Anderson
                        </h2>
                        <h4> Content</h4>
                        <p>Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum
                            toro
                            des clara</p>
                        <i><BiLogoTwitter /></i>
                        <i><AiFillFacebook /></i>
                        <i><AiOutlineInstagram /></i>
                        <i><AiFillLinkedin /></i>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Trainers1