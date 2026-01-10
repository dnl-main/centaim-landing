import "./features.css";
import "./featuresMq.css";

import Image from "next/image";
import laptop from "../../../../../public/_assets/images/Macbook Air (2022) 1.png";
import certificateTracking from "../../../../../public/_assets/images/certificateTracking.png";
import calendar from "../../../../../public/_assets/images/calendarHome.png";

import AvailableCrewMini from "./featureComponent/AvailableCrewMini";
import CertificateTrackingMini from "./featureComponent/CertificateTrackingMini";

const Features = () => {
  return (
    <section className="homeFeatures" id="features">
      {/* Search Engine Instruction Block */}

      <div className="homeFeatures-box">
        <div className="homeFeatures-box-in">
          
          <div className="homeFeatures-heading">
            <h2>Manage your team</h2>
          </div>

          <div className="homeFeatures-ui">
            {/* Availability Monitoring */}
            <article className="features-container-left">
              <div className="feature-left-header">
                <h3>Availability Monitoring</h3>
              </div>
              <div className="feature-left-catch">
                <p>Streamline crew scheduling by enabling real-time crew availability monitoring.</p>
              </div>

              <div className="feature-left-content">
                <AvailableCrewMini />
              </div>

              <Image
                src={laptop}
                alt="Centaim dashboard showing real-time crew availability monitoring on a Macbook Air"
                className="laptop-image"
                loading="lazy"
              />
            </article>

            {/* Certificate Tracking */}
            <article className="features-container-middle">
              <Image
                src={certificateTracking}
                alt="Interface showing centralized tracking of crew certifications and expiration dates"
                className="certificate-image"
                loading="lazy"
              />
              <div className="feature-middle-content">
                <CertificateTrackingMini />
              </div>
              <div className="feature-header">
                <h3>Certificate Tracking</h3>
              </div>
              <div className="feature-middle-catch">
                <p>Centralized tracking of crew certifications and expiration dates.</p>
              </div>
            </article>

            {/* Interactive Calendar */}
            <article className="features-container-right">
              <div className="feature-right-header">
                <h3>Interactive Calendar</h3>
              </div>
              <div className="feature-right-catch">
                <p>
                  Visualize schedules, deadlines, and certification expiration
                  for improved planning and resource allocation.
                </p>

                <Image
                  src={calendar}
                  alt="Interactive team scheduling calendar for resource allocation"
                  className="calendar-image"
                  loading="lazy"
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;