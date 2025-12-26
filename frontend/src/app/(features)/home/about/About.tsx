import "./about.css";
import Image from "next/image";
import aboutMain from "../../../../../public/_assets/photo/aboutMain.png";

const About = () => {
  return (
    <div className="homeabout">
    <div className="homeabout-box">
    <div className="homeabout-box-in">
      <div className="homeabout-ui">
        <Image
            src={aboutMain}
            alt="ui"
        />

      </div>
      <div className="homeabout-text">
        {/* <p className="homeabout-text-light">a little bit</p> */}
        <p className="homeabout-text-semibold">About us</p>
        <p className="homeabout-text-regular">Scopos helps teams handle scheduling and certification tracking easily. Our simple platform makes it faster to organize tasks and stay on top of deadlines. We’re here to help your team work better and get more done together. </p>
      </div>
    </div>
    </div>    
    </div>
  );
};

export default About;