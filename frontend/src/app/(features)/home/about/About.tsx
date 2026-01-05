import "./about.css";
import "./aboutMq.css"

import Image from "next/image";
import aboutMain from "../../../../../public/_assets/photo/aboutMain.png";
import concorde from "../../../../../public/_assets/images/concorde-image.png"

import { IconUserCircle, IconCalendarCheck, IconNotebook, IconBell } from "@tabler/icons-react";

const About = () => {
  return (
    <div className="homeabout">
    <div className="homeabout-box">
    <div className="homeabout-box-in">
      <div className="homeabout-ui">
        <div className="homeabout-ui-left">
          <Image
            src={concorde}
            alt="concorde logo"
            className="concorde-logo"
          />

          <div className="statistic-container">
            <div className="statistic-container-top">
              <div className="statistic">
                <div className="graph"></div>
                <div className="statistics-info">
                  <div className="statistics-percentage"><h1>- 40%</h1></div>
                  <div className="statistics-category">Time Delays</div>
                </div>
              </div>
            </div>

            <div className="statistic-container-bottom">
              <div className="statistic">
                <div className="graph"></div>
                <div className="statistics-info">
                  <div className="statistics-percentage"><h1>+ 30%</h1></div>
                  <div className="statistics-category">Operational Efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="homeAbout-ui-right">
          <div className="guide-container">
            <div className="guide">
              <div className="guide-header">
                <p>How it works</p>
              </div>

              <div className="guide-nav-icons">
                <div className="nav-white">
                  <div className="icon-container-white">
                    <IconUserCircle
                      strokeWidth={1}
                      size={45}
                      color="var(--primary-color)"  
                      fill="var(--white-color)"
                    />
                  </div>
                  <div className="nav-title">
                    <p>User</p>
                    <p>Registration</p>
                  </div>
                </div>

                <div className="nav-white">
                  <div className="icon-container-white">
                    <IconCalendarCheck
                      strokeWidth={1}
                      size={45}
                      color="var(--primary-color)"  
                      fill="var(--white-color)"
                    />
                  </div>
                  <div className="nav-title">
                    <p>Easy</p>
                    <p>Scheduling</p>
                  </div>
                </div>

                <div className="nav-primary">
                  <div className="icon-container-primary">
                    <IconNotebook
                      strokeWidth={1}
                      size={45}
                      color="var(--white-color)"  
                      fill="var(--primary-color)"
                    />
                  </div>
                  <div className="nav-title">
                    <p>Certification</p>
                    <p>Tracking</p>
                  </div>
                </div>
                <div className="nav-white">
                  <div className="icon-container-white">
                    <IconBell
                      strokeWidth={1}
                      size={45}
                      color="var(--primary-color)"  
                      fill="var(--white-color)"
                    />
                  </div>
                  <div className="nav-title">
                    <p>Real-Time</p>
                    <p>Notification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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