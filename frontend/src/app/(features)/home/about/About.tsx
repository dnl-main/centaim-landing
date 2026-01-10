import "./about.css";
import "./aboutMq.css"

import Image from "next/image";
import aboutMain from "../../../../../public/_assets/photo/aboutMain.png";
import concorde from "../../../../../public/_assets/images/concorde-image.png";
import centaim from "../../../../../public/_assets/logo/centaimLogo.png"

import { IconUserCircle, IconCalendarCheck, IconNotebook, IconBell } from "@tabler/icons-react";

const About = () => {

  return (
    <section className="homeabout" id="about-us" aria-labelledby="about-title">
      <div className="homeabout-box">
        <div className="homeabout-box-in">
          <div className="homeabout-ui">
            <div className="homeabout-ui-left">
              <Image
                src={centaim}
                alt="Centaim Business Logo"
                className="concorde-logo"
              />

              <div className="statistic-container">
                <div className="statistic-container-top">
                  <article className="statistic">
                    <div className="graph"></div>
                    <div className="statistics-info">
                      <div className="statistics-percentage"><strong>- 40%</strong></div>
                      <div className="statistics-category">Time Delays</div>
                    </div>
                  </article>
                </div>

                <div className="statistic-container-bottom">
                  <article className="statistic">
                    <div className="graph"></div>
                    <div className="statistics-info">
                      <div className="statistics-percentage"><strong>+ 30%</strong></div>
                      <div className="statistics-category">Operational Efficiency</div>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div className="homeAbout-ui-right">
              <div className="guide-container">
                <div className="guide">
                  <header className="guide-header">
                    <p>How it works</p>
                  </header>

                  <div className="guide-nav-icons">
                    {/* Simplified steps for accessibility */}
                    <div className="nav-white">
                      <div className="icon-container-white"><IconUserCircle strokeWidth={1} color="var(--primary-color)" fill="var(--white-color)"/></div>
                      <div className="nav-title"><p>User Registration</p></div>
                    </div>

                    <div className="nav-white">
                      <div className="icon-container-white"><IconCalendarCheck strokeWidth={1} color="var(--primary-color)" fill="var(--white-color)"/></div>
                      <div className="nav-title"><p>Easy Scheduling</p></div>
                    </div>

                    <div className="nav-primary">
                      <div className="icon-container-primary"><IconNotebook strokeWidth={1} size={45} color="var(--white-color)" fill="var(--primary-color)"/></div>
                      <div className="nav-title"><p>Certification Tracking</p></div>
                    </div>

                    <div className="nav-white">
                      <div className="icon-container-white"><IconBell strokeWidth={1} size={45} color="var(--primary-color)" fill="var(--white-color)"/></div>
                      <div className="nav-title"><p>Real-Time Notification</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="homeabout-text">
            <h2 id="about-title" className="homeabout-text-semibold">About us</h2>
            <p className="homeabout-text-regular">
              Centaim helps teams handle scheduling and certification tracking easily. Our simple platform makes it faster to organize tasks and stay on top of deadlines. We’re here to help your team work better and get more done together.
            </p>
          </div>
        </div>
      </div>    
    </section>
  );
};

export default About;