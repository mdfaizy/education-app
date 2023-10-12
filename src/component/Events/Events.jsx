import events2 from "../../assets/events-2.jpg";
import events11 from "../../assets/events-1.jpg";
import "./Events.css";

const Events = () => {
  return (
    <div>
   

      <div className="event_section" id="event_section">
        <div className="event_img">
          <div className="event_img1">
            <img src={events11} alt="" />
          </div>
          <div className="event_img2">
            <h5>Introduction to webdesign</h5>
            <p>Sunday, September 26th at 7:00 pm</p>
            <p className="events-text">
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat
            </p>
          </div>
        </div>

        <div className="event_img">
          <div className="event_img1">
            <img src={events2} alt="" />
          </div>
          <div className="event_img2">
            <h5>Marketing Strategies</h5>
            <p>Sunday, November 15th at 7:00 pm</p>
            <p className="events-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
