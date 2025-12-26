import "./features.css";
import Image from "next/image";
import featLeft from "../../../../../public/_assets/photo/featLeft.png";
import featMid from "../../../../../public/_assets/photo/featMid.png";
import featRight from "../../../../../public/_assets/photo/featRight.png";

const Features = () => {
  return (
    <div className="homeFeatures">
    <div className="homeFeatures-box">
    <div className="homeFeatures-box-in">

      <div className="homeFeatures-heading">
        <p>Organize your teams and inventory</p>
      </div>

      <div className="homeFeatures-button">

      </div>

      <div className="homeFeatures-ui">
        <Image
            src={featLeft}
            alt="ui"
        />
        <Image
            src={featMid}
            alt="ui"
        />
        <Image
            src={featRight}
            alt="ui"
        />
      </div>
    </div> 
    </div> 
    </div> 
  );
};

export default Features;