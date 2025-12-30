"use client";
import "./hero.css";
import "./heroMq.css"

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";

import person1 from "../../../../../public/_assets/images/profile-pictures/person1.png";
import person2 from "../../../../../public/_assets/images/profile-pictures/person2.png";
import person3 from "../../../../../public/_assets/images/profile-pictures/person3.png";


import landingLaptop from "../../../../../public/_assets/overlay/landingLaptop.png";
import landingBg from "../../../../../public/_assets/photo/landingBg.png";



import { Star } from "lucide-react";

type EasingFunction = (t: number, b: number, c: number, d: number) => number;
const Hero = () => {

  // const scrollToContact = () => {
  //   const contactSection = document.getElementById('contact-section');
  //   if (contactSection) {
  //     contactSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // 1. Define an Easing Function
  const easeInOutQuad: EasingFunction = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  // 2. The TypeScript-Proof Custom Scroll Function
  const scrollToContact = () => {
    // Ensure the target is an HTMLElement
    const target = document.getElementById('contact-section');
    if (!target) return;

    // TypeScript automatically infers the return type of getBoundingClientRect()
    const targetPosition: number = target.getBoundingClientRect().top + window.scrollY;
    const startPosition: number = window.scrollY;
    const distance: number = targetPosition - startPosition;
    const duration: number = 1500; // Time in milliseconds (1.5s)
    let startTime: number | null = null; // startTime can be null initially or a number

    // Define the type for the requestAnimationFrame callback
    const animation: FrameRequestCallback = (currentTime: DOMHighResTimeStamp) => {
      // 1. Initial Start Time Check
      if (startTime === null) {
        startTime = currentTime;
      }

      const timeElapsed: number = currentTime - startTime;
      
      // 2. Use the Easing function
      const run: number = easeInOutQuad(timeElapsed, startPosition, distance, duration);

      // 3. Scroll and Loop Check
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        window.requestAnimationFrame(animation);
      }
    };

    // Start the animation loop
    window.requestAnimationFrame(animation);
  };

  return (
    <div className="heroHome">
      <div className="heroHome">
      <div className="heroHome-box">
        {/* LEFT SIDE ------------------------------------------------ */}
        <div className="heroHome-box-left">
          <div className="heroHome-box-left-logo">
            <Link href={"/landing"} className="Centaim-Logo">
                <p>Centaim</p>
            </Link>
          </div>

          <div className="heroHome-box-left-main">
            {/* Header */}
            <div className="heroHome-box-left-main-header">
              <p className="heroHome-box-left-main-header-medium">Effortlessly Manage</p>

              <div className="heroHome-box-left-main-header-second">
                <p className="heroHome-box-left-main-header-second-medium">
                   your
                </p>
                <p className="heroHome-box-left-main-header-second-bold">
                  Business
                </p>
              </div>
            </div>

            {/* Subheader */}
            <div className="heroHome-box-left-main-sub">
              <p className="heroHome-box-left-main-sub-regular">
                Take control of your workflow 
              </p>

              <div className="heroHome-box-left-main-sub-second">
                <p className="heroHome-box-left-main-sub-second-regular">
                  and growth with
                </p>
                <p className="heroHome-box-left-main-sub-second-bold">
                  Scopos
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="heroHome-box-left-main-buttons">
              {/* <Link
                to={ROUTES.SIGNUP}
                className="heroHome-box-left-main-buttons-signUp"
              >
                Sign up for free
              </Link> */}
              {/* <div className="heroHome-box-left-main-buttons-signUp">
                Sign up
              </div> */}

              {/* <Link
                to={ROUTES.LOGIN}
                className="heroHome-box-left-main-buttons-logIn"
              >
                Log in
              </Link> */}
              {/* <div className="heroHome-box-left-main-buttons-logIn">
                Login
              </div> */}

              <button 
                className="hero-mid-buttons-cta heroHome-cta"
                onClick={scrollToContact}
              >
                <p>Contact Us</p>
              </button>
            </div>
          </div>

          <Reviews />
        </div>

        {/* RIGHT SIDE ------------------------------------------------ */}
        <div className="heroHome-box-right">
          <Image
            src={landingLaptop}
            className="heroHome-box-right-laptop"
            alt="laptop"
          />

          <Image
            src={landingBg}
            className="heroHome-box-right-bg"
            alt="background"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;

// ---- Stars ----------------------------------------------------------

// const RenderStars = memo(({ count = 5 }) => {
//   return [...Array(count)].map((_, i) => (
//     <Star
//       key={i}
//       className="star-icon"
//       style={{
//         width: "2.8vh",
//         height: "2.8vh",
//         // "--fill-color": "#FFCB45",
//       }}
//     />
//   ));
// });

interface RenderStarsProps {
  count?: number;  // make it optional, default will still work
}

const RenderStars = memo(({ count = 5 }: RenderStarsProps) => {
  return [...Array(count)].map((_, i) => (
    <Star
      key={i}
      className="star-icon"
      style={{
        width: "2.8vh",
        height: "2.8vh",
      }}
    />
  ));
});

// ---- Reviews Box ----------------------------------------------------

const Reviews = memo(() => {
  const avatars = [person1, person2, person3];

  const results = [
    { value: "+18%", text: "Efficiency" },
    { value: "+26%", text: "Engagement" },
    { value: "+65%", text: "Productivity" },
  ];

  return (
    <div className="heroHome-box-left-reviews">
      {/* <div className="heroHome-box-left-reviews-rating">
        <div className="heroHome-box-left-reviews-rating-img">
          {avatars.map((dp, i) => (
            <div
              key={i}
              className="heroHome-box-left-reviews-rating-img-crop"
            >
              <img src={dp} alt={`profile-${i}`} />
            </div>
          ))}
        </div>

        <div className="heroHome-box-left-reviews-rating-value">
          <div className="heroHome-box-left-reviews-rating-value-top">
            <p className="heroHome-box-left-reviews-rating-value-top-medium">
              4.5
            </p>
            <div className="heroHome-box-left-reviews-rating-value-top-stars">
              <RenderStars />
            </div>
          </div>
          <p className="heroHome-box-left-reviews-rating-value-regular">
            (3.5K Ratings)
          </p>
        </div>
      </div> */}

      <div className="heroHome-box-left-reviews-result">
        {results.map(({ value, text }, i) => (
          <div
            key={i}
            className="heroHome-box-left-reviews-result-content"
          >
            <div className="heroHome-box-left-reviews-result-content-separator" />
            <div className="heroHome-box-left-reviews-result-content-text">
              <p className="heroHome-box-left-reviews-result-text-semibold">
                {value}
              </p>
              <p className="heroHome-box-left-reviews-result-text-regular">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

// ---- Landing Page ----------------------------------------------------