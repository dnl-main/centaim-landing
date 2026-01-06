import "./features.css";
import "./featuresMq.css";

import Image from "next/image";
import featLeft from "../../../../../public/_assets/photo/featLeft.png";
import featMid from "../../../../../public/_assets/photo/featMid.png";
import featRight from "../../../../../public/_assets/photo/featRight.png";
import laptop from "../../../../../public/_assets/images/Macbook Air (2022) 1.png";
import certificateTracking from "../../../../../public/_assets/images/certificateTracking.png"
import calendar from "../../../../../public/_assets/images/calendarHome.png"

import AvailableCrewMini from "./featureComponent/AvailableCrewMini";
import CertificateTrackingMini from "./featureComponent/CertificateTrackingMini";

const Features = () => {
  return (
    <div className="homeFeatures">
      <div className="homeFeatures-box">
        <div className="homeFeatures-box-in">
          <div className="homeFeatures-heading">
            <p>Organize your teams and inventory</p>
          </div>

          {/* <div className="homeFeatures-button"></div> */}

          <div className="homeFeatures-ui">
            <div className="features-container-left">
              <div className="feature-left-header">
                <h1>Availability Monitoring</h1>
              </div>
              <div className="feature-left-catch">
                <p>streamline crew scheduling by enabling</p>
                <p>real-time crew availability monitoring.</p>
              </div>

              <div className="feature-left-content">
                <AvailableCrewMini />
              </div>

              <Image
                src={laptop}
                alt="laptop image"
                className="laptop-image"
              />
            </div>

            <div className="features-container-middle">
              <Image
                src={certificateTracking}
                alt="certicate tracking image"
                className="certificate-image"
              />
              <div className="feature-middle-content">
                <CertificateTrackingMini />
              </div>
              <div className="feature-header">
                <h1>
                  Certificate <br /> Tracking
                </h1>
              </div>
              <div className="feature-middle-catch">
                <p>Centralized tracking of crew</p>
                <p>certifications and expiration dates.</p>
              </div>
            </div>

            <div className="features-container-right">
              <div className="feature-right-header">
                <h1>
                  Interactive <br /> Calendar
                </h1>
              </div>
              <div className="feature-right-catch">
                <p>
                  Visualize schedules, deadlines, and certification expiration
                  for improved planning and resource allocation.
                </p>

                <Image
                  src={calendar}
                  alt="calendar image for home"
                  className="calendar-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;