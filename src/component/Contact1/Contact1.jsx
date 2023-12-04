import "./Contact1.css";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { GoDeviceMobile } from "react-icons/go";

const Contact1 = () => {
  return (
    <div className="map-contact">
      <div className="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d235399.8164090638!2d88.2826493!3d22.797938!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1686505099956!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div id="from">
        <div className="location_contact">
          <div className="location">
            <li>
              <CiLocationOn />
            </li>
            <div className="address_details">
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          <div className="email">
            <li>
              <MdOutlineMail />
            </li>

            <div className="email_details">
              <h4>Email:</h4>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="call">
            <li>
              <GoDeviceMobile />
            </li>
            <div className="call_details">
              <h4>Call:</h4>
              <p>+1 5589 55488 55s</p>
            </div>
          </div>
        </div>
        <form action="">
          <div className="form_container">
            <div className="form-container-media">
              <div className="form_control">
                <input
                  id="first_name"
                  name="first_name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form_control">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="form_control1">
              <input
                type="subject"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="textarea_control">
              <textarea
                id="address"
                name="address"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <div className="button_container">
            <button className="button-container">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact1;
