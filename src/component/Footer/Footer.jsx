import './Footer.css';
import { AiFillFacebook, AiFillLinkedin, AiOutlineInstagram, AiFillSkype } from "react-icons/ai";
import { BiLogoTwitter } from 'react-icons/bi';

const Footer
    = () => {
        return (
            <div>
                <footer>
                    <div className="footer1">
                        <div className="footer2">
                            <h2>© Copyright<b> Edu.</b> <span>All Rights Reserved</span></h2>
                            <p>Designed by <span>Gm Faizy</span></p>
                        </div>
                        <div className="footer3">
                            <ul>
                                <li><BiLogoTwitter /></li>
                                <li><AiFillFacebook /></li>
                                <li><AiOutlineInstagram /></li>
                                <li><AiFillSkype /></li>
                                <li><AiFillLinkedin /></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
export default Footer
