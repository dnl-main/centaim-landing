import "./hero.css";
import "./heroMq.css";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

// Import Client Component for the button
import ScrollButton from "./_components/ScrollButton";
import centaimLogo from "../../../../../public/_assets/logo/centaimLogo.png";

// Assets
import landingLaptop from "../../../../../public/_assets/overlay/homepageLaptop2.png";
import landingBg from "../../../../../public/_assets/photo/landingBg.png";

// 1. Metadata - Exported directly from the Server Component
export const metadata: Metadata = {
  title: "Centaim | Effortlessly Manage Your Business Growth",
  description: "Scale your workflow with Centaim. Boost efficiency by 18% and productivity by 65% with our modern business dashboard.",
};

const Hero = () => {
  return (
    <section className="heroHome">
      <div className="heroHome-box">
        <div className="heroHome-box-left">
          <header className="heroHome-box-left-logo">
            <div className="hero-mid-tagline-logo-img">
              <Image
                src={centaimLogo}
                alt="Logo image of Centaim"
              />
            </div>
            <Link href="/landing" className="Centaim-Logo">
              <span>Centaim</span>
            </Link>
          </header>

          <div className="heroHome-box-left-main">
            {/* 3. Semantic H1 with keywords */}
            <h1 className="heroHome-box-left-main-header">
              <span className="heroHome-box-left-main-header-medium">Effortlessly Manage </span>
              <div className="heroHome-box-left-main-header-second">
                <span className="heroHome-box-left-main-header-second-medium">your </span>
                <strong className="heroHome-box-left-main-header-second-bold">Business</strong>
              </div>
            </h1>

            <div className="heroHome-box-left-main-sub">
             <p className="heroHome-box-left-main-sub-regular">
                Take control of your workflow 
              </p>

              <div className="heroHome-box-left-main-sub-second">
                <p className="heroHome-box-left-main-sub-second-regular">
                  and growth with
                </p>
                <p className="heroHome-box-left-main-sub-second-bold">
                  Centaim
                </p>
                </div>
            </div>

            <div className="heroHome-box-left-main-buttons">
              {/* 4. Client Component for the specific interaction */}
              <ScrollButton />
            </div>
          </div>

          <Reviews />
        </div>

        <div className="heroHome-box-right">
          {/* 5. Image Optimization - Priority + Alt text */}
          <Image
            src={landingLaptop}
            className="heroHome-box-right-laptop"
            alt="Centaim Business Dashboard on Laptop"
            priority // Critical for LCP
            placeholder="blur" 
          />
          <Image
            src={landingBg}
            className="heroHome-box-right-bg"
            alt="" 
            role="presentation"
            priority
          />
        </div>
      </div>
    </section>
  );
};

// Sub-components kept in same file for simplicity
const Reviews = () => {
  const results = [
    { value: "+18%", text: "Efficiency" },
    { value: "+26%", text: "Engagement" },
    { value: "+65%", text: "Productivity" },
  ];

  return (
    <div className="heroHome-box-left-reviews">
      <div className="heroHome-box-left-reviews-result">
        {results.map(({ value, text }, i) => (
          <div key={i} className="heroHome-box-left-reviews-result-content">
            <div className="heroHome-box-left-reviews-result-content-separator" />
            <div className="heroHome-box-left-reviews-result-content-text">
              <p className="heroHome-box-left-reviews-result-text-semibold">{value}</p>
              <p className="heroHome-box-left-reviews-result-text-regular">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;