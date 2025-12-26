import "./hero.css";
import "./heroMQ.css";
import Link from "next/link";
import Image from "next/image";

import heroLeft from "../../../../../public/_assets/overlay/hero-left.png";
import heroRight from "../../../../../public/_assets/overlay/hero-right.png";
import scoposLogo from "../../../../../public/_assets/logo/scopos-logo.webp";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-box">
        {/* <Nav /> */}
          
        <div className="hero-box-in">
          <div className="hero-left">
            <Image
                src={heroLeft}
                alt="hero left image"
                className="hero-img"
            />
          </div> {/* hero-left */}
 
          <div className="hero-mid">
            <div className="hero-mid-tagline">
              <div className="hero-mid-tagline-logo">
                <div className="hero-mid-tagline-logo-img">
                  <Image
                    src={scoposLogo}
                    alt="Logo image of Centaim"
                  />
                </div>
                
                
                <p>Centaim</p>

              </div>
              {/* <p className="hero-mid-tagline-light">Performance comes with Precision</p> */}
            </div> {/* hero-mid-tagline */}

            <div className="hero-mid-heading">
              <p>Every Website Starts</p>
              <p>With A Clear Aim </p>
            </div> {/* hero-mid-heading */}

            <div className="hero-mid-sub">
              <p className="hero-mid-sub-a">From clicks to conversion, we help you measure</p>
              <p className="hero-mid-sub-b">success at every step of your growth journey</p>
            </div> {/* hero-mid-sub */}

            <div className="hero-mid-buttons">
              {/* <button className="hero-mid-buttons-cta">
                <p>Get started</p>
              </button>  */}
              
              <Link href="/home" className="hero-mid-buttons-cta">
                <p>Get started</p>
              </Link> {/* hero-mid-buttons-cta */}

              {/* <button className="hero-mid-buttons-alt">
                <p>Learn more</p>
              </button>  */}
              {/* hero-mid-buttons-alt */}
            </div> {/* hero-mid-buttons */}
          </div> {/* hero-mid */}

          <div className="hero-right">
            <Image
                src={heroRight}
                alt="hero image right"

            />
          </div> {/* hero-right */}
        </div> {/* hero-box-in */}
      </div> {/* hero-box */}

    </div>
  );
};

export default Hero;
