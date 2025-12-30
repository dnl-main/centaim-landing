import "./benefits.css";
import "./benefitsMq.css"

import Image from "next/image";
import beneMain from "../../../../../public/_assets/photo/beneMain.png";

const Benefits = () => {
  return (
    <div className="homeBenefits">
    <div className="homeBenefits-box">
    <div className="homeBenefits-box-in">
      <div className="homeBenefits-heading">
        <p>Easily book a meeting with your team</p>
        {/* <p>Easily book a meeting with your team</p> */}
      </div>

      <div className="homeBenefits-ui">
        <div className="homeBenefits-ui-cards">
          <div className="homeBenefits-ui-cards-card">
            <p className="homeBenefits-ui-cards-card-medium">Book a meeting in just a few clicks</p>
            <p className="homeBenefits-ui-cards-card-light">Easy to use tool that sets your meeting faster</p>
          </div>
          <div className="homeBenefits-ui-cards-card">
            <p className="homeBenefits-ui-cards-card-medium">Reschedule meetings quickly and easily</p>
            <p className="homeBenefits-ui-cards-card-light">Reschedule in seconds without disrupting your workflow</p>
          </div>
          <div className="homeBenefits-ui-cards-card">
            <p className="homeBenefits-ui-cards-card-medium">Automatic reminder for scheduled meetings</p>
            <p className="homeBenefits-ui-cards-card-light">Keep everyone on track with automated reminders</p>
          </div>
        </div>
        <div className="homeBenefits-ui-img">
          <Image
            src={beneMain}
            alt="ui"
          />
        </div>
      </div>
    </div>
    </div>      
    </div>
  );
};

export default Benefits;